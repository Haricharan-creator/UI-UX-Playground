# HACHARA UI/UX Playground — Lesson Content Reconciliation Audit v1.0

**Date:** 2026-09-29  
**Status:** IN PROGRESS  
**Purpose:** Reconcile the 93 physical lesson files into curriculum identities without deleting, merging, or rewriting source lesson content.

## Authority

This audit follows:
- `LESSON-REGISTRY.md`
- `data/bundle-engine-contract.json`
- `data/curriculum-manifest.json`
- `CURRICULUM-BUNDLE-MASTER.md`

The lesson files themselves remain the authoritative authored content. This document is an analysis/mapping layer only.

## Physical inventory

Current repository inventory: **93 physical lesson files**.

Physical count and curriculum-topic count are intentionally separate.

## Classification rules

| Status | Meaning |
|---|---|
| core | Distinct learning unit with a clear curriculum role |
| supporting | Useful supporting/deeper treatment of another capability |
| overlap-candidate | Closely related content requiring explicit comparison before curriculum consolidation |
| reference-template | Structural/template material rather than a unique learning topic |
| unmapped | Physical content exists but its final curriculum role is not yet established |

**Important:** overlap-candidate does not mean duplicate.

## Generation / structure observations

The repository contains multiple lesson generations:

1. Foundational/topic-based lessons.
2. Accessibility and inclusive-design lesson families.
3. Numbered lessons 61–92 covering increasingly specific capabilities.
4. Numbered lessons 081–092 covering content, design systems, delivery, measurement, and usability metrics.
5. `lesson.html` as a lesson template/reference.

The filename number is historical/build information, not authoritative curriculum numbering.

## Confirmed review families

### 1. Dialogs
- `lesson-accessible-dialogs-modals.html`
- `lesson-accessible-dialogs-overlays.html`

The first focuses strongly on modal/dialog behavior including title, initial focus, focus containment, close/cancel, background interaction, and return focus. The second covers a broader overlay family including dialogs, drawers, sheets, destructive actions, focus entry/boundary/exit, and return context.

**Classification:** overlap-candidate; preserve both.

### 2. Error handling
- `lesson-accessible-error-prevention-recovery.html`
- `lesson-accessible-error-recovery.html`

Both address recovery, but one emphasizes prevention plus recovery mechanisms such as constraints, defaults, undo, confirmation, feedback, and preserving work; the other emphasizes the recovery journey: explain, locate, recover, preserve, confirm.

**Classification:** overlap-candidate; preserve both.

### 3. Forms
- `lesson-accessible-forms.html`
- `lesson-accessible-forms-inputs.html`
- `lesson-accessible-forms-validation.html`

Shared concepts include labels, instructions, grouping, errors, recovery, and preservation. The inputs and validation files provide more specialized treatment.

**Classification:** overlap-candidate; preserve all three pending curriculum-role comparison.

### 4. Navigation
- `lesson-accessible-navigation.html`
- `lesson-accessible-navigation-landmarks.html`
- `lesson-accessible-navigation-patterns.html`

The files address related but distinguishable layers: navigation/focus, headings/landmarks/regions, and concrete patterns such as tabs, menus, breadcrumbs, pagination, and search.

**Classification:** overlap-candidate; preserve all three.

### 5. Cognitive accessibility
- `lesson-cognitive-accessibility.html`
- `lesson-designing-for-cognitive-accessibility.html`

The first is a concise cognitive-accessibility treatment; the second is a broader clear-UX treatment including language, predictability, chunking, progressive disclosure, forgiveness, and feedback.

**Classification:** overlap-candidate; preserve both.

### 6. Colour contrast
- `lesson-accessible-color-contrast.html`
- `lesson-color-contrast.html`

These occupy related accessibility/visual layers rather than being declared duplicates from naming alone.

**Classification:** overlap-candidate; preserve both.

### 7. Responsive design
- `lesson-responsive-design.html`
- `lesson-inclusive-responsive-design.html`

The general responsive lesson covers responsive behavior across device classes. The inclusive version adds accessibility-oriented concerns including reflow, text scaling, touch targets, content priority, orientation, and input flexibility.

**Classification:** overlap-candidate; preserve both.

### 8. Screen readers
- `lesson-accessible-screen-reader-content.html`
- `lesson-screen-reader-ux.html`

The first emphasizes semantic structure, meaningful names, headings, landmarks, states, and reading order. The second provides a more concise screen-reader UX awareness treatment.

**Classification:** overlap-candidate; preserve both.

### 9. UX metrics
- `lesson-090-ux-metrics.html`
- `lesson-091-ux-metrics-and-measurement.html`

Both are physical lesson units in the current repository and require content-level comparison before deciding whether one is core and the other supporting or whether they represent distinct learning objectives.

**Classification:** overlap-candidate; preserve both.

## Distinct newer capability families identified

The numbered lesson generation adds distinct capability areas including:

- older-adult design
- children’s design
- language and literacy
- localization/internationalization
- RTL/bidirectional UX
- responsive accessible layouts
- touch targets/mobile UX
- voice/conversational accessibility
- multimodal accessibility
- accessibility design review
- stress and uncertainty
- progressive disclosure
- empty/loading/success states
- recovery
- feedback/system status
- interruption/resumption
- mobile contexts/gestures
- data-entry efficiency
- search/discovery/findability
- design critique/iteration
- UX content strategy
- design systems
- design tokens
- component anatomy
- component states
- responsive components
- component documentation
- design handoff
- design QA
- UX metrics
- UX metrics and measurement
- usability testing metrics

These are **not automatically replacements** for similarly named older lessons. Their final role must be established by comparing learning objectives and practical outcomes.

## Current decision

Do **not** populate final Bundle → Module → Lesson mappings yet.

Reason: the authoritative mapping contract explicitly requires stable source references and says uncertain mappings must be marked as source gaps rather than guessed.

## Next reconciliation stage

1. Complete content-level comparison across all physical lessons.
2. Assign provisional curriculum status to every lesson.
3. Identify distinct learning objectives versus supporting/deeper treatments.
4. Establish stable lesson IDs/source references.
5. Create module candidates from evidence.
6. Map confidently supported lessons into B01–B17.
7. Mark ambiguous relationships as `needs-review` or `source-gap`.
8. Run preservation/regression QA before treating the mapping as an approved baseline.

## Preservation gate

No source lesson content has been deleted, merged, or silently rewritten by this audit.

**Current validation:** physical inventory reconciled; content reconciliation in progress; final curriculum count and bundle mapping intentionally unresolved.
