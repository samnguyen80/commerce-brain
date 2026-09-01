#!/usr/bin/env node
/**
 * Oracle cho GATES.md. Moi lenh con DO truc tiep tu artifact tren dia, khong doc
 * lai bao cao cua agent va khong tin so lieu duoc truyen vao.
 *
 * Nguyen tac: chi in token thanh cong o CUOI, sau khi moi assertion da qua.
 * Bat ky assertion nao hong -> in ly do roi exit 1.
 */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";

const ROOT = "/Volumes/SamDisk/ecommerce-research-academy";
const CORPUS = join(ROOT, "corpus");
const SOURCES = join(import.meta.dirname, "sources.json");

const fail = (msg) => { console.error(`FAIL: ${msg}`); process.exit(1); };

/** Dem file .md that su ton tai duoi 1 thu muc (de quy). Khong dua vao state file. */
function countMd(dir) {
  if (!existsSync(dir)) return 0;
  let n = 0;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) n += countMd(join(dir, e.name));
    else if (e.name.endsWith(".md")) n++;
  }
  return n;
}

function listMd(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) listMd(join(dir, e.name), out);
    else if (e.name.endsWith(".md")) out.push(join(dir, e.name));
  }
  return out;
}

/** Tien trinh fetch.ts cua 1 phase con chay khong. Dung ps thay vi tin log. */
function phaseRunning(phase) {
  try {
    const ps = execFileSync("ps", ["-eo", "command"], { encoding: "utf8" });
    return ps.split("\n").some((l) => l.includes("fetch.ts") && l.includes(`--phase ${phase}`) && !l.includes("caffeinate"));
  } catch { return false; }
}

const readState = (name) => {
  const p = join(CORPUS, `state-${name}.json`);
  if (!existsSync(p)) fail(`thieu state file: ${p}`);
  return JSON.parse(readFileSync(p, "utf8"));
};

const sources = JSON.parse(readFileSync(SOURCES, "utf8"));

const cmd = process.argv[2];

// ---------------------------------------------------------------- blogs
if (cmd === "blogs") {
  if (phaseRunning("blogs")) fail("phase blogs VAN DANG CHAY - chua the ket luan");
  const total = countMd(join(CORPUS, "web"));
  if (total < 1000) fail(`web moi co ${total} file .md, duoi nguong 1000`);

  const st = readState("blogs");
  // Site nao ra 0 file thi phai co ly do BLOCKED trong state, khong duoc im lang.
  const bad = [];
  for (const b of sources.blogs) {
    const n = countMd(join(CORPUS, "web", b.slug));
    if (n > 0) continue;
    const blocked = Object.entries(st).some(([k, v]) =>
      k.startsWith(`blog:${b.slug}`) && !v.ok && /BLOCKED|403|429/.test(v.err ?? ""));
    if (!blocked) bad.push(b.slug);
  }
  if (bad.length) fail(`site ra 0 file ma khong co ly do bi chan: ${bad.join(", ")}`);
  console.log(`web=${total} file, moi site deu co file hoac co ly do bi chan`);
  console.log("blogs verification passed");
  process.exit(0);
}

// ---------------------------------------------------------------- youtube
if (cmd === "youtube") {
  if (phaseRunning("youtube")) fail("phase youtube VAN DANG CHAY");
  const total = countMd(join(CORPUS, "youtube"));
  if (total < 600) fail(`youtube moi co ${total} file, duoi nguong 600`);
  console.log(`youtube=${total} file`);
  console.log("youtube verification passed");
  process.exit(0);
}

// ---------------------------------------------------------------- podcast pass 2
if (cmd === "podcast") {
  if (phaseRunning("podcasts")) fail("phase podcasts VAN DANG CHAY");
  const st = readState("podcasts");
  // omnitalk-pod da duoc Sam chot bo qua -> khong tinh vao pending.
  const pending = Object.entries(st).filter(([k, v]) =>
    !v.ok && v.via === "pending" && !k.startsWith("podcast:omnitalk-pod:")).length;
  if (pending > 0) fail(`con ${pending} tap chua transcribe (ngoai omnitalk da chot bo)`);
  const total = countMd(join(CORPUS, "podcast"));
  console.log(`podcast=${total} file, 0 tap ton dong ngoai omnitalk`);
  console.log("podcast verification passed");
  process.exit(0);
}

// ---------------------------------------------------------------- trung lap
if (cmd === "dupes") {
  // CHI xet web/ va courses/. Trong podcast/ khong co khoa dinh danh dang tin - do that
  // 2026-08-29: URL bi dung chung giua cac tap (omnitalk `/episode/walmart` tro toi 3 tap
  // khac nhau), VA than bai cung trung vi show-notes mong la doan mau giong nhau moi tap.
  // Bat trung o do se xoa nham noi dung that. Ten file da sinh tu tieu de -> da chong trung.
  const byUrl = new Map(), byBody = new Map();
  for (const dir of ["web", "courses"]) {
    for (const f of listMd(join(CORPUS, dir))) {
      const t = readFileSync(f, "utf8");
      const url = t.slice(0, 800).match(/^url:\s*"([^"]+)"/m)?.[1];
      if (url) (byUrl.get(url) ?? byUrl.set(url, []).get(url)).push(f);
      const body = t.split(/^---$/m).slice(2).join("---").trim();
      if (body.length >= 100) {
        const h = createHash("sha256").update(body).digest("hex");
        (byBody.get(h) ?? byBody.set(h, []).get(h)).push(f);
      }
    }
  }
  const urlDup = [...byUrl.entries()].filter(([, fs]) => fs.length > 1);
  const bodyDup = [...byBody.values()].filter((fs) => fs.length > 1);
  if (urlDup.length) {
    for (const [u, fs] of urlDup.slice(0, 5)) console.error(`  URL ${fs.length}x ${u}`);
    fail(`${urlDup.length} URL trong web/courses sinh ra nhieu hon 1 tai lieu`);
  }
  if (bodyDup.length) {
    for (const fs of bodyDup.slice(0, 5)) console.error(`  BODY ${fs.length}x ${fs[0]}`);
    fail(`${bodyDup.length} nhom tai lieu trung noi dung trong web/courses`);
  }
  console.log(`web+courses: ${byUrl.size} URL duy nhat, ${byBody.size} than bai duy nhat, khong trung`);
  console.log("dupes verification passed");
  process.exit(0);
}

