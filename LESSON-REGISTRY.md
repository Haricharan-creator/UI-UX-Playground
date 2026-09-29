# HACHARA UI/UX Playground — Authoritative Lesson Registry

**Registry status:** Reconciled against the `main` branch repository tree.

**File-level lesson count: 96 (current physical repository inventory)**

This registry separates the **number of lesson files that currently exist** from the **number of distinct curriculum topics**. No existing lesson file is deleted or overwritten by this reconciliation.

## Corrected count

The current repository tree contains **96 files matching the lesson-file rule**, giving a total of **96 physical lesson files**. The previous 63-file statement was an incomplete registry inventory, not the current repository total. The earlier 63-file inventory and its overlap notes are preserved below as historical reconciliation context.

## Existing lesson files

| # | Lesson file | Topic family | Registry note |
|---:|---|---|---|
| 1 | `lesson-accessibility-foundations.html` | Accessibility | Existing |
| 2 | `lesson-accessibility-testing-validation.html` | Accessibility | Existing |
| 3 | `lesson-accessibility.html` | Accessibility | Existing |
| 4 | `lesson-accessible-audio-media-controls.html` | Accessibility | Existing |
| 5 | `lesson-accessible-color-contrast.html` | Accessibility | Existing |
| 6 | `lesson-accessible-components-states.html` | Accessibility | Existing |
| 7 | `lesson-accessible-content-media.html` | Accessibility | Existing |
| 8 | `lesson-accessible-data-visualization.html` | Accessibility | Existing |
| 9 | `lesson-accessible-dialogs-modals.html` | Accessibility | Overlap candidate with dialogs/overlays; preserve both pending content audit |
| 10 | `lesson-accessible-dialogs-overlays.html` | Accessibility | Overlap candidate with dialogs/modals; preserve both pending content audit |
| 11 | `lesson-accessible-error-prevention-recovery.html` | Accessibility | Overlap candidate with error-recovery topic; preserve pending content audit |
| 12 | `lesson-accessible-error-recovery.html` | Accessibility | Overlap candidate with error-prevention-recovery; preserve pending content audit |
| 13 | `lesson-accessible-forms-inputs.html` | Accessibility | Existing |
| 14 | `lesson-accessible-forms-validation.html` | Accessibility | Existing |
| 15 | `lesson-accessible-forms.html` | Accessibility | Overlap candidate with forms/inputs and forms/validation; preserve pending content audit |
| 16 | `lesson-accessible-keyboard-navigation.html` | Accessibility | Existing |
| 17 | `lesson-accessible-mobile-touch-targets.html` | Accessibility | Existing |
| 18 | `lesson-accessible-motion-animation.html` | Accessibility | Existing |
| 19 | `lesson-accessible-multilingual-content.html` | Accessibility | Existing |
| 20 | `lesson-accessible-navigation-landmarks.html` | Accessibility | Overlap candidate with navigation/patterns; preserve pending content audit |
| 21 | `lesson-accessible-navigation-patterns.html` | Accessibility | Overlap candidate with navigation/landmarks and navigation; preserve pending content audit |
| 22 | `lesson-accessible-navigation.html` | Accessibility | Overlap candidate with navigation variants; preserve pending content audit |
| 23 | `lesson-accessible-notifications-status.html` | Accessibility | Existing |
| 24 | `lesson-accessible-screen-reader-content.html` | Accessibility | Existing |
| 25 | `lesson-accessible-search-and-filter.html` | Accessibility | Existing |
| 26 | `lesson-accessible-tables-data.html` | Accessibility | Existing |
| 27 | `lesson-accessible-typography-readability.html` | Accessibility | Existing |
| 28 | `lesson-cognitive-accessibility.html` | Accessibility | Existing |
| 29 | `lesson-color-contrast.html` | Visual / Accessibility | Overlap candidate with accessible-color-contrast; preserve pending content audit |
| 30 | `lesson-content-hierarchy.html` | Content / Visual | Existing |
| 31 | `lesson-content-strategy.html` | UX / Content | Existing |
| 32 | `lesson-design-critique.html` | Practice | Existing |
| 33 | `lesson-design-handoff.html` | Systems / Delivery | Existing |
| 34 | `lesson-design-systems.html` | Systems | Existing |
| 35 | `lesson-design-tokens.html` | Systems | Existing |
| 36 | `lesson-designing-for-cognitive-accessibility.html` | Accessibility | Overlap candidate with cognitive-accessibility; preserve pending content audit |
| 37 | `lesson-empathy-journey-mapping.html` | UX Research | Existing |
| 38 | `lesson-heuristics.html` | UX | Existing |
| 39 | `lesson-inclusive-design-foundations.html` | Inclusive Design | Existing |
| 40 | `lesson-inclusive-research-and-testing.html` | Inclusive Design | Existing |
| 41 | `lesson-inclusive-responsive-design.html` | Inclusive Design | Existing |
| 42 | `lesson-inclusive-ux-audit.html` | UX Audit | Existing |
| 43 | `lesson-information-architecture.html` | UX | Existing |
| 44 | `lesson-low-vision-design.html` | Accessibility | Existing |
| 45 | `lesson-microcopy.html` | Content | Existing |
| 46 | `lesson-motor-accessibility.html` | Accessibility | Existing |
| 47 | `lesson-neurodiversity-inclusive-ux.html` | Inclusive Design | Existing |
| 48 | `lesson-personas.html` | UX Research | Existing |
| 49 | `lesson-plain-language.html` | Content / Accessibility | Existing |
| 50 | `lesson-responsive-design.html` | Visual / Responsive | Overlap candidate with inclusive-responsive-design; preserve pending content audit |
| 51 | `lesson-screen-reader-ux.html` | Accessibility | Overlap candidate with accessible-screen-reader-content; preserve pending content audit |
| 52 | `lesson-spacing-layout.html` | Visual UI | Existing |
| 53 | `lesson-typography.html` | Visual UI | Existing |
| 54 | `lesson-usability-findings.html` | Usability | Existing |
| 55 | `lesson-usability-moderation.html` | Usability | Existing |
| 56 | `lesson-usability-prioritisation.html` | Usability | Existing |
| 57 | `lesson-usability-test-plan.html` | Usability | Existing |
| 58 | `lesson-usability-testing.html` | Usability | Existing |
| 59 | `lesson-user-flows.html` | UX | Existing |
| 60 | `lesson-user-research.html` | UX Research | Existing |
| 61 | `lesson-visual-hierarchy.html` | Visual UI | Existing |
| 62 | `lesson-wireframing.html` | UX / UI | Existing |
| 63 | `lesson.html` | Lesson template | Template/reference, not a uniquely named curriculum topic |

