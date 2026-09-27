# HACHARA UI/UX Playground — Curriculum Bundle Master

## Purpose
This is the master curriculum layer for the Playground. Lessons are supporting learning units; **Bundles are the primary learning journey units**.

Existing lesson files must be preserved. A lesson may support one primary bundle and, where genuinely useful, be referenced as a supporting lesson elsewhere without duplicating the learner's progress.

## Learning model

**Learn → Understand → Analyse → Practice → Build in Figma/Framer → Submit evidence → UX/UI review → Rework → Validate → Reflect → Progress**

The learner is expected to make real design decisions and show the work. The system teaches principles and tools together rather than teaching software features in isolation.

## Bundle architecture

Each bundle contains:

1. Bundle objective
2. Required concepts
3. Lessons
4. Guided examples
5. Figma practice
6. Framer practice
7. Tool shortcuts / workflow tips
8. Challenge task
9. Screenshot/prototype submission
10. UX/UI principle review
11. Rework cycle
12. Validation checkpoint
13. Reflection
14. Bundle completion evidence

## Master bundles

### B01 — UX Foundations
Users, problems, goals, UX thinking, empathy, mental models, heuristics and foundational decision making.

### B02 — UI Foundations
Visual hierarchy, spacing, layout, grids, typography, colour, contrast, composition and interface consistency.

### B03 — User Research & Discovery
Research planning, interviews, observation, personas, empathy maps, journey maps, synthesis and insight framing.

### B04 — Information Architecture & User Flows
Content structure, navigation, taxonomy, IA, user flows, task flows and information relationships.

### B05 — Interaction Design
Affordances, feedback, states, forms, errors, empty/loading/success states, dialogs, notifications, motion and recovery.

### B06 — Wireframing & Prototyping
Low/mid/high fidelity wireframes, interaction models, prototypes, iteration and communicating design intent.

### B07 — Accessibility & Inclusive UX
Accessibility foundations, keyboard access, screen readers, forms, contrast, touch targets, cognitive accessibility, inclusive research, multilingual/RTL and inclusive responsive design.

### B08 — Responsive & Cross-Device UX
Responsive layouts, breakpoints, mobile/tablet/desktop behaviour, touch interaction and consistency across devices.

### B09 — Design Systems & Component Thinking
Design systems, tokens, component anatomy, states, variants, responsive components, documentation and governance.

### B10 — Usability Testing & UX Evaluation
Test planning, moderation, observation, findings, prioritisation, usability metrics, design critique and evidence-based iteration.

### B11 — UX Content & Communication
Content hierarchy, plain language, microcopy, content strategy, accessible language and UX writing decisions.

### B12 — UX Measurement & Product Analytics
UX metrics, measurement plans, task success, efficiency, adoption, qualitative evidence, guardrails and interpreting signals responsibly.

### B13 — Figma Industry Practice
Real Figma workflows: files/pages/frames, components, variants, auto layout, variables, prototyping, libraries, collaboration, handoff and practical shortcuts.

### B14 — Framer Industry Practice
Real Framer workflows: layout, components, responsive behaviour, interactions, breakpoints, CMS/content patterns, publishing and practical shortcuts.

### B15 — Design Review & Rework Studio
Learners submit screenshots/prototypes. The system checks hierarchy, spacing, typography, interaction, accessibility, consistency and UX principles; learner reworks and resubmits.

### B16 — Real Product Challenges
End-to-end product briefs requiring research → definition → IA → flows → wireframes → UI → prototype → testing → rework → evidence.

### B17 — Portfolio & Case Study
Turn completed challenges into structured case studies showing problem, evidence, decisions, iterations, validation and outcome.

## Tool-learning layer

Tool education is embedded across the curriculum rather than isolated from UX learning.

For relevant activities provide:

- Figma shortcut/workflow guidance
- Framer shortcut/workflow guidance
- macOS keyboard shortcuts
- Windows keyboard shortcuts
- iOS/iPad interaction guidance where applicable
- Android interaction guidance where applicable
- Tool-specific terminology
- Beginner-safe alternatives when shortcuts differ by platform/version

Shortcuts are supporting knowledge. The learner must understand **why** an interaction/design decision is appropriate, not merely which key combination performs it.

## Review loop

Every practical bundle should support:

**Task → Build → Screenshot/prototype → Review → Principle evidence → Specific guidance → Rework → Resubmit → Validate**

Review should identify:

- What works
- What principle is involved
- What needs improvement
- Why it matters to the user
- What the learner can try next
- What to validate after rework

Do not silently redesign the learner's work. Guidance should preserve learner ownership and encourage them to make the correction.

## Progress model

Track progress at three levels:

- **Lesson:** knowledge/practice completion
- **Bundle:** demonstrated capability
- **Studio/Challenge:** applied real-world capability

A learner should not be considered proficient merely because they opened or completed a lesson. Practical evidence is required for capability-oriented bundles.

## Existing-content rule

The repository contains legacy and newer lesson files, including numbered lessons and topic-named accessibility lessons. Do not delete, merge or renumber them solely from filenames.

The curriculum registry must eventually map every existing lesson to a bundle and mark it as:

- Core
- Supporting
- Overlap candidate
- Reference/template

Only after content comparison should duplicates be consolidated conceptually. Physical source files remain preserved unless the user explicitly asks for deletion.

## Current build direction

The immediate priority is to build the **bundle framework and practical learning experience**, then fill gaps inside bundles. Do not return to an isolated one-lesson-at-a-time workflow as the default.

### Next build priorities

1. Bundle navigation / master map
2. Bundle-level progress model
3. Figma + Framer practice layer
4. Screenshot/prototype submission workflow
5. UX/UI review and rework workflow
6. Platform shortcut reference layer
7. Bundle completion checkpoints
8. Map existing lessons into bundles
9. Fill genuine curriculum gaps

## Source-of-truth principle

`CURRICULUM-BUNDLE-MASTER.md` defines the learning architecture.

`LESSON-REGISTRY.md` tracks source lesson files.

The Academy UI should expose **Bundles first**, then Modules/Lessons, while still allowing direct access to individual lessons.