// ---------------------------------------------------------------- REPORT.md
if (cmd === "report") {
  // REPORT chi co nghia khi moi lane da dung. Con lane chay thi TONG_FILE cu ngay sau khi ghi
  // (do that: sinh ra 5899, vai giay sau dem lai da 5900) va gate se chap chon vo nghia.
  for (const ph of ["blogs", "youtube", "podcasts"]) {
    if (phaseRunning(ph)) fail(`phase ${ph} VAN DANG CHAY - REPORT se cu ngay khi vua ghi`);
  }
  const p = join(CORPUS, "REPORT.md");
  if (!existsSync(p)) fail("chua co corpus/REPORT.md");
  const txt = readFileSync(p, "utf8");

  // Moi nguon KHONG lay duoc (0 file) hoac lay duoi 30 file deu phai duoc goi ten trong REPORT.
  const missing = [];
  for (const b of sources.blogs) {
    const n = countMd(join(CORPUS, "web", b.slug));
    if (n < 30 && !txt.includes(b.slug)) missing.push(`${b.slug}(${n})`);
  }
  for (const x of sources.blocked ?? []) if (!txt.includes(x.slug)) missing.push(`blocked:${x.slug}`);
  if (missing.length) fail(`REPORT.md khong nhac toi nguon thieu: ${missing.join(", ")}`);

  // So tong trong REPORT phai khop so dem that, khong duoc ghi so cu.
  const claimed = txt.match(/TONG_FILE:\s*(\d+)/)?.[1];
  if (!claimed) fail("REPORT.md thieu dong 'TONG_FILE: <so>' de doi chieu");
  // Tru chinh REPORT.md - no la bao cao, khong phai noi dung corpus. Phai khop cach dem
  // trong make-report.mjs, neu khong gate se lech dung 1 file mai mai.
  const real = countMd(CORPUS) - 1;
  if (Number(claimed) !== real) fail(`REPORT.md ghi TONG_FILE=${claimed} nhung dem that la ${real}`);

  console.log(`REPORT.md goi ten du nguon thieu, TONG_FILE=${real} khop thuc te`);
  console.log("report verification passed");
  process.exit(0);
}

// ---------------------------------------------------------------- dong bo GitHub
if (cmd === "sync") {
  const git = (...a) => execFileSync("git", ["-C", ROOT, ...a], { encoding: "utf8" }).trim();
  const dirty = git("status", "--porcelain");
  if (dirty) fail(`con ${dirty.split("\n").length} file chua commit trong repo commerce-brain`);
  const unpushed = git("log", "--oneline", "origin/main..HEAD");
  if (unpushed) fail(`con ${unpushed.split("\n").length} commit chua push`);

  const tracked = git("ls-files").split("\n").filter(Boolean);
  const media = tracked.filter((f) => /\.(mp4|mkv|mov|avi|webm|m4v|mp3|m4a|wav|flac|opus|aac|ogg|vtt|srt|db|sqlite3?|zip|tar|tgz)$/i.test(f));
  if (media.length) fail(`co ${media.length} file media bi commit: ${media.slice(0, 5).join(", ")}`);

  const trackedMd = tracked.filter((f) => f.endsWith(".md")).length;
  const allMd = countMd(ROOT);
  if (trackedMd < allMd) fail(`co ${allMd} file .md tren dia nhung chi ${trackedMd} duoc track`);

  console.log(`tracked=${tracked.length} file, .md track du ${trackedMd}/${allMd}, 0 media, 0 commit ton dong`);
  console.log("sync verification passed");
  process.exit(0);
}

// ---------------------------------------------------------------- README index
if (cmd === "readme") {
  const p = join(ROOT, "README.md");
  if (!existsSync(p)) fail("chua co README.md o goc ecommerce-research-academy");
  const txt = readFileSync(p, "utf8");
  const need = ["00-commerce-avada.md", "01-youtube.md", "02-website-newsletter-cong-dong.md",
    "03-khoa-hoc-academy-sach.md", "commerce-avada-academy", "corpus"];
  const miss = need.filter((n) => !txt.includes(n));
  if (miss.length) fail(`README.md thieu tro toi: ${miss.join(", ")}`);
  if (txt.length < 500) fail(`README.md qua ngan (${txt.length} ky tu)`);
  console.log(`README.md tro toi du ${need.length} muc`);
  console.log("readme verification passed");
  process.exit(0);
}

fail(`lenh khong hop le: ${cmd}. Dung: blogs|youtube|podcast|dupes|report|sync|readme`);