## Important distinction

**63 is the repository file count, not yet the deduplicated curriculum count.** Several filenames clearly cover closely related topics. Those files must remain intact until their actual content is compared.

### Known overlap groups to review

1. **Dialogs** — `accessible-dialogs-modals` ↔ `accessible-dialogs-overlays`
2. **Errors** — `accessible-error-prevention-recovery` ↔ `accessible-error-recovery`
3. **Forms** — `accessible-forms` ↔ `accessible-forms-inputs` ↔ `accessible-forms-validation`
4. **Navigation** — `accessible-navigation` ↔ `accessible-navigation-landmarks` ↔ `accessible-navigation-patterns`
5. **Cognitive accessibility** — `cognitive-accessibility` ↔ `designing-for-cognitive-accessibility`
6. **Contrast** — `accessible-color-contrast` ↔ `color-contrast`
7. **Responsive design** — `inclusive-responsive-design` ↔ `responsive-design`
8. **Screen readers** — `accessible-screen-reader-content` ↔ `screen-reader-ux`

These are **review candidates, not confirmed duplicates**. The registry intentionally does not delete, merge or declare a winner based only on filenames.

## New build numbering rule

From this point forward:

- **Repository count** = number of lesson files currently present.
- **Curriculum count** = number of distinct approved learning topics after content-level reconciliation.
- **Build sequence** = the next lesson actually added after reconciliation.
- A lesson is not counted twice merely because a topic has multiple supporting files.
- Existing files are preserved unless the user explicitly requests deletion/merging.

## Current build position

The most recently added lesson in the recent build sequence was **Accessible Dialogs & Modals**. The repository reconciliation shows that it is already one of the 63 existing lesson files.

**Next action:** perform a content-level comparison of the overlap groups, then establish the authoritative curriculum numbering before adding further lessons.


## Inventory reconciliation — 2026-09-29

A fresh read-only audit of the current `main` branch repository tree found **93 physical lesson files** matching the repository's lesson-file rule (files beginning with `lesson-` plus `lesson.html`). This supersedes the earlier 63-file inventory statement above as a **physical repository count only**.

**Important:** this does **not** establish 93 distinct curriculum topics. The curriculum-topic count remains **pending content-level reconciliation**. No lesson file has been deleted, merged, renamed, or rewritten as part of this inventory correction.

### Additional physical lesson files found

The following 30 lesson files were present in the current repository tree but were missing from the previous 63-file registry inventory:

