# UI UX Playground — HACHARA

**Product identity:** UI UX Playground  
**Signature:** HACHARA  
**Methodology:** Learn + Think + Ideate + Develop + Test + Rework + Build + Share

This repository contains the preserved single-file UI UX Playground baseline plus an alternative Modern Workspace presentation layer.

## Workspace UI options

HACHARA now provides two interface options while keeping the existing Classic Workspace as the preserved functional baseline:

- `ui-options.html` — choose the preferred interface.
- `index.html` — Classic HACHARA Workspace and preserved full tool environment.
- `modern.html` — Modern HACHARA Workspace inspired by the supplied visual direction: HACHARA Loop, progress, ideas, quick actions and contextual learning.

The UI preference is stored locally in the browser. The intent is one product with multiple presentation options, not two separate products.

## User Manual

See [`USER-MANUAL.md`](USER-MANUAL.md) for the product workflow, where to start, review method, examples approach, project continuity and troubleshooting.

## Examples

See [`EXAMPLES-LIBRARY.md`](EXAMPLES-LIBRARY.md) for the baseline real-world examples, worked-example structure and guidance on when annotated screens or illustrations should be used.

## Local run

Open `ui-options.html` to choose a workspace, or open `index.html` directly. You can also run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/ui-options.html`.

## GitHub Pages

After pushing to GitHub, enable Pages from **Settings → Pages**, using the `main` branch and root folder.

Once Pages is published, the workspace selector is available at `/ui-options.html`, the preserved Classic Workspace at `/index.html`, and the Modern Workspace at `/modern.html`.

## Preservation

Treat `index.html` as the working baseline. New UI options and documentation must preserve existing functionality and must be regression-tested before any replacement of the baseline.


## Product architecture and UX planning pack

Use these versioned documents before starting substantial product or UX work:

- [Product Architecture & Operating Model](docs/HACHARA-PRODUCT-ARCHITECTURE-AND-OPERATING-MODEL-v1.0.md) — logical layers, source-of-truth hierarchy, conceptual data entities, boundaries and quality gates.
- [Personas & Empathy Maps](docs/HACHARA-PERSONAS-AND-EMPATHY-MAPS-v1.0.md) — provisional personas and empathy maps; hypotheses that must be validated with real learners.
- [User Journey, Process Flow & Task Flow Maps](docs/HACHARA-USER-JOURNEY-AND-FLOW-MAPS-v1.0.md) — end-to-end learning journey, submission/review/rework/validation flow, task flows and edge cases.
- [Background Documents & Delivery Accelerator](docs/HACHARA-BACKGROUND-DOCUMENTS-AND-DELIVERY-ACCELERATOR-v1.0.md) — onboarding reading order, task brief template, automation-first process, definition of ready/done and risk register.
- [Competitor Teardown & Adoption Register](docs/COMPETITOR-TEARDOWN-AND-ADOPTION-REGISTER.md) — public-source competitor findings, adoption ideas and research gaps.

**Status note:** architecture documents and workflow contracts are not proof that all runtime flows are implemented. Check the latest CI runs and complete the runtime journey audit before treating the full experience as verified.
