# HACHARA UI/UX Playground — Lesson Overlap Reconciliation v1.0

## Purpose

This document records a content-level comparison of the known lesson overlap groups identified in the authoritative lesson registry.

This is a reconciliation/audit artifact, not a replacement source of truth.

## Rules applied

- Preserve every physical lesson file.
- Do not delete, merge, rename or rewrite lessons from filename similarity alone.
- Distinguish shared principles from distinct learning scope.
- Treat layered learning (foundation → extension → specialised practice) as intentional.
- Do not import content from other HACHARA projects.
- Where evidence is insufficient for a curriculum decision, mark the item for human review.

## Comparison results

### 1. Accessible Dialogs & Modals vs Accessible Dialogs & Overlays

**Files**
- lesson-accessible-dialogs-modals.html
- lesson-accessible-dialogs-overlays.html

**Shared concepts**
- temporary context
- purpose/title
- focus entry/management
- focus containment/boundary
- close/cancel
- return focus/context
- Figma/Framer audit and rework

**Meaningful difference**
- Dialogs & Modals is narrower and focuses on modal dialog lifecycle, including initial focus, focus containment, return focus and keyboard escape.
- Dialogs & Overlays broadens the interaction family to drawers, sheets and other overlays and adds destructive-action consequences and broader overlay context.

**Disposition**
PRESERVE BOTH. Treat the first as focused dialog/modal practice and the second as broader overlay-pattern coverage. Do not mark as duplicates.

---

### 2. Accessible Error Prevention & Recovery vs Accessible Error Recovery

**Files**
- lesson-accessible-error-prevention-recovery.html
- lesson-accessible-error-recovery.html

**Shared concepts**
- prevent avoidable errors
- explain problems
- preserve user work
- provide recovery
- confirm consequential actions

**Meaningful difference**
- Error Prevention & Recovery covers the complete lifecycle before, during and after an error: constraints, defaults, undo, confirmation, feedback and preservation.
- Error Recovery concentrates on post-error behaviour: locate the affected item, explain the problem, provide a correction path and confirm successful recovery.

**Disposition**
PRESERVE BOTH. Treat prevention/recovery as broader lifecycle learning and error recovery as focused recovery-state practice.

---

### 3. Accessible Forms vs Accessible Forms & Inputs vs Accessible Forms & Validation

**Files**
- lesson-accessible-forms.html
- lesson-accessible-forms-inputs.html
- lesson-accessible-forms-validation.html

**Shared concepts**
- labels
- instructions
- grouping
- validation/error handling
- focus
- preservation of entered information

**Meaningful difference**
- Accessible Forms provides broad end-to-end form accessibility coverage.
- Accessible Forms & Inputs emphasises field-level understanding, required/optional states, input relationships and recovery.
- Accessible Forms & Validation emphasises validation timing, error location, useful error messages and recovery.

**Disposition**
PRESERVE ALL THREE pending curriculum-level role mapping. They represent broad → input-focused → validation-focused layers. Do not collapse them solely because their examples overlap.

---

### 4. Accessible Navigation & Focus vs Accessible Navigation & Landmarks vs Accessible Navigation Patterns

**Files**
- lesson-accessible-navigation.html
- lesson-accessible-navigation-landmarks.html
- lesson-accessible-navigation-patterns.html

**Shared concepts**
- hierarchy
- labels
- current location
- predictable movement
- navigation accessibility

**Meaningful difference**
- Navigation & Focus emphasises keyboard movement, visible focus, skip paths and state.
- Navigation & Landmarks emphasises semantic page structure, headings, landmarks, consistent navigation and current location.
- Navigation Patterns focuses on selecting and designing specific patterns such as tabs, breadcrumbs, menus, pagination and search.

**Disposition**
PRESERVE ALL THREE. Map them as complementary accessibility/navigation layers rather than duplicates.

---

### 5. Cognitive Accessibility vs Designing for Cognitive Accessibility

**Files**
- lesson-cognitive-accessibility.html
- lesson-designing-for-cognitive-accessibility.html

**Shared concepts**
- cognitive load
- clarity
- consistency
- reducing unnecessary memory/inference
- preserving user effort

