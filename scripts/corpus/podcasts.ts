/**
 * Phase "podcasts": pull tap podcast theo RSS feed trong sources.json.
 *
 * Uu tien text co san truoc khi dung audio:
 *   1. Show-notes trong RSS (description/content:encoded) qua htmlToText > 2000 ky tu
 *      -> coi la du, ghi luon, KHONG transcribe. via: "shownotes".
 *   2. Show-notes mong -> tai audio tu <enclosure>, transcribe bang mlx_whisper. via: "whisper".
 *   3. Khong co enclosure -> ghi state ok:false err "no audio", di tiep, khong crash ca run.
 *
 * Audio tam luu o ${OUT}/audio/ (o ngoai SamDisk, KHONG /tmp vi dia he thong gan day).
 * Xoa file audio NGAY sau khi xong, ke ca khi transcribe loi (try/finally).
 * Transcribe TUAN TU - 1 tien trinh mlx_whisper tai 1 thoi diem (M4 chi co 1 Neural Engine,
 * chay song song se tranh tai nguyen va cham hon tuan tu).
 */

import { mkdirSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const MLX_WHISPER = `${process.env.HOME}/.local/bin/mlx_whisper`;
const WHISPER_MODEL = "mlx-community/whisper-large-v3-turbo";
const SHOWNOTES_MIN = 2000;
const DOWNLOAD_TIMEOUT_MS = 5 * 60_000; // tai file audio
const WHISPER_TIMEOUT_MS = 60 * 60_000; // transcribe 1 tap - benchmark: ~0.30x realtime, 60' du cho tap toi ~3h

type FeedItem = { title: string; link: string; date: string; desc: string; audio?: string };

type Ctx = {
  sources: any;
  state: Record<string, { at: string; via: string; ok: boolean; err?: string }>;
  saveState: () => void;
  get: (url: string) => Promise<string>;
  parseFeed: (xml: string) => FeedItem[];
  writeDoc: (path: string, front: Record<string, string>, body: string) => void;
  htmlToText: (html: string) => string;
  slug: (s: string) => string;
  sleep: (ms: number) => Promise<void>;
  OUT: string;
  LIMIT?: number;
  DRY: boolean;
  /** Pass 1: chi lay show-notes, khong tai audio, khong whisper. Tap thieu notes -> danh dau "pending". */
  SHOWNOTES_ONLY: boolean;
  /** Slug feed bo qua han (--skip omnitalk-pod). Dung de cat feed dat ma gia tri thap o pass 2. */
  SKIP: string[];
};

/** Tai audio ve dia ngoai, co timeout - treo 1 tap khong duoc treo ca run. */
async function downloadAudio(url: string, dest: string): Promise<void> {
  const r = await fetch(url, { signal: AbortSignal.timeout(DOWNLOAD_TIMEOUT_MS) });
  if (!r.ok) throw new Error(`HTTP ${r.status} khi tai audio`);
  // Doc het vao RAM roi moi ghi. KHONG dung Bun.write(dest, r): stream thang Response ra o USB
  // ngoai bi treo vo han tren Bun 1.4.0 - do that cung 1 file 32MB: curl 8s, buffer 5.5s,
  // stream >5 phut khong xong va khong tao noi file. File audio ~30-60MB, thua suc vao RAM 24GB.
  await Bun.write(dest, await r.arrayBuffer());
}

/** Chay mlx_whisper tren 1 file audio -> transcript text. Timeout rieng, kill khi qua han. */
async function transcribe(audioPath: string, outDir: string): Promise<string> {
  const proc = Bun.spawn(
    [MLX_WHISPER, audioPath, "--model", WHISPER_MODEL, "--output-format", "txt", "--output-dir", outDir],
    { stdout: "ignore", stderr: "pipe" },
  );
  const timer = setTimeout(() => proc.kill(), WHISPER_TIMEOUT_MS);
  const code = await proc.exited;
  clearTimeout(timer);
  const base = audioPath.split("/").pop()!.replace(/\.[^.]+$/, "");
  const txtPath = join(outDir, `${base}.txt`);
  if (code !== 0) {
    const err = await new Response(proc.stderr).text();
    throw new Error(`mlx_whisper exit ${code}: ${err.slice(0, 500)}`);
  }
  if (!existsSync(txtPath)) throw new Error("mlx_whisper khong sinh file .txt");
  const text = (await Bun.file(txtPath).text()).trim();
  rmSync(txtPath, { force: true }); // don file .txt phu - noi dung da chuyen vao .md qua writeDoc
  return text;
}

export async function doPodcasts(ctx: Ctx): Promise<void> {
  const AUDIO_DIR = join(ctx.OUT, "audio");
  if (!ctx.DRY) mkdirSync(AUDIO_DIR, { recursive: true });

  for (const pod of ctx.sources.podcasts) {
    if (ctx.SKIP.includes(pod.slug)) {
      console.log(`\n[podcast] ${pod.name} - BO QUA (--skip)`);
      continue;
    }
    console.log(`\n[podcast] ${pod.name}`);
    let items: FeedItem[];
    try {
      items = ctx.parseFeed(await ctx.get(pod.rss));
    } catch (e: any) {
      console.log(`  ! khong tai duoc feed: ${e.message}`);
      ctx.state[`podcast:${pod.slug}`] = { at: new Date().toISOString(), via: "rss", ok: false, err: e.message };
      ctx.saveState();
      continue;
    }
    if (ctx.LIMIT) items = items.slice(0, ctx.LIMIT);
    console.log(`  ${items.length} tap tu RSS`);

    for (const ep of items) {
      // Key phai trung danh tinh voi ten file (slug tieu de). Dung ep.link se hong: co feed
      // (b2buncut) dat cung 1 <link> cho moi tap -> 51 tap gop thanh 1 key, tap dau ghi ok
      // la 50 tap sau bi "continue" bo qua im lang.
      const key = `podcast:${pod.slug}:${ctx.slug(ep.title)}`;
      if (ctx.state[key]?.ok) continue;
      if (ctx.DRY) { console.log(`  [dry] ${ep.title}`); continue; }

      const path = join(ctx.OUT, "podcast", pod.slug, `${ctx.slug(ep.title)}.md`);
      const front = {
        source: pod.name, category: pod.category, url: ep.link, title: ep.title, date: ep.date,
        fetched: new Date().toISOString(),
      };

      let touchedNetwork = false;
      try {
        const showNotes = ctx.htmlToText(ep.desc || "");
        if (showNotes.length > SHOWNOTES_MIN) {
          ctx.writeDoc(path, { ...front, via: "shownotes" }, showNotes);
          ctx.state[key] = { at: new Date().toISOString(), via: "shownotes", ok: true };
          process.stdout.write(".");
        } else if (ctx.SHOWNOTES_ONLY) {
          // Pass 1 khong dung toi audio. Notes mong van la metadata that (tieu de, ngay, link)
          // nen cu ghi; state danh dau "pending" de pass 2 biet chinh xac tap nao con phai whisper.
          if (showNotes.length > 0) ctx.writeDoc(path, { ...front, via: "shownotes-thin" }, showNotes);
          ctx.state[key] = {
            at: new Date().toISOString(),
            via: "pending",
            ok: false,
            err: ep.audio ? "shownotes mong - cho whisper pass 2" : "no audio",
          };
          process.stdout.write(ep.audio ? "-" : "x");
        } else if (ep.audio) {
          const ext = ep.audio.split("?")[0].match(/\.(mp3|m4a|wav|ogg)$/i)?.[1]?.toLowerCase() ?? "mp3";
          const audioPath = join(AUDIO_DIR, `${pod.slug}-${ctx.slug(ep.title)}.${ext}`);
          touchedNetwork = true;
          try {
            await downloadAudio(ep.audio, audioPath);
            const text = await transcribe(audioPath, AUDIO_DIR);
            if (!text || text.length < 50) throw new Error("transcript rong/qua ngan");
            ctx.writeDoc(path, { ...front, via: "whisper" }, text);
            ctx.state[key] = { at: new Date().toISOString(), via: "whisper", ok: true };
            process.stdout.write("W");
          } finally {
            rmSync(audioPath, { force: true }); // xoa audio ngay, ke ca khi loi - dia ngoai khong duoc tich file
          }
        } else {
          ctx.state[key] = { at: new Date().toISOString(), via: "none", ok: false, err: "no audio" };
          process.stdout.write("x");
        }
      } catch (e: any) {
        ctx.state[key] = { at: new Date().toISOString(), via: "whisper", ok: false, err: e.message };
        process.stdout.write("x");
      }
      ctx.saveState();
      // Chi nghi giua cac tap CO cham mang (tai audio). Nhanh show-notes doc tu XML da tai san,
      // sleep o day chi to lam pass 1 dai them 2s x 3900 tap = 2,2 gio khong de lam gi.
      if (touchedNetwork) await ctx.sleep(2000);
    }
  }
}
