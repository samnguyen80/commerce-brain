# Commerce Avada Academy

Thư viện nguồn học cho **đúng phạm vi Avada đã chốt** trong [[../00-commerce-avada]] — 3 category trục 1 (Handmade/Craft, Digital products, Subscription box/Kitting) và toàn bộ 10 category trục 2.

Khác với thư mục cha (`ecommerce-research-academy/`) vốn phủ DTC/POD/Fashion theo phạm vi nghiên cứu vòng đầu, thư mục này bám sát 13 category đã chọn.

**Ngày nghiên cứu:** 2026-08-29 · **Cách làm:** 4 agent chạy song song, mỗi agent một nhóm category, kiểm chứng URL trực tiếp.

---

## Đọc file nào

| File | Nội dung | Số nguồn |
|---|---|---|
| [[01-truc1-handmade-digital-subscription]] | Handmade/Craft · Digital products · Subscription box & Kitting | 29 |
| [[02-truc2-marketplace-social-creator]] | Marketplace seller · Social & Live commerce · Creator/Affiliate | 24 |
| [[03-truc2-dtc-b2b-retail-b2b2c]] | DTC (bổ sung) · B2B/Wholesale · Retail & Omnichannel · B2B2C/Marketplace operator | 28 |
| [[04-truc2-recommerce-rental-agentic]] | Recommerce/Resale · Rental commerce · Agentic commerce | 45 |
| `_raw/` | Output gốc từng lane, để truy vết khi nghi ngờ một dòng | 5 file |

**Tổng: 126 nguồn** phủ đủ 13 category.

## Phân công lane

| Agent | Category phụ trách | Ghi chú chất lượng |
|---|---|---|
| **Gemini (agy)** | Handmade, Marketplace seller, Social & Live, Creator/Affiliate | Mạnh kênh video; có nguồn Việt Nam/SEA |
| **GPT Terra** | Digital products, Subscription box | Ghi ngày crawl từng URL; thiên tài liệu chính chủ |
| **Sonnet 5** | DTC bổ sung, B2B/Wholesale, Retail, B2B2C | Verify bằng WebFetch trực tiếp 8/9 nguồn mảng Retail |
| **Grok** | Recommerce, Rental, Agentic commerce | Verify chặt nhất; output bị trộn ký tự phần giữa, đã dựng lại |

## Ký hiệu dùng trong các bảng

- 🏢 nội dung do vendor/agency sản xuất — dùng insight, đừng coi là trung lập
- ⚠️ có cảnh báo cụ thể (push sale mạnh, danh tiếng tranh cãi, dữ liệu chưa xác nhận)
- 🇻🇳 nguồn tiếng Việt / thị trường SEA
- `[chưa verify]` URL hoặc số liệu chưa xác nhận trực tiếp được

---

## Ba kết luận đáng chú ý nhất

**1. Có category không tồn tại khoá học đạt chuẩn — và đó là kết luận, không phải thiếu sót.**
Agentic commerce (ACP/AP2/UCP/Instant Checkout): tính đến 29/08/2026 không có curriculum bài bản nào trên Coursera/edX/Udemy. Đường học duy nhất là đọc spec rồi implement. Rental fashion cũng vậy — không có "Rental University"; muốn học kinh tế học của mô hình thì đọc 10-K của Rent the Runway và earnings của URBN/Nuuly, chứ đừng mua khoá.

**2. B2B/Wholesale mỏng nguồn độc lập nhất.**
6/8 nguồn tốt nhất là blog của chính công ty bán platform. Không có tiếng nói độc lập quy mô lớn nào cho merchant cỡ Shopify — khác hẳn DTC và Retail.

**3. Social & Live commerce bị ô nhiễm nặng nhất.**
Hơn 80% nội dung TikTok Shop trên mạng là khoe dashboard, bán tool lách luật, hoặc khoá dropshipping rác. Nguồn đáng tin gần như chỉ còn academy chính chủ và vài operator thật.

## Khoảng trống sản phẩm, không chỉ khoảng trống nội dung

Vài gap tìm thấy trong lúc nghiên cứu trùng đúng chỗ Avada làm sản phẩm:

- **Handmade scale lên 10–50 người**: không có tài liệu nào về đồng bộ tồn kho Etsy ↔ Shopify, chuỗi cung ứng mẻ nhỏ, quản lý kho nguyên vật liệu. Người bán tự mò.
- **Digital products bán xuyên biên giới**: thiếu nguồn về chống chia sẻ trái phép, licensing, và thuế cho thị trường Việt Nam.
- **Subscription box**: dày về churn/LTV, mỏng hẳn về procurement, BOM/kitting cost, QA đóng hộp, SLA 3PL — tức phần vận hành thật.
- **Creator/Affiliate nhìn từ phía brand**: hầu như không có tài liệu dạy brand tự thiết kế attribution minh bạch, xử lý gian lận hoàn hàng, quản trị quan hệ creator dài hạn.

---

*Liên quan: [[../00-commerce-avada]] · [[../00-phan-loai-mo-hinh-commerce]] · [[../02-website-newsletter-cong-dong]] · [[../03-khoa-hoc-academy-sach]]*
