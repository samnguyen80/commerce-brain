# Kiểm chứng handle YouTube — lane-gemini-youtube.md

Nguồn kiểm: WebFetch trực tiếp trang `youtube.com/@handle` (bắt 404 thật) + WebSearch đối chiếu tên hiển thị/host/chủ kênh. KHÔNG dùng curl (YouTube trả 200 cho handle sai nên không tin được).

Tổng: 35 kênh — ĐÚNG: 25 · SAI→SỬA: 8 · KHÔNG XÁC MINH ĐƯỢC: 2

---

## ĐÚNG (handle trỏ đúng kênh)

| Tên | URL | Bằng chứng ngắn |
| :--- | :--- | :--- |
| Smart Marketer (Ezra Firestone) | https://www.youtube.com/@smartmarketer | Trang tải được (không 404); khớp Ezra Firestone/smartmarketer.com qua search |
| Common Thread Collective | https://www.youtube.com/@commonthreadco | Search trả đúng "Common Thread Collective - YouTube" tại URL này |
| Dara Denney | https://www.youtube.com/@DaraDenney | Search xác nhận kênh Dara Denney, ~100K subs (7/2026) |
| Shopify (Official) | https://www.youtube.com/@Shopify | Trang tải được, không 404 |
| Shopify Developers | https://www.youtube.com/@ShopifyDevs | Search khớp tagline chính thức "Where developers meet commerce" |
| Printful (Official) | https://www.youtube.com/@Printful | WebFetch: trang thật, title "printful - YouTube" |
| Printify (Official) | https://www.youtube.com/@Printify | Search xác nhận kênh Printify tồn tại, mốc "100k subs" được nhắc |
| Ryan Hogue Passive Income | https://www.youtube.com/@RyanHoguePassiveIncome | Channel ID UChd9BBD7NWmkbwhsmV2-XoA khớp qua vidIQ/SocialBlade |
| The Unofficial Shopify Podcast (Kurt Elster) | https://www.youtube.com/@KurtElster | WebFetch: trang thật, title "Kurt Elster - YouTube" |
| Chase Dimond | https://www.youtube.com/@chasedimond | Search: "Chase Dimond \| Email Marketing - YouTube" đúng URL này |
| Jungle Scout (Official) | https://www.youtube.com/@JungleScout | WebFetch: trang thật, không 404 |
| Ben Zettler | https://www.youtube.com/@benzettler | WebFetch: trang thật, title "Ben Zettler - YouTube" |
| Triple Whale (Official) | https://www.youtube.com/@triplewhale | WebFetch: trang thật, không 404 |
| Klaviyo (Official) | https://www.youtube.com/@Klaviyo | WebFetch + search: trang thật, không 404 |
| Sharon Even | https://www.youtube.com/@SharonEven | Search khớp đúng "Sharon Even - YouTube" tại URL này (⚠️ subs lệch, xem mục cuối) |
| Brandon Young (Seller Systems / Data Dive) | https://www.youtube.com/@SellerSystems | WebFetch: trang thật, title "Seller Systems - YouTube" |
| Adam Heist | https://www.youtube.com/@AdamHeist | Search khớp đúng "Adam Heist - YouTube" tại URL này (⚠️ subs lệch, xem mục cuối) |
| Nik Sharma (Sharma Brands) | https://www.youtube.com/@mrniksharma | Search: LinkedIn/X đều dùng handle "mrniksharma" cho Nik Sharma (The DTC Guy, Sharma Brands) |
| DTC Podcast (Direct to Consumer / Pilothouse) | https://www.youtube.com/@DirecttoConsumer | WebFetch: trang thật, không 404 (⚠️ subs lệch mạnh, xem mục cuối — độ tin cậy thấp hơn) |
| Motion (Creative Analytics) | https://www.youtube.com/@MotionApp | Search xác nhận kênh Motion (Creative Analytics) tồn tại |
| Andrew Faris (Boring Books for Ecommerce) | https://www.youtube.com/@andrewfaris | WebFetch: trang thật, title "Andrew Faris - YouTube" (lưu ý: có thêm kênh podcast riêng @andrewfarispodcast) |
| Conversion Wise (Oliver Kenyon) | https://www.youtube.com/@conversionwise | Search: "Oliver Kenyon \| ConversionWise - YouTube" khớp URL này |
| WooCommerce (Automattic Official) | https://www.youtube.com/@WooCommerce | Không có bằng chứng 404; trang tải được |
| Future Commerce (Phillip Jackson) | https://www.youtube.com/@futurecommerce | Search xác nhận kênh Future Commerce (Phillip Jackson & Brian Lange) (⚠️ subs lệch, xem mục cuối) |
| Wholesale Ted (Sarah Chrisp) | https://www.youtube.com/@WholesaleTed | Search: HypeAuditor xác nhận kênh Sarah Chrisp, ~1.4M+ subs (⚠️ subs lệch, xem mục cuối) |

---

## SAI → SỬA (handle sai hoặc 404, đã tìm được handle đúng)

