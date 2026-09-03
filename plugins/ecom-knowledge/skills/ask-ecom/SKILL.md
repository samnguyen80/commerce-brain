---
name: ask-ecom
description: "Route an ecommerce business-model question to the right Ecom Brain workflow. Use for /ecom, ask Ecom Brain, which commerce model or skill, or an ambiguous commerce-model request. Do not answer from generic ecommerce knowledge when a specialist skill applies."
---

# Ask Ecom Brain

Read `../../knowledge/index.md` and `../../knowledge/foundations/master-playbook.md`, resolving paths from this skill directory.

Pick one workflow:

| User intent | Skill |
|---|---|
| What is in Ecom Brain / current coverage | `ecom-overview` |
| What model is this merchant | `classify-commerce-model` |
| Compare two models or channels | `compare-commerce-models` |
| Diagnose a merchant's model or bottleneck | `diagnose-merchant` |
| Find product opportunities for Avada | `opportunity-map-avada` |
| Teach a commerce concept interactively | `teach-ecom` |

If two workflows could apply, ask one short question. Route non-commerce work outside this plugin. Do not invent a doctrine missing from the knowledge layer.
