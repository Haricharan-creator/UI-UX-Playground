# HACHARA UI/UX Playground — Contract & Source-of-Truth Consistency Audit v1.0

**Date:** 2026-09-30
**Status:** REQUIRES CORRECTION — SAFE STOP

## Finding

The current repository contains a material metadata conflict that must be resolved before final curriculum mapping is locked.

### Authoritative current state established by the recent controlled inventory
- Physical lesson files: **96**
- Curriculum lesson units: **95**
- `lesson.html`: reference/template
- Current provisional module architecture: **28 modules**

### Conflicting legacy metadata found
`data/curriculum-mapping-policy.json` still declares:

`sourceOfTruth: "117-lesson master registry"`

`docs/REPOSITORY-SOURCE-OF-TRUTH-v1.0.md` still describes the UI/UX registry as **63 lesson files**.

These statements conflict with the later verified UI/UX repository inventory and the current lesson registry/classification/reconciliation work.

## Consumer review

The current GitHub validation scripts inspected in this audit do **not** directly consume `data/curriculum-mapping-policy.json` or `data/provisional-lesson-module-map-v1.json` for runtime validation. The existing validation pipeline checks the curriculum manifest, identifiers, integration contracts, navigation, HTML, accessibility, forms and preservation/safety checks.

Therefore the conflict is currently a **governance/source-of-truth consistency issue**, not evidence that the existing lesson pages are being rewritten or that the runtime validator is using the 117 count.

## Required human decision

Before changing either legacy statement, confirm that the already-established current UI/UX inventory (**96 physical / 95 curriculum + 1 template**) is the intended authoritative count for the repository going forward.

Once confirmed, the controlled correction should:
1. Update `data/curriculum-mapping-policy.json` so its source-of-truth wording no longer points to the obsolete 117-lesson registry.
2. Update `docs/REPOSITORY-SOURCE-OF-TRUTH-v1.0.md` so its registry count reflects the current verified inventory and clearly distinguishes physical files from curriculum units.
3. Preserve the historical 117/63 references only as historical audit context where useful; do not treat them as current truth.
4. Re-run structural and integration validation.

No lesson content has been changed by this audit.