| Tên | URL sai trong file | URL đúng | Bằng chứng |
| :--- | :--- | :--- | :--- |
| The Operators Podcast | `https://www.youtube.com/@TheOperatorsPod` | `https://www.youtube.com/@MarketingOperators` | @TheOperatorsPod trả 404 (WebFetch). Podcast thật tên **"Marketing Operators"**, host là Cody Plofker (Jones Road Beauty), Connor MacDonald (Ridge), Connor Rolain (HexClad) — KHÔNG phải Taylor Holiday/Eric Dyck như file ghi. @MarketingOperators tải được, không 404. |
| Savannah Sanchez (The Social Savannah) | `https://www.youtube.com/@TheSocialSavannah` | `https://www.youtube.com/@socialsavannah` | @TheSocialSavannah trả 404 (WebFetch, thử cả @savannahsanchez cũng 404). Search xác nhận handle hiện tại là "@socialsavannah". |
| Helium 10 (Official) | `https://www.youtube.com/@Helium10Software` | `https://www.youtube.com/@Helium10` | @Helium10Software trả 404 (WebFetch). @Helium10 tải được, title "Helium 10 - YouTube", khớp channel ID UCpBvckYg2UXArcfzRcjpPjw mà search trả về là kênh chính thức. |
| Mina Elias (Trivium Group) | `https://www.youtube.com/@MinaEliasMMA` | `https://www.youtube.com/@theminaelias` | @MinaEliasMMA trả 404 (WebFetch). @theminaelias tải được, title "Mina Elias - YouTube", khớp Trivium Group qua nhiều nguồn (Jungle Scout contributor page, LinkedIn). |
| Gorgias (Official) | `https://www.youtube.com/@GorgiasHelpdesk` | `https://www.youtube.com/channel/UCbnRDEiWYYafw6Vx1Za5PNQ` | @GorgiasHelpdesk trả 404. Đã thử thêm @Gorgias (cũng 404). Kênh chính thức Gorgias tồn tại nhưng chỉ tìm được dạng URL channel ID, KHÔNG tìm được vanity @handle nào khớp — dùng URL channel ID thay thế. |
| Travis Petelle (Kingpinning) | `https://www.youtube.com/@TravisPetelle` | `https://www.youtube.com/@Kingpinning` | @TravisPetelle trả 404 (WebFetch). @Kingpinning tải được (không 404), title "Kingpinning - YouTube", đúng channel ID UC2psO2E5Fys9YHY5-_9PjNg mà search trả về là kênh Kingpinning/Travis Petelle. |
| Heather's Story (Heather Studio) | `https://www.youtube.com/@heathersstory` | `https://www.youtube.com/@itsheatherstudio` | @heathersstory tồn tại nhưng SAI kênh — title trả về chỉ là "Heather - YouTube" (kênh khác, không liên quan POD/apparel). Kênh POD/Etsy thật của "Heather Studio / HeatherXStudio" (Top 1% Etsy seller, $500K+ sales) có handle @itsheatherstudio, channel ID UCI2u1lmVFzzYECugHsK-JjQ, title "heatherstudio - YouTube". |
| eCommerceFuel (Andrew Youderian) | `https://www.youtube.com/@ecommercefuel` | `https://www.youtube.com/ecommercefuel` | @ecommercefuel (dạng handle mới) trả 404. URL legacy `youtube.com/ecommercefuel` (không có @) tải được, title "eComFuel - YouTube" — kênh chưa chuyển sang handle @, phải dùng URL legacy. |

---

## KHÔNG XÁC MINH ĐƯỢC

| Tên | URL | Vấn đề |
| :--- | :--- | :--- |
| Cassie On Demand | `https://www.youtube.com/@CassieOnDemand` | 404 (WebFetch). Tìm khắp WebSearch không ra creator ecom/POD nào tên "Cassie On Demand". Người gần giống nhất về profile (POD/Etsy, "0 lên 6-figure") là **Cassiy Johnson** (`@CassiyJohnson`, lưu ý chính tả "Cassiy" khác "Cassie") — nhưng KHÔNG đủ chắc chắn đây là cùng một người để xếp vào bảng SỬA. Cần Sam xác nhận thủ công. |
| Structured Agency (Nick Shackelford / Geek Out) | `https://www.youtube.com/@structuredagency` | 404 (WebFetch). Search tìm được các kênh liên quan Nick Shackelford (video phỏng vấn trên kênh khác, "Agency Algorithm" playlist) nhưng không tìm ra @handle chính thức hiện tại của Structured Agency/Structured Social. |

---

## SỐ SUBSCRIBER LỆCH

| Tên | Số trong file | Số thật thấy được | Ghi chú |
| :--- | :--- | :--- | :--- |
| Sharon Even | ~36k | ~107K | Search trả trực tiếp con số 107K cho kênh @SharonEven — lệch ~3x |
| Adam Heist | ~62k | ~25K (24.6K theo 1 nguồn khác) | Lệch ~2.5x theo hướng file ghi CAO hơn thực tế |
| DTC Podcast | ~22k | ~5.2K (theo Podseeker) | Lệch mạnh, nhưng nguồn subscriber-count thấp hơn WebSearch có thể không cập nhật — độ tin cậy trung bình |
| Future Commerce | ~9k | ~4.2K (theo Podseeker) | Lệch ~2x, cùng loại nguồn không chắc mới nhất |
| Wholesale Ted | ~1.15M | ~1.4M+ (HypeAuditor, theo dữ liệu 12/2025) | Lệch nhẹ theo hướng file ghi THẤP hơn thực tế — có thể do kênh tăng trưởng giữa 2 thời điểm đo |
| Ryan Hogue Passive Income | ~165k | ~140K (SPEAKRJ) hoặc ~190K+ (theo trang Pinterest của chính kênh) | Nguồn không đồng nhất, không đủ tin cậy để kết luận lệch — chỉ ghi chú tham khảo |
| Printify | ~225k | Không xác định chính xác — chỉ tìm được mốc "100k" trên trang creators của Printify (có thể là số liệu cũ hoặc khác chỉ số) | Không đủ dữ liệu để khẳng định lệch |

*Số subscriber trong toàn bộ báo cáo đều lấy từ snippet WebSearch (không đăng nhập được vào trang channel để đọc số live), nên chỉ nên dùng làm tín hiệu tham khảo, không phải số chính xác tại thời điểm hiện tại (29/08/2026).
