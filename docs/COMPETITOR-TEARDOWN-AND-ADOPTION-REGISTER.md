# HACHARA Competitor Teardown & Adoption Register
Version: 0.1 — public-source research baseline
Status: Partial research; not a completed authenticated, screen-by-screen teardown
Date: 2026-10-26

## Purpose and evidence discipline
Compare teaching methods, curriculum/IA, learner UX, workflows, exercises, practice, feedback, assessment, progress, portfolio outputs, distinctive ideas, and reusable implementation resources. Separate verified public-page claims from analysis and from HACHARA implementation status. Do not copy paid lesson content, proprietary assets, or unlicensed code. Do not claim full teardown until evidence and interaction inventories are captured for every platform.

## Competitor 1 — Skillshare
Sources: https://help.skillshare.com/hc/en-us/articles/4416716119949-How-Learning-on-Skillshare-Works ; https://help.skillshare.com/hc/en-us/articles/4416715720077-Craft-Your-Class-Project
Verified teaching pattern: short, focused video segments; classes with a clear value proposition; a required class project; project galleries and discussion/community feedback. Official guidance says projects should encourage independent thinking rather than merely copy a step-by-step tutorial.
IA/workflow known from public descriptions: discover class → watch focused lessons → create project → share and receive feedback. Full visual IA, player controls, progress/resume states, logged-in interactions and mobile states are NOT YET INSPECTED.
Distinctive idea to adapt: short concept-focused lesson chunks plus a learner-owned deliverable and reflection/share step. Show the expected outcome early.
HACHARA action: lesson contract containing outcome, why it matters, worked example, short practice, independent challenge, evidence to submit and reflection. Split complex projects into checkpoints. Community features require a separate scope decision.
Reusable code/assets: none identified; reuse the teaching pattern, not protected content. Further capture: browse filters, class page hierarchy, player, submission, feedback, progress and error/empty states.

## Competitor 2 — Coursera UI/UX Design Specialization
Source: https://www.coursera.org/specializations/ui-ux-design
Verified teaching pattern: four-course beginner specialization covering research, strategy/scope, information architecture, sitemaps, wireframes, visual mockups and prototypes. Public page describes visual/non-visual exercises and a simulated interactive prototype plus a plan for a complex website.
IA/workflow known: staged progression from research/strategy through architecture and visual design. Exact module UI, quiz feedback, assessment rubrics, saved progress and logged-in interactions are NOT YET INSPECTED.
Distinctive idea to adapt: connect individual exercises to a cumulative project and final deliverable.
HACHARA action: preserve existing 17 bundles and lesson registry; make prerequisites, outcomes, estimated effort, evidence, rubric and next step clearer. Map lessons to artifacts without renumbering or restructuring the curriculum.
Reusable code/assets: none identified. Further capture: module hierarchy, assignment prompts, assessment/peer feedback, rubrics and resume behaviour.

## Competitor 3 — Great Learning Academy UI/UX
Source: https://www.mygreatlearning.com/academy/learn-for-free/courses/ui-ux
Status: required competitor identified; a detailed lesson-level interaction inventory and exact current assessment flow have not yet been captured. Do not present generic expectations as verified platform features.
Next inspection questions: How are level, duration, outcomes and access presented? How is the syllabus navigated? Which topics use examples, quizzes, exercises or downloads? What happens on completion? How are certificates, saved progress and next courses shown?
Potential HACHARA adoption candidates pending verification: low-friction beginner entry, clear course outcomes, compact learning units and transparent completion requirements.

## Competitor 4 — Codecademy Introduction to UI and UX Design
Source: https://www.codecademy.com/learn/intro-to-ui-ux
Verified teaching pattern: public page describes a beginner course of about two hours, three lessons, two projects and three quizzes. Covers design lifecycle/Double Diamond/Design Thinking, low-fidelity wireframes, and converting wireframes into high-fidelity interactive Figma prototypes. Project examples include a wireframe brief and prototype project.
IA/workflow known: the course page exposes skill level, duration, lesson/project/quiz counts, prerequisites and outcomes. The progression connects theory to wireframe then interactive prototype. Exact in-lesson UI, hints, evaluator, feedback and persistence are NOT YET INSPECTED.
Distinctive idea to adapt: specific project requirements and a progression from low-fidelity to higher-fidelity output; quizzes test understanding while projects demonstrate application.
HACHARA action: make practice handoffs specify objective, constraints, success criteria and deliverable; link lessons to Studio and Review/Rework; support staged draft → review → revision where existing architecture permits.
Reusable code/assets: none identified. Further capture: project instructions, editor interaction, hints, quiz feedback, validation and completion screens.

## Competitor 5 — GRRAS UI/UX Design & Front-End Integration
Source: https://grras.com/course/ui-ux-design-training-and-certification-course/
Verified public positioning: a four-month program describing a design-to-development pipeline, research, wireframing, prototyping, usability testing, practical projects, weekly tests, mentorship, portfolio, interview preparation and career support. Multiple learning modes are advertised.
IA/UX known: public page is strongly career and program-outcome oriented. Student portal, lesson interactions, grading, mentor feedback UI and portfolio submission are NOT YET INSPECTED.
Distinctive idea to adapt: connect project assessment to professional deliverables with transparent rubrics and review checkpoints.
HACHARA action: project brief + rubric + review checklist + portfolio case-study output. Live mentors, hiring partnerships and placement assistance are service operations, not features a UI change can reproduce.
Reusable code/assets: none identified. Further capture: current syllabus/brochure, project rubrics, actual student portal, and separation of advertised services from self-guided functionality.

