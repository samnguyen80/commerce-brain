# Gates: corpus pull — ecommerce-research-academy

OWNS: scripts/corpus/**

Scope: kéo trọn nội dung text (blog, YouTube, khoá học, podcast) cho nhóm DTC/B2B/Retail/B2B2C về `/Volumes/SamDisk/ecommerce-research-academy/corpus`, ghi nhận trung thực nguồn không lấy được, và đồng bộ toàn bộ phần text lên repo riêng `samnguyen80/commerce-brain`.

Mọi `CHECK` đều gọi `verify-gates.mjs`, script này ĐO TRỰC TIẾP file trên đĩa và tiến trình đang chạy — không đọc lại log hay báo cáo của agent.

**Chạy bằng `bun`, không phải `node`** (đổi 2026-09-01). Lý do: brew nâng `simdjson` 4.2.4 → 4.6.9, dylib đổi từ `libsimdjson.29` sang `.33`, còn `node 25.5.0` link cứng vào `.29` nên `node` trên máy này chết hẳn. Bun là runtime chuẩn của repo nên đổi sang bun vừa sửa được vừa đúng quy ước.

- [x] G1: lane blog chạy xong, mọi site đều có bài hoặc có lý do bị chặn ghi trong state
  CHECK: bun verify-gates.mjs blogs
  EXPECT: blogs verification passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=/Volumes/SamDisk/ecommerce-research-academy/scripts/corpus; path=44f473e9a604/18 entries; EXPECT=matched; output-sha256=3b76ee971cbfe67114f61efbc6d4f2cb013ce379aba6d82346efe3db66b961a0; output-bytes=84

- [x] G2: lane YouTube chạy xong, transcript đã về đĩa
  CHECK: bun verify-gates.mjs youtube
  EXPECT: youtube verification passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=/Volumes/SamDisk/ecommerce-research-academy/scripts/corpus; path=44f473e9a604/18 entries; EXPECT=matched; output-sha256=f2d8fcf37024bf82ee4bd8a676b1cb8bfebbe5d4106fb8ecd4ca6523ffa45ea8; output-bytes=45

- [x] G3: podcast pass 2 xong — 0 tập tồn đọng ngoài omnitalk (feed Sam đã chốt bỏ)
  CHECK: bun verify-gates.mjs podcast
  EXPECT: podcast verification passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=/Volumes/SamDisk/ecommerce-research-academy/scripts/corpus; path=44f473e9a604/18 entries; EXPECT=matched; output-sha256=9105e16c200153a5d81f846f2540218a2d19c46d1c754bf52102313f3c8acd63; output-bytes=77

- [x] G4: không còn tài liệu trùng trong `web/` và `courses/` (theo cả URL lẫn hash thân bài); `podcast/` được loại trừ có chủ đích vì ở đó không có khoá định danh đáng tin
  CHECK: bun verify-gates.mjs dupes
  EXPECT: dupes verification passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=/Volumes/SamDisk/ecommerce-research-academy/scripts/corpus; path=44f473e9a604/18 entries; EXPECT=matched; output-sha256=b0518fd996aefaaac4e7d82278b5f8500750bcde9a8e418a99525676dda3294f; output-bytes=94

- [x] G5: REPORT.md gọi tên mọi nguồn lấy thiếu/bị chặn, và số tổng khớp số đếm thật
  CHECK: bun verify-gates.mjs report
  EXPECT: report verification passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=/Volumes/SamDisk/ecommerce-research-academy/scripts/corpus; path=44f473e9a604/18 entries; EXPECT=matched; output-sha256=b5343627db555b0761bcfe09f92d36c4756bdb13c4805541df8655bcdca6f59a; output-bytes=89

- [x] G6: commerce-brain đồng bộ đủ — 0 file chưa commit, 0 commit chưa push, 0 media lọt
  CHECK: bun verify-gates.mjs sync
  EXPECT: sync verification passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=/Volumes/SamDisk/ecommerce-research-academy/scripts/corpus; path=44f473e9a604/18 entries; EXPECT=matched; output-sha256=0112f51b629da0d9f20456b3bca4038cf88b59739659ca604abe3d33486d2613; output-bytes=95

- [x] G7: README.md ở gốc thư mục nghiên cứu trỏ tới đủ các mục con
  CHECK: bun verify-gates.mjs readme
  EXPECT: readme verification passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=/Volumes/SamDisk/ecommerce-research-academy/scripts/corpus; path=44f473e9a604/18 entries; EXPECT=matched; output-sha256=6837ecd31aa3f75c16d5e49c96ef85366f09621c1b68a5553770704325e8468d; output-bytes=54

- [x] G8: xác minh 2 handle YouTube còn treo (Structured Agency, Cassie On Demand) bằng cách mở trang thật và đối chiếu tên hiển thị
  EVIDENCE: 2026-08-29. (1) `@CassiyJohnson` — fetch trả nội dung, tiêu đề trang "Cassiy Johnson - YouTube", KHÔNG phải 404; đúng chủ đề POD/Etsy; nguồn độc lập xác nhận: CNBC 2023 + blog Printify. Kết luận: tên trong danh sách gốc ("Cassie On Demand") viết sai, đã sửa thành Cassiy Johnson. (2) Structured Agency — thử 3 handle `@structuredagency`, `@structuredsocial`, `@NickShackelford`, CẢ BA trả HTTP 404; tìm kiếm web (2 truy vấn, có giới hạn domain youtube.com) không ra kênh nào. Structured là agency DTC có thật của Nick Shackelford nhưng không có kênh YouTube. Kết luận: gỡ khỏi danh sách, không phải sai chính tả mà là mục lane nghiên cứu bịa. Đã cập nhật `01-youtube.md` ở CẢ 2 bản (SamDisk + ceo-brain); con số cuối 34 kênh xác minh được, 1 mục gỡ.

- [x] G9: đưa `scripts/corpus/` vào repo commerce-brain trên SamDisk (Sam chốt 2026-08-29: chuyển hẳn sang thư mục đang làm, KHÔNG commit vào ceo-brain)
  EVIDENCE: 2026-08-29. Đã chuyển `/Users/sam/Desktop/sources/ceo-brain/scripts/corpus/` → `/Volumes/SamDisk/ecommerce-research-academy/scripts/corpus/` (7 file). Kiểm tra trước khi gỡ bản cũ: mọi `import` trong fetch.ts là tĩnh (dòng 17-18) và `sources.json` chỉ đọc một lần ở module top-level (dòng 41) → tiến trình đang chạy không đọc lại file script. Sau khi `rm -rf` bản cũ, xác nhận cả 2 lane (`--phase blogs`, `--phase podcasts`) vẫn sống. Build lại từ vị trí mới: `bun build fetch.ts` OK 31.62 KB. Cập nhật 11 tham chiếu đường dẫn trong Plans/cozy-questing-ullman.md (9) và 2 bản SESSION-HANDOFF.md. Quét secret trước khi push: 0 hit. Commit `6e7e6697` author `Sam <sam@avada.io>`, không có dòng Co-Authored-By; SHA trên remote khớp; `.git/config` không chứa token. KHÔNG đụng gì vào git index của ceo-brain.

<!--
Ghi chu ve tinh trung thuc cua tung gate:

G1  Nguong 1000 file la san, KHONG phai muc tieu. Con kiem tra rieng: site nao ra
    0 file thi bat buoc state phai co loi BLOCKED/403/429 - tuc bi chan that,
    khong phai code am tham bo qua.
G3  Loc bo omnitalk-pod khoi phep dem vi Sam chot bo feed nay (2026-08-29).
    Neu khong loc, gate se vinh vien do va che mat 1.649 tap that su can chay.
G4  Kiem tra that: Omni Talk RSS tung tra 3 entry cho 1 tap. Day la kiem soat
    duong tinh co san, khong phai gate hinh thuc.
G5  Doi chieu 2 chieu: REPORT phai goi ten moi nguon <30 file, VA con so
    TONG_FILE trong REPORT phai khop so dem lai tu dia - chan viec dan so cu.
G6  Dung git lam trong tai (tree sach + khong commit ton dong) thay vi goi API,
    de gate khong phu thuoc token.
G8  Gate thu cong that su: curl tra 200 ca voi handle sai, phai mo trang va doc
    ten hien thi. Da tung sai 8/35 handle theo dung kieu nay.
G9  Cho quyet dinh cua chu so huu. KHONG duoc tu commit roi tich gate.
-->
