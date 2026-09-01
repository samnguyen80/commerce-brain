# REPORT — corpus ecommerce-research-academy

Sinh tự động bởi `scripts/corpus/make-report.mjs` lúc 2026-09-01T14:57:03.264Z.
Mọi con số dưới đây đếm trực tiếp từ file trên đĩa, không lấy từ log.

TONG_FILE: 5899

## Tổng quan

| Nhóm | File |
|---|---|
| Blog / web | 1312 |
| Podcast | 3897 |
| YouTube | 632 |
| Khoá học | 58 |
| **Tổng** | **5899** |

## Blog — số bài mỗi nguồn

| Nguồn | Bài | Ghi chú |
|---|---|---|
| Marketplace Pulse | 101 |  |
| DTC Live | 101 |  |
| B2B Wave Wholesale Glossary | 101 |  |
| Above the Crowd (Bill Gurley) | 101 |  |
| Wholesale In a Box | 100 |  |
| The Traide Blog | 100 |  |
| NFX Network Effects Manual | 100 |  |
| ENDVR B2B Platforms | 99 |  |
| CommerceNext | 99 |  |
| The Boutique Hub | 97 |  |
| Retail Dive | 91 |  |
| Omni Talk | 86 |  |
| RepSpark Blog | 77 |  |
| Brandboom Resources | 36 |  |
| a16z Marketplace 100 | 16 | ⚠️ dưới mức mong đợi |
| Version One Ventures Resources | 5 | ⚠️ dưới mức mong đợi |
| RetailWire BrainTrust | 2 | ⚠️ dưới mức mong đợi |

### Nguồn lấy được ít — nguyên nhân

- **a16z Marketplace 100** (`a16z-marketplace100`): 16 bài. Trang nguồn chỉ liệt kê ít liên kết bài viết, hoặc URL cấu hình trỏ vào một trang lẻ nên bộ lọc theo tiền tố đường dẫn bắt hụt.
- **Version One Ventures Resources** (`versionone`): 5 bài. Trang nguồn chỉ liệt kê ít liên kết bài viết, hoặc URL cấu hình trỏ vào một trang lẻ nên bộ lọc theo tiền tố đường dẫn bắt hụt.
- **RetailWire BrainTrust** (`retailwire`): 2 bài. Trang nguồn chỉ liệt kê ít liên kết bài viết, hoặc URL cấu hình trỏ vào một trang lẻ nên bộ lọc theo tiền tố đường dẫn bắt hụt.

## Nguồn KHÔNG lấy được

| Nguồn | Lý do |
|---|---|
| Faire Blog (`faire-blog`) | Cloudflare bot-challenge (cf-mitigated: challenge) |
| Faire Blog - Selling (`faire-selling`) | Cloudflare bot-challenge, cung domain |
| Chain Store Age (`chainstoreage`) | 403 Cloudflare |
| Retail TouchPoints (`retailtouchpoints`) | 403 Cloudflare tren ca robots.txt lan trang chu, ke ca voi User-Agent trinh duyet (do lai truc tiep 2026-08-29) |

Không tìm cách vượt rào các nguồn này (không giả cookie, không đổi IP, không dùng phiên đăng nhập của người khác).

## Lỗi theo từng lane

**Blog** — 9 mục lỗi:

- 6× `HTTP 404`
- 3× `noi dung qua ngan`

**YouTube** — 42 mục lỗi:

- 34× `khong co caption`
- 8× `Failed with exit code 1`

## Podcast

| Chỉ số | Số |
|---|---|
| Tập có bản ghi | 1978 |
| — qua show-notes | 330 |
| — qua whisper | 1648 |
| Còn chờ whisper (gồm omnitalk đã chốt bỏ) | 1918 |
| — riêng omnitalk (cố ý bỏ) | 1918 |
| — thực sự còn tồn đọng | 0 |

Sam chốt 2026-08-29: bỏ feed `omnitalk-pod` khỏi pass 2 vì 1.918 tập tin-nhanh 15 phút chiếm 35% chi phí xử lý mà giá trị mỗi tập thấp nhất trong 7 feed.

## Giới hạn đã biết

- Trong `podcast/` không có khoá định danh đáng tin để chống trùng: nhiều feed dùng chung một `<link>` cho các tập khác nhau, và show-notes mỏng là đoạn mẫu lặp lại nên thân bài cũng trùng. Chống trùng ở đó dựa vào tên file sinh từ tiêu đề.
- Nhánh RSS-phân-trang trong `discover.ts` (WordPress `?paged=`, Squarespace `offset=`) chưa từng được kích hoạt trên nguồn thật vì sitemap luôn đủ số trước. Code có, chưa có bằng chứng chạy.
- Nội dung sau tường phí không lấy, theo đúng nguyên tắc đã đặt từ đầu.
