#!/usr/bin/env bun
/**
 * Pull noi dung tu cac nguon trong thu vien ecommerce-research-academy.
 *
 * Chay:
 *   bun scripts/corpus/fetch.ts --phase blogs --dry-run
 *   bun scripts/corpus/fetch.ts --phase blogs --limit 3
 *   bun scripts/corpus/fetch.ts --phase youtube
 *   bun scripts/corpus/fetch.ts --phase podcasts
 *
 * Idempotent: state.json ghi tung item da xong, chay lai chi lam phan thieu.
 */

import { mkdirSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { $ } from "bun";
import { doPodcasts } from "./podcasts";
import { discoverArticles } from "./discover";

const OUT = process.env.CORPUS_DIR ?? "/Volumes/SamDisk/ecommerce-research-academy/corpus";
const SOURCES = join(import.meta.dir, "sources.json");
// State tach theo phase: nhieu phase chay song song se ghi de len nhau neu dung chung 1 file.
const STATE_FILE = join(OUT, `state-${process.argv.includes("--phase") ? process.argv[process.argv.indexOf("--phase") + 1] : "blogs"}.json`);
const BLOG_LIMIT = Number(process.env.BLOG_LIMIT ?? 100);
const DELAY_MS = 3000; // giua cac request cung domain

type State = Record<string, { at: string; via: string; ok: boolean; err?: string }>;

const args = process.argv.slice(2);
const flag = (n: string) => args.includes(`--${n}`);
const val = (n: string) => {
  const i = args.indexOf(`--${n}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const PHASE = val("phase") ?? "blogs";
const LIMIT = val("limit") ? Number(val("limit")) : undefined;
const DRY = flag("dry-run");
const SHOWNOTES_ONLY = flag("shownotes-only");
const SKIP = (val("skip") ?? "").split(",").map((s) => s.trim()).filter(Boolean);

const sources = JSON.parse(readFileSync(SOURCES, "utf8"));
const state: State = existsSync(STATE_FILE) ? JSON.parse(readFileSync(STATE_FILE, "utf8")) : {};

const saveState = () => {
  mkdirSync(dirname(STATE_FILE), { recursive: true });
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80) || "untitled";

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36";

/** Fetch co retry nhe. Gap 403/429 hai lan -> nem loi de dung han domain do. */
async function get(url: string): Promise<string> {
  let blocked = 0;
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, {
        headers: { "User-Agent": UA, Accept: "*/*" },
        signal: AbortSignal.timeout(30_000),
      });
      if (r.status === 403 || r.status === 429) {
        if (++blocked >= 2) throw new Error(`BLOCKED ${r.status}`);
        await sleep(5000);
        continue;
      }
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.text();
    } catch (e: any) {
      if (String(e.message).startsWith("BLOCKED")) throw e;
      if (i === 2) throw e;
      await sleep(2000);
    }
  }
  throw new Error("unreachable");
}

const decode = (s: string) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");

/** HTML -> text tho: bo script/style/nav, giu heading + doan van. */
function htmlToText(html: string): string {
  return decode(
    html
      .replace(/<(script|style|nav|footer|header|aside|form|svg)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi, (_, l, t) => `\n\n${"#".repeat(+l)} ${t}\n`)
      .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "\n- $1")
      .replace(/<\/(p|div|section|article|tr|br)[^>]*>/gi, "\n")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Parse RSS/Atom -> danh sach item. */
function parseFeed(xml: string) {
  const items: { title: string; link: string; date: string; desc: string; audio?: string }[] = [];
  const blocks = xml.match(/<(item|entry)\b[\s\S]*?<\/\1>/gi) ?? [];
  for (const b of blocks) {
    const pick = (t: string) => {
      const m = b.match(new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, "i"));
      return m ? decode(m[1]).replace(/<[^>]+>/g, "").trim() : "";
    };
    let link = pick("link");
    if (!link) link = b.match(/<link[^>]+href="([^"]+)"/i)?.[1] ?? "";
    const audio = b.match(/<enclosure[^>]+url="([^"]+)"/i)?.[1];
    items.push({
      title: pick("title"),
      link,
      date: pick("pubDate") || pick("published") || pick("updated"),
      desc: pick("description") || pick("summary") || pick("content:encoded"),
      audio,
    });
  }
  return items;
}

function writeDoc(path: string, front: Record<string, string>, body: string) {
  if (DRY) return;
  mkdirSync(dirname(path), { recursive: true });
  const fm = Object.entries(front)
    .map(([k, v]) => `${k}: ${JSON.stringify(v ?? "")}`)
    .join("\n");
  writeFileSync(path, `---\n${fm}\n---\n\n${body}\n`);
}

// ---------------------------------------------------------------- blogs

async function doBlogs() {
  const list = sources.blogs.slice(0, LIMIT);
  for (const b of list) {
    console.log(`\n[blog] ${b.name}`);
    try {
      // Gom URL bai viet tu 2 nguon. RSS gan nhu LUON bi cat ngan (do that: retaildive tra 10,
      // omnitalk 8 - deu xa muc 100), va 12 site khong co RSS thi truoc day chi lay duoc trang
      // index. Nen sau khi vet RSS, dao tiep sitemap/archive de bu cho du BLOG_LIMIT.
      const seen = new Set<string>();
      const items: { link: string; title?: string; date?: string; via: string }[] = [];

      if (b.rss) {
        for (const it of parseFeed(await get(b.rss))) {
          if (it.link && !seen.has(it.link)) { seen.add(it.link); items.push({ ...it, via: "http-rss" }); }
        }
        console.log(`  ${items.length} bai tu RSS`);
      }

      if (items.length < BLOG_LIMIT) {
        const found = await discoverArticles(b, {
          limit: BLOG_LIMIT - items.length,
          get, sleep, log: (m: string) => console.log(`  ${m}`),
        });
        let added = 0;
        for (const f of found) {
          if (f.url && !seen.has(f.url)) { seen.add(f.url); items.push({ link: f.url, title: f.title, date: f.date, via: "http-discover" }); added++; }
        }
        console.log(`  +${added} bai tu discover`);
      }

      for (const it of items.slice(0, BLOG_LIMIT)) {
        const key = `blog:${b.slug}:${it.link}`;
        if (state[key]?.ok) continue;
        if (DRY) { console.log(`  [dry] ${it.title ?? it.link}`); continue; }
        try {
          const html = await get(it.link);
          const body = htmlToText(html);
          if (body.length < 200) throw new Error("noi dung qua ngan");
          // URL tu sitemap khong kem tieu de - lay tu the <title> cua chinh trang, cuoi cung
          // moi dung slug cuoi URL (van doc duoc, hon la de trang).
          const title = it.title
            ?? html.match(/<title[^>]*>([^<]+)/i)?.[1]?.trim()
            ?? it.link.split("?")[0].split("/").filter(Boolean).pop()!;
          writeDoc(join(OUT, "web", b.slug, `${slug(title)}.md`),
            { source: b.name, category: b.category, url: it.link, title, date: it.date ?? "", fetched: new Date().toISOString(), via: it.via },
            body);
          state[key] = { at: new Date().toISOString(), via: it.via, ok: true };
          process.stdout.write(".");
        } catch (e: any) {
          state[key] = { at: new Date().toISOString(), via: it.via, ok: false, err: e.message };
          process.stdout.write("x");
          if (e.message.startsWith("BLOCKED")) { console.log(`\n  ! bi chan, dung domain nay`); break; }
        }
        await sleep(DELAY_MS);
      }
      saveState();
    } catch (e: any) {
      console.log(`  ! ${e.message}`);
      state[`blog:${b.slug}`] = { at: new Date().toISOString(), via: "http", ok: false, err: e.message };
      saveState();
    }
  }
}

// ---------------------------------------------------------------- youtube

const YTDLP = process.env.YTDLP ?? `${process.env.HOME}/.local/bin/yt-dlp`;

async function doYoutube() {
  for (const ch of sources.youtube.slice(0, LIMIT)) {
    console.log(`\n[yt] ${ch.name}`);
    const ids = (await $`${YTDLP} --flat-playlist --print id ${ch.channel}/videos`.text())
      .trim().split("\n").filter(Boolean);
    console.log(`  ${ids.length} video`);
    if (DRY) continue;

    for (const id of ids.slice(0, LIMIT)) {
      const key = `yt:${id}`;
      if (state[key]?.ok) continue;
      const dir = join(OUT, "youtube", ch.slug);
      mkdirSync(dir, { recursive: true });
      try {
        // uu tien caption co san
        // "en.*" PHAI di qua bien de Bun $ quote lai; viet thang vao template thi shell nuot mat.
        const langs = "en.*";
        await $`${YTDLP} --skip-download --write-auto-subs --write-subs --sub-langs ${langs} --sub-format vtt -o ${join(dir, id)} https://www.youtube.com/watch?v=${id}`.quiet();
        const vtt = (await $`ls ${dir}`.text()).split("\n").find((f) => f.startsWith(id) && f.endsWith(".vtt"));
        if (!vtt) throw new Error("khong co caption");
        const text = vttToText(readFileSync(join(dir, vtt), "utf8"));
        const title = (await $`${YTDLP} --skip-download --print title https://www.youtube.com/watch?v=${id}`.text()).trim();
        writeDoc(join(dir, `${slug(title)}.md`),
          { source: ch.name, category: ch.category, url: `https://www.youtube.com/watch?v=${id}`, title, video_id: id, fetched: new Date().toISOString(), via: "yt-caption" },
          text);
        // yt-dlp de lai nhieu file (en-orig.vtt + en.vtt) - xoa het, khong chi cai vua doc.
        for (const f of (await $`ls ${dir}`.text()).split("\n"))
          if (f.startsWith(id) && f.endsWith(".vtt")) await $`rm -f ${join(dir, f)}`.quiet();
        state[key] = { at: new Date().toISOString(), via: "yt-caption", ok: true };
        process.stdout.write(".");
      } catch (e: any) {
        state[key] = { at: new Date().toISOString(), via: "yt-caption", ok: false, err: e.message };
        process.stdout.write("x");
      }
      saveState();
      await sleep(1500);
    }
  }
}

