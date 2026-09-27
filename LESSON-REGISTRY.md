# HACHARA UI/UX Playground — Authoritative Lesson Registry

**Registry status:** Reconciled against the `main` branch repository tree.

**File-level lesson count: 63**

This registry separates the **number of lesson files that currently exist** from the **number of distinct curriculum topics**. No existing lesson file is deleted or overwritten by this reconciliation.

## Corrected count

The repository currently contains **63 files whose names begin with `lesson-` plus `lesson.html`**, giving a total of **63 lesson files**. The previous conversational counter of 45 was a sequential build counter, not the repository total.

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