| # | Lesson file | Topic family | Registry note |
|---:|---|---|---|
| 64 | `lesson-61-designing-for-older-adults.html` | Inclusive Design | Existing physical lesson; curriculum role pending reconciliation |
| 65 | `lesson-62-designing-for-children.html` | Inclusive Design | Existing physical lesson; curriculum role pending reconciliation |
| 66 | `lesson-63-designing-for-language-literacy.html` | Inclusive Design | Existing physical lesson; curriculum role pending reconciliation |
| 67 | `lesson-64-localization-internationalization.html` | Inclusive Design | Existing physical lesson; curriculum role pending reconciliation |
| 68 | `lesson-65-rtl-bidirectional-ux.html` | Inclusive Design | Existing physical lesson; curriculum role pending reconciliation |
| 69 | `lesson-66-responsive-accessible-layouts.html` | Accessibility / Responsive | Existing physical lesson; curriculum role pending reconciliation |
| 70 | `lesson-67-touch-targets-mobile-ux.html` | Accessibility / Mobile | Existing physical lesson; curriculum role pending reconciliation |
| 71 | `lesson-68-voice-conversational-accessibility.html` | Accessibility | Existing physical lesson; curriculum role pending reconciliation |
| 72 | `lesson-69-multimodal-accessibility.html` | Accessibility | Existing physical lesson; curriculum role pending reconciliation |
| 73 | `lesson-70-accessibility-design-review.html` | Accessibility | Existing physical lesson; curriculum role pending reconciliation |
| 74 | `lesson-71-designing-for-stress-and-uncertainty.html` | UX / Inclusive Design | Existing physical lesson; curriculum role pending reconciliation |
| 75 | `lesson-72-progressive-disclosure.html` | Interaction Design | Existing physical lesson; curriculum role pending reconciliation |
| 76 | `lesson-73-empty-loading-success-states.html` | Interaction Design | Existing physical lesson; curriculum role pending reconciliation |
| 77 | `lesson-74-designing-for-recovery.html` | Interaction Design | Existing physical lesson; curriculum role pending reconciliation |
| 78 | `lesson-75-feedback-and-system-status.html` | Interaction Design | Existing physical lesson; curriculum role pending reconciliation |
| 79 | `lesson-76-designing-for-interruption-and-resumption.html` | Interaction Design | Existing physical lesson; curriculum role pending reconciliation |
| 80 | `lesson-77-mobile-contexts-and-gestures.html` | Interaction / Mobile | Existing physical lesson; curriculum role pending reconciliation |
| 81 | `lesson-78-data-entry-efficiency.html` | Interaction Design | Existing physical lesson; curriculum role pending reconciliation |
| 82 | `lesson-79-search-discovery-and-findability.html` | UX / Interaction | Existing physical lesson; curriculum role pending reconciliation |
| 83 | `lesson-80-design-critique-and-iteration.html` | Practice | Existing physical lesson; curriculum role pending reconciliation |
| 84 | `lesson-081-ux-content-strategy.html` | UX Content | Existing physical lesson; curriculum role pending reconciliation |
| 85 | `lesson-082-design-systems.html` | Design Systems | Existing physical lesson; curriculum role pending reconciliation |
| 86 | `lesson-083-design-tokens.html` | Design Systems | Existing physical lesson; curriculum role pending reconciliation |
| 87 | `lesson-084-component-anatomy.html` | Design Systems | Existing physical lesson; curriculum role pending reconciliation |
| 88 | `lesson-085-component-states.html` | Design Systems | Existing physical lesson; curriculum role pending reconciliation |
| 89 | `lesson-086-responsive-components.html` | Design Systems / Responsive | Existing physical lesson; curriculum role pending reconciliation |
| 90 | `lesson-087-component-documentation.html` | Design Systems | Existing physical lesson; curriculum role pending reconciliation |
| 91 | `lesson-088-design-handoff.html` | Systems / Delivery | Existing physical lesson; curriculum role pending reconciliation |
| 92 | `lesson-089-design-qa.html` | Design QA | Existing physical lesson; curriculum role pending reconciliation |
| 93 | `lesson-090-ux-metrics.html` | UX Measurement | Existing physical lesson; curriculum role pending reconciliation |
| 94 | `lesson-091-ux-metrics-and-measurement.html` | UX Measurement | Overlap candidate with UX metrics; preserve pending content audit |
| 95 | `lesson-092-usability-testing-metrics.html` | Usability / Measurement | Existing physical lesson; curriculum role pending reconciliation |
| 96 | `lesson-designing-for-empty-loading-and-error-states.html` | Interaction / States | Existing physical lesson; curriculum role pending reconciliation |

**Registry numbering note:** the numbers in this table are registry-row numbers for the newly added inventory entries, not curriculum lesson numbers. The filenames themselves contain historical/sequence numbers that must not be treated as the final curriculum numbering.

### Physical inventory rule

The authoritative physical inventory is now **96 lesson files**. The earlier 63-file statement remains useful as historical registry state but is no longer the current repository count.

The distinction remains:

- **Repository count:** 96 physical lesson files currently present.
- **Curriculum count:** not yet finalized; requires content-level reconciliation.
- **Build sequence:** not inferred from filenames.
- **Existing content:** preserved.
- **Overlap candidates:** reviewed as candidates only; no automatic merging or deletion.
- **Multiple lesson generations:** retained as physical content until their curriculum role is established.

### Content-level audit status

The first content-level audit confirms that the repository contains multiple lesson generations and several genuine topic-overlap families. Related filenames alone are insufficient to declare duplicates. The next reconciliation step is therefore to classify each physical lesson as **core, supporting, overlap-candidate, reference-template, or unmapped**, with stable source references, before populating final Bundle → Module → Lesson mappings.

**Validation status:** physical inventory reconciled against the current repository tree; curriculum-topic reconciliation remains in progress.
