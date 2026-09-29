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


## Stage 2 — numbered lesson generation review

A direct content-structure review of the numbered lesson generation confirms that lessons **61–92 are authored learning units**, not merely empty placeholders. Most contain a consistent learning/practice/check/rework structure, with several later lessons using Figma/Framer tool practice.

The following numbered lessons currently have clearly distinct stated objectives and are therefore **not being treated as duplicates solely because adjacent or older lessons cover related domains**:

- 61 Designing for Older Adults
- 62 Designing for Children
- 63 Designing for Language & Literacy
- 64 Localization & Internationalization
- 65 RTL & Bidirectional UX
- 66 Responsive Accessible Layouts
- 67 Touch Targets & Mobile UX
- 68 Voice & Conversational Accessibility
- 69 Multimodal Accessibility
- 70 Accessibility Design Review
- 71 Designing for Stress & Uncertainty
- 72 Progressive Disclosure
- 73 Empty, Loading & Success States
- 74 Designing for Recovery
- 75 Feedback & System Status
- 76 Interruption & Resumption
- 77 Mobile Contexts & Gestures
- 78 Data Entry Efficiency
- 79 Search, Discovery & Findability
- 80 Design Critique & Iteration
- 81 UX Content Strategy
- 82 Design Systems
- 83 Design Tokens
- 84 Component Anatomy
- 85 Component States
- 86 Responsive Components
- 87 Component Documentation
- 88 Design Handoff
- 89 Design QA
- 92 Usability Testing Metrics

### Specific reconciliation notes

**61–70 — inclusive/accessibility capability expansion**

These lessons form a more granular capability layer than the older broad accessibility lessons. They should therefore remain physical source units while curriculum relationships are evaluated.

**71–80 — interaction/context/practice expansion**

These lessons introduce distinct interaction and practice capabilities such as progressive disclosure, system states, recovery, interruption/resumption, mobile context, data entry, search/findability, and critique/iteration.

**81–89 — design-system and delivery capability expansion**

The sequence separates UX content strategy, design systems, tokens, component anatomy/states, responsive components, documentation, handoff, and design QA. These are sufficiently differentiated to avoid automatic consolidation.

**90 vs 91 — explicit overlap candidate**

- `lesson-090-ux-metrics.html` is a concise UX Metrics lesson with Learn/Check/Tool practice.
- `lesson-091-ux-metrics-and-measurement.html` is a more developed UX Metrics & Measurement lesson with measurement essentials, knowledge check, Figma/Framer measurement-plan practice, and rework loop.

**Current classification:** overlap-candidate. Preserve both. Do not declare 90 deprecated or 91 a replacement until the complete lesson content and intended curriculum role are compared.

**92 — usability testing metrics**

`lesson-092-usability-testing-metrics.html` has a distinct measurement focus within usability testing, including testing measurement essentials and a Figma/Framer exercise. It should not be automatically collapsed into the broader usability-testing lessons.

## Stage 2 conclusion

The numbered generation contains substantial **capability expansion**, not evidence of wholesale duplication. The strongest current consolidation candidates remain the previously identified overlap families plus the 90/91 metrics pair.

The correct next task is therefore **curriculum-role mapping**, not file deletion.

## Current classification confidence

- **High confidence distinct:** most numbered 61–89 and 92 units based on their stated objectives and structure.
- **High confidence reference/template:** `lesson.html`.
- **Explicit overlap candidates:** the nine families documented above, including 90/91.
- **Still requiring full objective/content comparison:** relationships between newer numbered units and older similarly themed lessons.

**Validation status:** Stage 2 numbered-lesson structural/content review completed; source files preserved.


## Stage 3 — older/newer lesson relationship review

Direct content comparison of representative older/newer pairs shows that several newer numbered lessons are **refined or expanded treatments of an existing topic**, rather than automatic replacements.

### Accessibility foundations
- `lesson-accessibility.html` introduces accessibility as a UX foundation across visual, motor, hearing and cognitive needs.
- `lesson-accessibility-foundations.html` expands the foundation into perceivable, operable, understandable, robust, focus and related considerations.
- `lesson-inclusive-design-foundations.html` broadens the frame from accessibility to inclusion across abilities, contexts, language, technology and temporary circumstances.

**Current role hypothesis:** layered foundation/supporting units. Do not merge or delete.

### Responsive design
- `lesson-responsive-design.html` establishes responsive adaptation across screen sizes, input contexts and content constraints.
- `lesson-inclusive-responsive-design.html` adds reflow, text scaling, touch targets, content priority and orientation/input variation.
- `lesson-66-responsive-accessible-layouts.html` is the newer numbered capability unit focused on responsive accessibility.

**Current role hypothesis:** foundation → inclusive extension → specialized capability. Preserve all pending final curriculum sequencing.

### Mobile touch
- `lesson-accessible-mobile-touch-targets.html` focuses on target size, spacing, gesture alternatives, orientation and different input methods.
- `lesson-67-touch-targets-mobile-ux.html` is the numbered specialized capability unit.

**Current role:** overlap-candidate/supporting relationship requires final objective comparison; preserve both.

### UX content strategy
- `lesson-content-strategy.html` establishes content as part of the interface, including labels, headings, instructions, errors, empty states and calls to action.
- `lesson-081-ux-content-strategy.html` moves into content mapping, purpose/audience, information hierarchy, states, ownership and a practical flow exercise.

**Current role hypothesis:** foundation → applied content-strategy practice. Preserve both.

### Design systems
- `lesson-design-systems.html` introduces reusable components, styles, tokens, rules, documentation and governance.
- `lesson-082-design-systems.html` provides a more applied system workflow involving tokens, components, patterns, documentation, governance and refactoring.

**Current role hypothesis:** foundation → applied practice. Preserve both.

### Design tokens
- `lesson-design-tokens.html` explains named reusable values and token categories.
- `lesson-083-design-tokens.html` adds semantic naming, primitive/semantic/component mapping, theme modes and controlled propagation.

**Current role hypothesis:** foundation → deeper implementation practice. Preserve both.

### Design handoff
- `lesson-design-handoff.html` covers flow, component states, responsive behaviour, interaction, content and accessibility considerations.
- `lesson-088-design-handoff.html` turns this into a practical handoff package and review loop.

**Current role hypothesis:** foundation → applied handoff practice. Preserve both.

### Design critique
- `lesson-design-critique.html` establishes evidence-based critique using observation → impact/evidence → principle/goal → action.
- The numbered design-critique/iteration unit is intended as a broader practice/rework capability.

**Current role hypothesis:** foundation → iterative critique/rework. Preserve both pending direct full-content comparison.

## Reconciliation principle established

The evidence supports a **layered curriculum model** in several areas:

**Foundation → Extension → Specialized Practice**

This is preferable to treating every related lesson as a duplicate.

A newer lesson may therefore:
- deepen an existing concept,
- specialize it for a context,
- convert it into practical tool work,
- add evidence/rework/validation,
- or combine several existing concepts into a capability exercise.

Only genuine content duplication should eventually be considered for consolidation.

## Current classification consequence

The curriculum should retain source lessons as separate physical knowledge units while allowing the curriculum layer to designate:
- **core foundation**
- **supporting/deepening**
- **specialized capability**
- **practice/rework**
- **overlap-candidate**
- **reference/template**

This gives the 17-bundle architecture enough flexibility without destroying historical or authored knowledge.

**Validation status:** representative older/newer relationships reviewed directly; layered relationships identified; final all-93 classification remains in progress.
