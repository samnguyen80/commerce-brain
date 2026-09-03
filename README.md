# Commerce Brain

Commerce Brain là hệ thống tri thức nội bộ về mô hình kinh doanh commerce: taxonomy hai trục,
thư viện nguồn, corpus bằng chứng và plugin `ecom-knowledge` giúp agent tổng quan, phân loại,
so sánh, chẩn đoán merchant, tìm cơ hội sản phẩm cho Avada và giảng dạy tương tác.

## Ecom Brain plugin

Plugin dùng chung một knowledge layer cho Claude Code và Codex. Knowledge đã chắt lọc nằm cạnh
skills; agent đọc model card cần thiết thay vì nạp thẳng 5.899 tài liệu corpus.

| Command | Công việc |
|---|---|
| `/ecom` | Router chọn workflow |
| `/ecom-overview` | Tổng quan taxonomy, dữ liệu, coverage và giới hạn |
| `/classify-commerce-model` | Xác định toạ độ fulfillment × channel của merchant |
| `/compare-commerce-models` | So sánh economics, operations, ownership và risk |
| `/diagnose-merchant` | Tìm constraint chính của merchant |
| `/opportunity-map-avada` | Xếp hạng cơ hội sản phẩm có bằng chứng cho Avada |
| `/teach-ecom` | Học qua từng scenario |

### Cài đặt

Claude Code:

```text
/plugin marketplace add https://github.com/samnguyen80/commerce-brain.git
/plugin install ecom-knowledge@commerce-brain
```

Codex:

```bash
codex plugin marketplace add samnguyen80/commerce-brain
codex plugin add ecom-knowledge@commerce-brain
```

Chạy trực tiếp từ checkout để thử trước khi cài:

```bash
claude --plugin-dir ./plugins/ecom-knowledge
codex --plugin-dir ./plugins/ecom-knowledge
```

Kiểm tra cấu trúc và parity:

```bash
bun scripts/verify-ecom-plugin.mjs all
bun scripts/check-plugin-parity.mjs
```

### Phạm vi tri thức

- 13 model card: 3 mô hình offer/fulfillment được Avada chọn và toàn bộ 10 mô hình channel.
- **Deep corpus:** DTC/B2B/Retail/B2B2C.
- **Catalog-only hoặc partial:** 9 category còn lại. Nguồn đã được tìm và kiểm tra nhưng chưa
  đủ extraction sâu để coi là doctrine trưởng thành.
- Agentic commerce thay đổi nhanh; nguồn cũ hơn 30 ngày phải được kiểm tra lại.

## Cấu trúc thư mục

```
00-commerce-avada.md               → phạm vi commerce Avada quan tâm (3 category trục 1 + 10 category trục 2)
00-phan-loai-mo-hinh-commerce.md   → khung phân loại 2 trục của toàn ngành commerce
01-youtube.md                      → danh sách kênh YouTube nguồn (đã verify handle)
02-website-newsletter-cong-dong.md → danh sách website/newsletter/cộng đồng nguồn
03-khoa-hoc-academy-sach.md        → academy chính chủ, khoá học trả phí, sách
SESSION-HANDOFF.md                 → note bàn giao giữa các phiên làm việc

_raw/                              → output gốc chưa qua biên tập của các lane thu thập vòng 1

commerce-avada-academy/            → vòng 2: nội dung phủ 13 category commerce đã chốt
  01-04-*.md                       → nội dung theo từng nhóm category
  README.md                        → tổng quan vòng 2
  _raw/                            → output gốc của các lane vòng 2

corpus/                            → dữ liệu text thu thập theo nguồn
  web/                             → transcript/bài viết theo từng site (a16z, retaildive, nfx...)
  youtube/                         → transcript video theo kênh
  courses/                         → nội dung academy/khoá học (sharetribe-academy, wholesaleinabox...)
  logs/                            → log quá trình thu thập
  state.json, state-youtube.json   → state resume của pipeline thu thập (giữ lại để resume job)

plugins/ecom-knowledge/            → plugin Claude/Codex
  knowledge/                       → foundations, concepts, 13 model card, source register
  skills/                          → workflow hướng dẫn agent
  commands/                        → slash-command shim cho Claude

shared/RESOLVER.md                 → intent → skill → knowledge cần đọc
scripts/verify-ecom-plugin.mjs     → kiểm tra manifests, routing, knowledge, hygiene, docs
```

Số liệu corpus ngày 2026-09-01: **5.899 tài liệu nội dung** — 1.312 web, 632 YouTube,
58 course và 3.897 podcast. Source catalog phủ 13 category, nhưng corpus sâu hiện tập trung vào
DTC/B2B/Retail/B2B2C; không được diễn đạt 126 nguồn catalog như 126 nguồn đã pull đầy đủ.

## Nguồn gốc & giới hạn sử dụng

Nội dung trong `corpus/` (và các thư mục thu thập khác) là **text thu thập từ nguồn công khai
của bên thứ ba** (blog, academy, khoá học, transcript video). Dữ liệu này dùng cho **nghiên cứu
nội bộ**, **không phải tài sản của Avada**, và **không được redistribute** ra ngoài dưới bất kỳ
hình thức nào.

Plugin chỉ chứa phần chắt lọc và link nguồn. Không copy corpus hoặc raw transcript vào plugin.

## Về `.gitignore`

Media/audio/video và các file binary nặng bị loại khỏi repo này (không commit) — bao gồm video
(`.mp4`, `.mkv`, `.mov`...), audio (`.mp3`, `.m4a`, `.wav`...), phụ đề thô trung gian
(`.vtt`, `.srt` — bản text đã convert nằm sẵn trong `.md`), database/archive (`.db`, `.sqlite`,
`.zip`, `.tar.gz`...), ảnh nặng (`.psd`, `.tiff`), rác macOS (`.DS_Store`...), và thư mục audio
tạm sinh ra khi chạy pipeline podcast (`corpus/audio/`, `**/audio/`). Repo chỉ chứa `.md`, `.json`
(state file nhỏ để resume), `.txt`, `.log`.
