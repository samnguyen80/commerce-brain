# Commerce Brain

Corpus nghiên cứu về các mô hình kinh doanh commerce (DTC, marketplace, B2B/wholesale,
subscription, recommerce, agentic commerce...), thu thập tự động từ nhiều nguồn công khai
(website, academy/khoá học, kênh YouTube) để phục vụ nghiên cứu thị trường nội bộ.

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
```

Số liệu hiện tại (đếm bằng `find`, 2026-08-29): 197 file `.md`, tổng dung lượng repo ~3-5MB.

## Nguồn gốc & giới hạn sử dụng

Nội dung trong `corpus/` (và các thư mục thu thập khác) là **text thu thập từ nguồn công khai
của bên thứ ba** (blog, academy, khoá học, transcript video). Dữ liệu này dùng cho **nghiên cứu
nội bộ**, **không phải tài sản của Avada**, và **không được redistribute** ra ngoài dưới bất kỳ
hình thức nào.

## Về `.gitignore`

Media/audio/video và các file binary nặng bị loại khỏi repo này (không commit) — bao gồm video
(`.mp4`, `.mkv`, `.mov`...), audio (`.mp3`, `.m4a`, `.wav`...), phụ đề thô trung gian
(`.vtt`, `.srt` — bản text đã convert nằm sẵn trong `.md`), database/archive (`.db`, `.sqlite`,
`.zip`, `.tar.gz`...), ảnh nặng (`.psd`, `.tiff`), rác macOS (`.DS_Store`...), và thư mục audio
tạm sinh ra khi chạy pipeline podcast (`corpus/audio/`, `**/audio/`). Repo chỉ chứa `.md`, `.json`
(state file nhỏ để resume), `.txt`, `.log`.
