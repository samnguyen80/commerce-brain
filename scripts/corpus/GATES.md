# Gates: corpus pull — ecommerce-research-academy

OWNS: scripts/corpus/**

Scope: kéo trọn nội dung text (blog, YouTube, khoá học, podcast) cho nhóm DTC/B2B/Retail/B2B2C về `/Volumes/SamDisk/ecommerce-research-academy/corpus`, ghi nhận trung thực nguồn không lấy được, và đồng bộ toàn bộ phần text lên repo riêng `samnguyen80/commerce-brain`.

Mọi `CHECK` đều gọi `verify-gates.mjs`, script này ĐO TRỰC TIẾP file trên đĩa và tiến trình đang chạy — không đọc lại log hay báo cáo của agent.

- [ ] G1: lane blog chạy xong, mọi site đều có bài hoặc có lý do bị chặn ghi trong state
  CHECK: node verify-gates.mjs blogs
  EXPECT: blogs verification passed
  EVIDENCE: pending

- [x] G2: lane YouTube chạy xong, transcript đã về đĩa
  CHECK: node verify-gates.mjs youtube
  EXPECT: youtube verification passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=/Users/sam/Desktop/sources/ceo-brain/scripts/corpus; path=d5d804e2d401/17 entries; EXPECT=matched; output-sha256=f2d8fcf37024bf82ee4bd8a676b1cb8bfebbe5d4106fb8ecd4ca6523ffa45ea8; output-bytes=45

- [ ] G3: podcast pass 2 xong — 0 tập tồn đọng ngoài omnitalk (feed Sam đã chốt bỏ)
  CHECK: node verify-gates.mjs podcast
  EXPECT: podcast verification passed
  EVIDENCE: pending

- [x] G4: không còn tài liệu trùng trong `web/` và `courses/` (theo cả URL lẫn hash thân bài); `podcast/` được loại trừ có chủ đích vì ở đó không có khoá định danh đáng tin
  CHECK: node verify-gates.mjs dupes
  EXPECT: dupes verification passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=/Users/sam/Desktop/sources/ceo-brain/scripts/corpus; path=d5d804e2d401/17 entries; EXPECT=matched; output-sha256=c5add85186d4112988a50fdfed2e428ad1c1c245e62baf571a2d376d1e51bfe8; output-bytes=94

- [ ] G5: REPORT.md gọi tên mọi nguồn lấy thiếu/bị chặn, và số tổng khớp số đếm thật
  CHECK: node verify-gates.mjs report
  EXPECT: report verification passed
  EVIDENCE: pending

- [ ] G6: commerce-brain đồng bộ đủ — 0 file chưa commit, 0 commit chưa push, 0 media lọt
  CHECK: node verify-gates.mjs sync
  EXPECT: sync verification passed
  EVIDENCE: pending

- [x] G7: README.md ở gốc thư mục nghiên cứu trỏ tới đủ các mục con
  CHECK: node verify-gates.mjs readme
  EXPECT: readme verification passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=/Users/sam/Desktop/sources/ceo-brain/scripts/corpus; path=d5d804e2d401/17 entries; EXPECT=matched; output-sha256=6837ecd31aa3f75c16d5e49c96ef85366f09621c1b68a5553770704325e8468d; output-bytes=54

- [x] G8: xác minh 2 handle YouTube còn treo (Structured Agency, Cassie On Demand) bằng cách mở trang thật và đối chiếu tên hiển thị
  EVIDENCE: 2026-08-29. (1) `@CassiyJohnson` — fetch trả nội dung, tiêu đề trang "Cassiy Johnson - YouTube", KHÔNG phải 404; đúng chủ đề POD/Etsy; nguồn độc lập xác nhận: CNBC 2023 + blog Printify. Kết luận: tên trong danh sách gốc ("Cassie On Demand") viết sai, đã sửa thành Cassiy Johnson. (2) Structured Agency — thử 3 handle `@structuredagency`, `@structuredsocial`, `@NickShackelford`, CẢ BA trả HTTP 404; tìm kiếm web (2 truy vấn, có giới hạn domain youtube.com) không ra kênh nào. Structured là agency DTC có thật của Nick Shackelford nhưng không có kênh YouTube. Kết luận: gỡ khỏi danh sách, không phải sai chính tả mà là mục lane nghiên cứu bịa. Đã cập nhật `01-youtube.md` ở CẢ 2 bản (SamDisk + ceo-brain); con số cuối 34 kênh xác minh được, 1 mục gỡ.

- [ ] G9: commit `scripts/corpus/` vào repo ceo-brain — CẦN SAM ĐỒNG Ý, vì working tree đang dùng chung với 3 session Claude khác
  EVIDENCE: pending

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