// ---------------------------------------------------------------- courses

const COURSE_PAGE_LIMIT = 60;

/** Trich link bai hoc cung domain tu trang index cua khoa. */
function courseLinks(html: string, base: string): string[] {
  const origin = new URL(base).origin;
  const hrefs = [...html.matchAll(/href="([^"#?]+)"/gi)].map((m) => m[1]);
  const abs = hrefs
    .map((h) => (h.startsWith("http") ? h : h.startsWith("/") ? origin + h : null))
    .filter((h): h is string => !!h && h.startsWith(origin))
    .filter((h) => !/\.(png|jpe?g|svg|gif|css|js|pdf|zip|webp|ico)$/i.test(h));
  return [...new Set(abs)];
}

async function doCourses() {
  for (const c of sources.courses.slice(0, LIMIT)) {
    console.log(`\n[course] ${c.name}`);
    if (c.auth === "browser") {
      console.log(`  bo qua: can dang nhap qua browser (${c.note ?? ""})`);
      state[`course:${c.slug}`] = { at: new Date().toISOString(), via: "browser", ok: false, err: "can browser dang nhap - lam rieng" };
      continue;
    }
    try {
      const index = await get(c.url);
      const links = courseLinks(index, c.url).slice(0, COURSE_PAGE_LIMIT);
      console.log(`  ${links.length} trang con`);
      if (DRY) continue;

      // luu ca trang index
      writeDoc(join(OUT, "courses", c.slug, "index.md"),
        { source: c.name, category: c.category, url: c.url, title: c.name, fetched: new Date().toISOString(), via: "http" },
        htmlToText(index));

      for (const link of links) {
        const key = `course:${c.slug}:${link}`;
        if (state[key]?.ok) continue;
        try {
          const body = htmlToText(await get(link));
          if (body.length < 400) { state[key] = { at: new Date().toISOString(), via: "http", ok: false, err: "qua ngan" }; continue; }
          const title = link.split("/").filter(Boolean).pop() ?? "page";
          writeDoc(join(OUT, "courses", c.slug, `${slug(title)}.md`),
            { source: c.name, category: c.category, url: link, title, fetched: new Date().toISOString(), via: "http" },
            body);
          state[key] = { at: new Date().toISOString(), via: "http", ok: true };
          process.stdout.write(".");
        } catch (e: any) {
          state[key] = { at: new Date().toISOString(), via: "http", ok: false, err: e.message };
          process.stdout.write("x");
          if (e.message.startsWith("BLOCKED")) { console.log(`\n  ! bi chan, dung khoa nay`); break; }
        }
        await sleep(DELAY_MS);
      }
      saveState();
    } catch (e: any) {
      console.log(`  ! ${e.message}`);
      state[`course:${c.slug}`] = { at: new Date().toISOString(), via: "http", ok: false, err: e.message };
      saveState();
    }
  }
}

/** VTT -> text, bo timestamp va dong trung lap lien tiep. */
function vttToText(vtt: string): string {
  const out: string[] = [];
  for (let line of vtt.split("\n")) {
    line = line.trim();
    if (!line || line === "WEBVTT" || line.includes("-->") || /^(Kind|Language|NOTE):/.test(line)) continue;
    line = line.replace(/<[^>]+>/g, "").trim();
    if (line && line !== out[out.length - 1]) out.push(line);
  }
  return out.join(" ").replace(/\s{2,}/g, " ");
}

// ---------------------------------------------------------------- main

console.log(`corpus -> ${OUT}`);
console.log(`phase=${PHASE}${DRY ? " (dry-run)" : ""}${LIMIT ? ` limit=${LIMIT}` : ""}\n`);

if (PHASE === "blogs") await doBlogs();
else if (PHASE === "youtube") await doYoutube();
else if (PHASE === "courses") await doCourses();
else if (PHASE === "podcasts")
  await doPodcasts({
    sources, state, saveState, get, parseFeed, writeDoc, htmlToText, slug, sleep,
    OUT, LIMIT, DRY, SHOWNOTES_ONLY, SKIP,
  });
else { console.error(`phase chua ho tro: ${PHASE}`); process.exit(1); }

const done = Object.values(state).filter((s) => s.ok).length;
// "pending" khong phai loi - la tap pass 1 co tinh de lai cho pass 2 whisper. Gop chung se doc nham.
const pending = Object.values(state).filter((s) => !s.ok && s.via === "pending" && s.err?.startsWith("shownotes mong")).length;
const fail = Object.values(state).filter((s) => !s.ok).length - pending;
console.log(
  `\n\nxong: ${done} ok, ${fail} loi${pending ? `, ${pending} cho whisper pass 2` : ""}. state: ${STATE_FILE}`,
);