**Meaningful difference**
- Cognitive Accessibility is a compact earlier lesson focused on identifying memory/inference demands and redesigning three points in a flow.
- Designing for Cognitive Accessibility is a fuller lesson with clear language, predictability, chunking, progressive disclosure, forgiveness and feedback.

**Disposition**
PRESERVE BOTH. Treat the compact lesson as foundational awareness/practice and the fuller lesson as expanded design guidance.

**Human review**
Confirm final bundle/sequence placement when curriculum mapping is formalised.

---

### 6. Accessible Color & Contrast vs Color & Contrast

**Files**
- lesson-accessible-color-contrast.html
- lesson-color-contrast.html

**Shared concepts**
- contrast
- colour as a signal
- non-colour cues
- error/focus/interaction states

**Meaningful difference**
- Color & Contrast is positioned under UI/UX Foundations and introduces visual communication, hierarchy and reusable colour-state practice.
- Accessible Color & Contrast is positioned under Inclusive Design and expands the accessibility context: text/UI contrast, focus states, error states, non-colour cues and real-world contexts.

**Disposition**
PRESERVE BOTH. These are foundation and accessibility-specialisation layers, not confirmed duplicates.

---

### 7. Inclusive Responsive Design vs Responsive Design

**Files**
- lesson-inclusive-responsive-design.html
- lesson-responsive-design.html

**Shared concepts**
- responsive layout
- desktop/tablet/mobile
- content priority
- input context
- preserving task completion

**Meaningful difference**
- Responsive Design establishes general responsive principles and breakpoint/layout adaptation.
- Inclusive Responsive Design extends responsive thinking to zoom, text scaling, touch targets, orientation, keyboard/assistive technology and inclusive conditions.

**Disposition**
PRESERVE BOTH. Map the general lesson to responsive foundations and the inclusive lesson to accessibility/inclusive responsive capability.

---

### 8. Accessible Screen Reader Content vs Screen Reader UX Awareness

**Files**
- lesson-accessible-screen-reader-content.html
- lesson-screen-reader-ux.html

**Shared concepts**
- semantic structure
- headings
- landmarks
- meaningful names
- state information
- visual/semantic order

**Meaningful difference**
- Screen Reader UX Awareness is a compact awareness lesson with a short semantic map exercise.
- Accessible Screen Reader Content is a fuller structured lesson covering meaningful names, heading hierarchy, landmarks, concise labels, state information and reading order, followed by a content audit.

**Disposition**
PRESERVE BOTH. Treat the awareness lesson as introductory and the structured content lesson as deeper practical coverage.

---

## Overall reconciliation result

### Confirmed from content comparison

- No reviewed overlap group is safe to classify as a duplicate solely from filename/topic similarity.
- The repository intentionally contains layered learning.
- Several lessons differ by bundle context: UI/UX foundation, accessibility/inclusive extension, focused interaction practice or deeper validation.
- The current preservation rule is supported by the actual lesson content.

### Curriculum implication

The current evidence supports keeping the physical lesson inventory intact while assigning explicit curriculum roles:

**Foundation → Extension → Specialised Practice**

rather than deleting or merging files.

### Numbering rule

Do not create a new lesson number merely to resolve these overlaps.

Before adding the next lesson:
1. Map the existing physical lesson to its authoritative bundle/module role.
2. Record whether it is Core, Supporting, Overlap Candidate or Reference/Template.
3. Confirm that the proposed new topic is genuinely missing from the curriculum rather than already represented by an existing lesson.
4. Only then assign the next build sequence number.

## Human decision required

No destructive curriculum decision is required from this audit.

The evidence supports preservation and role-based mapping. A human decision is only required later if the curriculum owner wants to change bundle placement, merge learning objectives, or remove/rename physical lesson files.

## Validation status

**CONTENT COMPARISON:** VERIFIED for the 8 registry-defined overlap groups reviewed.

**FILES CHANGED:** None of the lesson files.

**CURRICULUM CHANGED:** No.

**LESSONS DELETED:** No.

**LESSONS MERGED:** No.

**NEW LESSON ADDED:** No.

**NEXT SAFE BUILD STEP:** Use this reconciliation to map the existing lesson inventory into the 17-bundle framework before adding another lesson.
