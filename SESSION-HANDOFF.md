# Bàn giao session — chuyển sang Mac Mini làm việc

**Ngày:** 2026-08-29 · **Session ID:** `3a91c4da-3ed9-41af-9d7e-cd185aae551c`
**Từ:** MacBook Air → **Sang:** Mac Mini M4 home (`100.105.144.109`)
**Lệnh load lại trên Mini:** `cd /Users/sam/Desktop/sources/ceo-brain && claude --resume 3a91c4da-3ed9-41af-9d7e-cd185aae551c`

---

## Đã xong

### Vòng 1 — thư viện theo phạm vi ban đầu (DTC, POD, Fashion × Shopify, Amazon, Woo)
5 lane fanout: Gemini, Grok, GPT Terra, 2× Sonnet 5.

- `01-youtube.md` — 35 kênh, **đã verify handle** (25 đúng, 8 sai đã sửa, 2 còn treo)
- `02-website-newsletter-cong-dong.md` — ~70 nguồn
- `03-khoa-hoc-academy-sach.md` — academy chính chủ, khoá trả phí, sách
- `_raw/` — output gốc 5 lane + báo cáo verify

### Khung phân loại
- `00-phan-loai-mo-hinh-commerce.md` — 2 trục đầy đủ của ngành
- `00-commerce-avada.md` — phạm vi Sam chốt: 3 category trục 1 + toàn bộ 10 category trục 2

### Vòng 2 — `commerce-avada-academy/`
4 lane, **126 nguồn phủ đủ 13 category**. README + 4 file nội dung + `_raw/`.

## Đang dở — việc chính khi sang Mini

**Pull nội dung thật về máy:** text khoá học/blog + transcript video YouTube. Làm nhóm **DTC / B2B / Retail / B2B2C** trước (file `commerce-avada-academy/03-truc2-dtc-b2b-retail-b2b2c.md`, 28 nguồn).

Kế hoạch chi tiết: `plans/cozy-questing-ullman.md`

### Quyết định Sam đã chốt

| Vấn đề | Chốt |
|---|---|
| Khối lượng podcast | **Full — cả ~4.400 tập**, không giới hạn |
| Khối lượng blog | **100 bài gần nhất mỗi site** (19 site) |
| Nơi lưu | **Ổ ngoài SamDisk 1TB** tại `/Volumes/SamDisk` trên Mini (còn 908GB trống) |
| Chuyển project | Đưa cả project research này vào ổ SamDisk |
| Speech-to-text | **Cài mlx-whisper trên Mini** (nhanh trên M4, dùng Neural Engine) |
| Site chặn bot | **Dùng browser thật trên Mini** để crawl |
| Nội dung sau paywall | Bỏ qua, ghi vào danh sách thiếu — không vượt rào |

### Khối lượng thật (agent đã đếm)

- **~4.400 tập podcast** qua 8 RSS feed đã xác nhận. Riêng Omni Talk 2.001 tập, RETHINK Retail 500, DTC Podcast 773, Boutique Chat 541, Retail Remix 306, Marketplace Risk 119, The Backroom 112, B2B Commerce UnCut 51
- **19 site blog**, 5 site có RSS thật: RepSpark `/blog/rss.xml`, Omni Talk `/feed/`, The Boutique Hub `/feed/`, Retail Dive `/feeds/news/`, Wholesale In a Box `/blog?format=rss`
- **2 kênh YouTube**: RETHINK Retail (`@rethinkretail`), NRF (`@NRFvideo`)
- **3 khoá học**: Shopify Academy B2B (free, cần tài khoản), Sharetribe Academy (free, không cần login), Wholesale In a Box (mini-course free)

⚠️ **RETHINK Retail có cả podcast 500 tập lẫn YouTube ~500 video, gần như trùng nội dung** — chỉ lấy một nguồn.

❌ **Không crawl được:** Faire Blog (2 URL, Cloudflare bot-challenge cứng), Chain Store Age (403 Cloudflare). Ghi vào REPORT, không lách.

✅ **Sửa so với tài liệu gốc:** Above the Crowd (Bill Gurley) trước ghi "chưa fetch được" — thực tế curl trả 200, crawl bình thường được.

## Môi trường Mac Mini — cần chuẩn bị

| Công cụ | Trạng thái |
|---|---|
| yt-dlp | ✅ có, nhưng qua `uv tool` ở `~/.local/bin` — **không nằm trong PATH mặc định khi SSH**, phải `export PATH=/opt/homebrew/bin:$HOME/.local/bin:$PATH` |
| ffmpeg | ✅ 8.1.1 |
| uv | ✅ 0.11.18 |
| node | ✅ v25.5.0 |
| **bun** | ❌ **chưa cài** — script viết bằng Bun nên phải cài |
| **mlx-whisper** | ❌ **chưa cài** — Sam đã chốt dùng cái này |
| Đĩa hệ thống | ⚠️ chỉ 21GB trống → **mọi thứ nặng phải để trên SamDisk** |
| SamDisk | ✅ `/Volumes/SamDisk`, 908GB trống |

**Repo trên Mini:** `/Users/sam/Desktop/sources/ceo-brain` (path cũ `~/sources` không còn). Branch `main`, HEAD `d05a2390`. ⚠️ **Cây làm việc bẩn** — ~10 file modified. Dọn trước khi làm.

## Việc tiếp theo trên Mini

1. Cài `bun` và `mlx-whisper`
2. Tạo `/Volumes/SamDisk/ecommerce-research-academy/` — nơi đặt project + corpus
3. Viết `/Volumes/SamDisk/ecommerce-research-academy/scripts/corpus/` (Bun): crawl blog/RSS, lấy transcript YouTube, fallback yt-dlp + mlx-whisper
4. Chạy thử `--limit 3` (1 blog, 1 video có caption, 1 video không caption) trước khi chạy full
5. Chạy full ở background, theo dõi `state.json`

**Nguyên tắc script:** idempotent (chạy lại không làm lại), ưu tiên transcript có sẵn trước khi tải audio, xoá audio sau khi transcribe, tôn trọng robots.txt và rate limit, `REPORT.md` ghi rõ nguồn nào không lấy được và vì sao.

## Việc còn treo, nhỏ

- 2 kênh YouTube chưa xác minh handle: **Structured Agency**, **Cassie On Demand** (ứng viên gần nhất `@CassiyJohnson` — khác chính tả, chưa đủ chắc)
- Thư mục `ecommerce-research-academy/` chưa có `README.md` index cho tầng ngoài
- ⚠️ **`private/ag_servers.json` bị lỗi cú pháp JSON ở dòng 3282** — `jq` không parse được. Phát hiện tình cờ khi tra IP Mini, chưa sửa vì không thuộc phạm vi việc này.
