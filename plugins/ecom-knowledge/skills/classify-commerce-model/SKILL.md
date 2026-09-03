---
name: classify-commerce-model
description: "Classify a merchant on Ecom Brain's fulfillment and channel axes and identify adjacent models. Use when given a store, company, merchant description, product, or go-to-market setup and asked what ecommerce model it is."
---

# Classify a commerce model

Read `../../knowledge/concepts/two-axis-taxonomy.md` and `../../knowledge/concepts/model-card-method.md`.

## Need

Use facts already supplied. Ask only for missing facts that change the coordinate:

- who makes, owns, or licenses the offer;
- whether inventory exists and who fulfills;
- where checkout happens;
- who controls customer identity and repeat communication;
- whether third-party sellers or creators participate;
- whether ownership transfers or access is temporary.

## Output

1. Fulfillment coordinate.
2. Channel coordinate or coordinates.
3. Confidence and missing evidence.
4. Closest commonly confused model and why it is different.
5. The primary operating constraint implied by this coordinate.

Read the matching files under `../../knowledge/business-models/` before giving the operating constraint. Do not force an in-scope fulfillment label when the merchant is actually POD, dropshipping, private label, or another out-of-scope model; name it and state that its full card is not yet in the plugin.
