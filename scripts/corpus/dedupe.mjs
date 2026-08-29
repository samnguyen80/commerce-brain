#!/usr/bin/env node
/**
 * Go tai lieu trung trong corpus.
 *
 * ⚠️ KHOA THEO NOI DUNG, KHONG THEO URL. Do that 2026-08-29: khoa theo URL se xoa
 * nham 59 file noi dung THAT. Ly do: feed podcast dung chung 1 <link> cho nhieu tap
 * (omnitalk `/episode/walmart` tro toi 3 tap khac nhau, b2buncut dung 1 link cho ca 51
 * tap). Voi podcast, URL KHONG phai khoa dinh danh - tieu de moi la.
 *
 * Nen chi coi la trung khi:
 *  1. Than bai (bo frontmatter) bam SHA-256 giong het, HOAC
 *  2. Trung URL nhung CHI trong web/ va courses/ - o day 1 URL = 1 trang that
 *
 * Nguon trung that su (do duoc):
 *  - wholesaleinabox khai CA trong `courses` lan `blogs` cua sources.json -> 2 phase cung tai
 *  - trang index luu 2 ten (academy.md + index.md)
 *
 * Quy tac giu ban nao: uu tien thu muc web > courses > podcast > youtube, roi file lon
 * hon (nhieu noi dung hon), roi ten ngan hon.
 *
 * Mac dinh CHI IN. Phai truyen --apply moi thuc su xoa.
 */
import { readFileSync, readdirSync, statSync, unlinkSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const CORPUS = "/Volumes/SamDisk/ecommerce-research-academy/corpus";
const APPLY = process.argv.includes("--apply");
const RANK = { web: 0, courses: 1, podcast: 2, youtube: 3 };
const topDir = (f) => f.replace(CORPUS + "/", "").split("/")[0];

function list(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) list(join(dir, e.name), out);
    else if (e.name.endsWith(".md")) out.push(join(dir, e.name));
  }
  return out;
}

const byBody = new Map();
const byUrl = new Map();
for (const f of list(CORPUS)) {
  // CHI dedupe web/ va courses/. Trong podcast/ khong co khoa dinh danh nao dang tin:
  // URL bi dung chung giua cac tap, VA than bai cung trung vi show-notes mong la doan
  // mau giong nhau moi tap (do that: 2 tap "Retail Daily Minute" khac han nhau nhung
  // body byte-identical). Ten file da sinh tu tieu de nen tu no da chong trung roi.
  if (!["web", "courses"].includes(topDir(f))) continue;
  const t = readFileSync(f, "utf8");
  const body = t.split(/^---$/m).slice(2).join("---").trim();
  if (body.length >= 100) {
    const h = createHash("sha256").update(body).digest("hex");
    (byBody.get(h) ?? byBody.set(h, []).get(h)).push(f);
  }
  const u = t.slice(0, 800).match(/^url:\s*"([^"]+)"/m)?.[1];
  if (u) (byUrl.get(u) ?? byUrl.set(u, []).get(u)).push(f);
}

/** Gop nhom: 1 file co the vua trung noi dung vua trung URL, khong duoc dem 2 lan. */
const groups = [];
const seen = new Set();
for (const [key, files] of [...byBody.entries()].map(([k, v]) => [`body:${k}`, v])
  .concat([...byUrl.entries()].map(([k, v]) => [`url:${k}`, v]))) {
  if (files.length < 2) continue;
  const sig = [...files].sort().join("|");
  if (seen.has(sig)) continue;
  seen.add(sig);
  groups.push({ key, files });
}

if (!groups.length) { console.log("khong co ban trung"); process.exit(0); }

// Mot file co the khop CA nhom-noi-dung lan nhom-URL. Phai theo doi rieng, neu khong
// dry-run se dem no 2 lan va bao so xoa cao hon thuc te (do: bao 30, that ra 28).
const gone = new Set();
let removed = 0, freed = 0;
for (const { key, files } of groups) {
  const alive = files.filter((f) => !gone.has(f) && existsSync(f));
  if (alive.length < 2) continue;
  const sorted = alive
    .map((f) => ({ f, size: statSync(f).size, rank: RANK[topDir(f)] ?? 9 }))
    .sort((a, b) => a.rank - b.rank || b.size - a.size || a.f.length - b.f.length);
  const [keep, ...drop] = sorted;
  console.log(`\n[${key.split(":")[0]}] GIU ${keep.f.replace(CORPUS + "/", "")}`);
  for (const d of drop) {
    console.log(`   XOA ${d.f.replace(CORPUS + "/", "")} (${d.size}b)`);
    if (APPLY) unlinkSync(d.f);
    gone.add(d.f);
    removed++; freed += d.size;
  }
}

console.log(`\n${groups.length} nhom, ${removed} file ${APPLY ? "da xoa" : "SE xoa"}, ${(freed / 1024).toFixed(0)} KB`);
if (!APPLY) console.log("(chay lai voi --apply de thuc su xoa)");
