# Ecom Brain resolver

Choose one skill, then read only the listed knowledge.

| User wants | Skill | Read first |
|---|---|---|
| Ecom Brain overview, contents, maturity, coverage | `ecom-overview` | `knowledge/index.md`, `foundations/master-playbook.md`, `concepts/evidence-and-coverage.md` |
| Identify a merchant's model | `classify-commerce-model` | `concepts/two-axis-taxonomy.md`, then matching model cards |
| Compare business models or channels | `compare-commerce-models` | `concepts/model-card-method.md`, then every compared card |
| Diagnose a stuck merchant | `diagnose-merchant` | `foundations/master-playbook.md`, classification, matching cards |
| Find Avada product opportunities | `opportunity-map-avada` | playbook, coverage, relevant cards |
| Learn or quiz | `teach-ecom` | taxonomy, then one relevant card |
| Ambiguous `/ecom` question | `ask-ecom` | this resolver and knowledge index |

## Rules

- Knowledge owns facts; skills own workflows.
- Never load the raw `corpus/` as a default skill step.
- State `deep-corpus` versus `catalog-only` evidence.
- Re-check fast-moving agentic-commerce sources when older than 30 days.
- Do not fill a missing model card from generic ecommerce advice.
- Internal third-party corpus content must not be redistributed.
