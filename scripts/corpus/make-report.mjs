#!/usr/bin/env node
/**
 * Sinh corpus/REPORT.md TU SO DO, khong go tay.
 *
 * Ly do: gate G5 doi chieu con so trong REPORT voi so dem lai tu dia. Go tay thi
 * moi lan lane chay them la REPORT sai ngay, va nguoi doc khong biet no da cu.
 *
 * Chay sau khi MOI lane da dung, neu khong TONG_FILE se cu ngay khi vua ghi.
 */
import { readFileSync, readdirSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = "/Volumes/SamDisk/ecommerce-research-academy";
const CORPUS = join(ROOT, "corpus");
const sources = JSON.parse(readFileSync(join(import.meta.dirname, "sources.json"), "utf8"));

// Tu chan neu con lane chay: bao cao sinh ra se cu ngay lap tuc. `--force` de xem ban nhap.
if (!process.argv.includes("--force")) {
  const ps = execFileSync("ps", ["-eo", "command"], { encoding: "utf8" });
  const live = ["blogs", "youtube", "podcasts"].filter((p) =>
    ps.split("\n").some((l) => l.includes("fetch.ts") && l.includes(`--phase ${p}`) && !l.includes("caffeinate")));
  if (live.length) {
    console.error(`DUNG: lane con chay (${live.join(", ")}) - so trong REPORT se cu ngay khi vua ghi.`);
    console.error("Chay lai sau khi lane dung, hoac them --force de sinh ban nhap.");
    process.exit(1);
  }
}

const countMd = (d) => !existsSync(d) ? 0 : readdirSync(d, { withFileTypes: true })
  .reduce((n, e) => n + (e.isDirectory() ? countMd(join(d, e.name)) : e.name.endsWith(".md") ? 1 : 0), 0);

const state = (n) => existsSync(join(CORPUS, `state-${n}.json`))
  ? JSON.parse(readFileSync(join(CORPUS, `state-${n}.json`), "utf8")) : {};

/** Gom ly do loi tu state, nhieu nhat truoc. */
function errs(st, filter = () => true) {
  const m = {};
  for (const [k, v] of Object.entries(st)) {
    if (v.ok || !filter(k, v)) continue;
    const e = (v.err ?? "?").slice(0, 70);
    m[e] = (m[e] ?? 0) + 1;
  }
  return Object.entries(m).sort((a, b) => b[1] - a[1]);
}

const web = countMd(join(CORPUS, "web"));
const yt = countMd(join(CORPUS, "youtube"));
const courses = countMd(join(CORPUS, "courses"));
const pod = countMd(join(CORPUS, "podcast"));
const total = countMd(CORPUS);

const stB = state("blogs"), stY = state("youtube"), stP = state("podcasts");
const podOk = Object.values(stP).filter((v) => v.ok).length;
const podWhisper = Object.values(stP).filter((v) => v.ok && v.via === "whisper").length;
const podNotes = Object.values(stP).filter((v) => v.ok && v.via === "shownotes").length;
const podPendingAll = Object.values(stP).filter((v) => !v.ok && v.via === "pending").length;
const podPendingOmni = Object.entries(stP).filter(([k, v]) => !v.ok && v.via === "pending" && k.startsWith("podcast:omnitalk-pod:")).length;

const siteRows = sources.blogs
  .map((b) => ({ ...b, n: countMd(join(CORPUS, "web", b.slug)) }))
  .sort((a, b) => b.n - a.n);
const weak = siteRows.filter((s) => s.n < 30);

const L = [];
L.push("# REPORT — corpus ecommerce-research-academy");
L.push("");
L.push(`Sinh tự động bởi \`scripts/corpus/make-report.mjs\` lúc ${new Date().toISOString()}.`);
L.push("Mọi con số dưới đây đếm trực tiếp từ file trên đĩa, không lấy từ log.");
L.push("");
L.push(`TONG_FILE: ${total}`);
L.push("");
L.push("## Tổng quan");
L.push("");
L.push("| Nhóm | File |");
L.push("|---|---|");
L.push(`| Blog / web | ${web} |`);
L.push(`| Podcast | ${pod} |`);
L.push(`| YouTube | ${yt} |`);
L.push(`| Khoá học | ${courses} |`);
L.push(`| **Tổng** | **${total}** |`);
L.push("");
L.push("## Blog — số bài mỗi nguồn");
L.push("");
L.push("| Nguồn | Bài | Ghi chú |");
L.push("|---|---|---|");
for (const s of siteRows) L.push(`| ${s.name} | ${s.n} | ${s.n < 30 ? "⚠️ dưới mức mong đợi" : ""} |`);
L.push("");
if (weak.length) {
  L.push("### Nguồn lấy được ít — nguyên nhân");
  L.push("");
  for (const s of weak) L.push(`- **${s.name}** (\`${s.slug}\`): ${s.n} bài. Trang nguồn chỉ liệt kê ít liên kết bài viết, hoặc URL cấu hình trỏ vào một trang lẻ nên bộ lọc theo tiền tố đường dẫn bắt hụt.`);
  L.push("");
}
L.push("## Nguồn KHÔNG lấy được");
L.push("");
L.push("| Nguồn | Lý do |");
L.push("|---|---|");
for (const b of sources.blocked ?? []) L.push(`| ${b.name} (\`${b.slug}\`) | ${b.reason} |`);
L.push("");
L.push("Không tìm cách vượt rào các nguồn này (không giả cookie, không đổi IP, không dùng phiên đăng nhập của người khác).");
L.push("");
L.push("## Lỗi theo từng lane");
L.push("");
for (const [name, st] of [["Blog", stB], ["YouTube", stY]]) {
  const e = errs(st);
  L.push(`**${name}** — ${Object.values(st).filter((v) => !v.ok).length} mục lỗi:`);
  L.push("");
  for (const [msg, n] of e) L.push(`- ${n}× \`${msg}\``);
  L.push("");
}
L.push("## Podcast");
L.push("");
L.push("| Chỉ số | Số |");
L.push("|---|---|");
L.push(`| Tập có bản ghi | ${podOk} |`);
L.push(`| — qua show-notes | ${podNotes} |`);
L.push(`| — qua whisper | ${podWhisper} |`);
L.push(`| Còn chờ whisper (gồm omnitalk đã chốt bỏ) | ${podPendingAll} |`);
L.push(`| — riêng omnitalk (cố ý bỏ) | ${podPendingOmni} |`);
L.push(`| — thực sự còn tồn đọng | ${podPendingAll - podPendingOmni} |`);
L.push("");
L.push("Sam chốt 2026-08-29: bỏ feed `omnitalk-pod` khỏi pass 2 vì 1.918 tập tin-nhanh 15 phút chiếm 35% chi phí xử lý mà giá trị mỗi tập thấp nhất trong 7 feed.");
L.push("");
L.push("## Giới hạn đã biết");
L.push("");
L.push("- Trong `podcast/` không có khoá định danh đáng tin để chống trùng: nhiều feed dùng chung một `<link>` cho các tập khác nhau, và show-notes mỏng là đoạn mẫu lặp lại nên thân bài cũng trùng. Chống trùng ở đó dựa vào tên file sinh từ tiêu đề.");
L.push("- Nhánh RSS-phân-trang trong `discover.ts` (WordPress `?paged=`, Squarespace `offset=`) chưa từng được kích hoạt trên nguồn thật vì sitemap luôn đủ số trước. Code có, chưa có bằng chứng chạy.");
L.push("- Nội dung sau tường phí không lấy, theo đúng nguyên tắc đã đặt từ đầu.");
L.push("");

writeFileSync(join(CORPUS, "REPORT.md"), L.join("\n"), "utf8");
console.log(`da ghi corpus/REPORT.md — TONG_FILE=${total}, ${siteRows.length} nguon blog, ${(sources.blocked ?? []).length} nguon bi chan`);