## Competitor 6 — UX UI Open
Sources: https://www.uxuiopen.com/ ; https://www.uxuiopen.com/curriculum ; https://www.uxuiopen.com/learn-ui-design ; https://www.uxuiopen.com/learn-ux-design
Verified teaching pattern: public site describes 25 units grouped into five parts, with projects across the curriculum. Explicit AI loop: generate options → learner judges which is good and why → refine in Figma. UI topics include typography, colour, layout/hierarchy, component states, design systems/tokens, accessibility and critique of AI-generated screens. A demonstrated button exercise covers default, hover, pressed, focus, disabled and loading. UX topics include research, synthesis, IA/flows, ideation, prototyping/testing and case-study presentation.
IA/UX known: curriculum page exposes units and sections as a learning map; concepts are tied to screen/design exercises. Full account progress, assessment mechanics and logged-in UI are NOT YET INSPECTED.
Distinctive idea to adapt: teach judgement, not just production; compare options, explain why, refine and verify. Teach all meaningful component states.
HACHARA action: critique against hierarchy, contrast, task clarity, accessibility, responsiveness and state coverage. Ask learners to justify decisions rather than accept AI output. Build on the existing Studio → Review → Rework → Validate workflow.
Reusable code/assets: none identified. Further capture: one representative lesson and exercise end-to-end, expected submission, AI guidance, feedback, progress and mobile experience.

## Additional reference systems (not direct course-platform competitors)
- Figma Auto Layout: https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout-in-Figma
- Apple Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Radix Primitives: https://www.radix-ui.com/primitives (React-based; not a drop-in for current multi-page vanilla HTML/JS)
- shadcn/ui: https://github.com/shadcn-ui/ui (MIT-licensed, React ecosystem; evaluate compatibility before adoption)
Use standards as teaching/review references, not as a substitute for hands-on competitor inspection.

## Cross-competitor patterns worth testing in HACHARA
1. Clear lesson contract: learner, goal, why it matters, effort, deliverable and success criteria.
2. Short teaching segments: one concept at a time, tied to example and practice.
3. Worked example → independent challenge.
4. Cumulative project path: exercises build toward a coherent case study.
5. Explicit feedback and iteration: evidence, criteria, prioritized findings, revision and re-validation.
6. Judgement over AI dependency: generate, critique, explain, refine, verify.
7. Component-state literacy: default, hover, focus, pressed, disabled, loading, error and success.
8. Evidence-based progress: distinguish viewed, attempted, submitted, reviewed and validated; never present sample metrics as actual user progress.
9. Discoverability: topic, difficulty, duration, tool, output and prerequisites.
10. Accessible responsive interaction: keyboard, focus, contrast, reflow, touch targets and loading/error/empty states.

## HACHARA protection constraints
- Preserve Classic Workspace index.html as functional baseline and Modern Workspace modern.html as alternative presentation layer.
- Preserve 17 bundles and 96 physical lesson files (95 curriculum units + one reference/template); do not renumber, merge or delete lessons without explicit approval.
- Preserve the learning loop: Learn → Understand → Analyse → Practice → Build → Submit → Review → Rework → Validate → Reflect → Progress.
- Do not implement competitor-inspired features until mapped to existing functionality and regression-tested.
- Automated viewport checks do not establish physical iPhone/iPad/Android visual acceptance.

## Proposed adoption backlog (not yet implemented)
### P0 — verify existing journey
Test Academy/catalog → lesson → practice handoff → Studio → Review → Rework → Resubmit → Validate → Progress. Verify saved state/reload/resume, navigation, empty/error states and responsive layouts; capture browser evidence.
### P1 — lesson contract and discoverability
Standardise outcomes, deliverables and criteria; verify registry metadata before adding fields; add filters only where data supports them; ensure practice opens the correct workflow and preserves context.
### P1 — review/rework quality
Standardise review criteria, severity, evidence, recommendation and validation status. Preserve before/after artifacts and unresolved findings. Do not present unverified AI feedback as fact.
### P2 — trustworthy progress
Audit storage/source of truth; derive metrics from saved evidence; distinguish demo values from real progress; test refresh, cross-page persistence and reset semantics.
### P2 — interactive design-state exercise
Pilot one existing lesson without changing curriculum structure; cover component states, contrast, hierarchy, responsiveness and accessibility; test keyboard/focus and mobile behaviour.
### P3 — community/mentor feedback
Consider only after core journey reliability and after scope, moderation, privacy and backend support are defined.

## Completion checklist for a full teardown
- [ ] Public overview captured for all six competitors
- [ ] IA map: browse/catalog → course → lesson → exercise → assessment → progress
- [ ] Teaching method and lesson structure
- [ ] UI inventory and screenshots/notes
- [ ] UX workflow and navigation states
- [ ] Exercise and practice examples
- [ ] Feedback/assessment model
- [ ] Progress/resume model
- [ ] Distinctive ideas separated from generic patterns
- [ ] HACHARA gaps mapped to actual files/features
- [ ] Reuse/licence check for each code or asset candidate
- [ ] Recommendation with testable acceptance criteria

Current completion: partial public-source baseline. Authenticated screen-by-screen teardown and code/licence-level reuse audit remain open.