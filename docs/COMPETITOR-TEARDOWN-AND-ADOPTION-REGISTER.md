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

## Competitor 3 — Great Learning Academy (expanded public-page inspection)
Additional sources:
- https://www.mygreatlearning.com/academy/learn-for-free/courses/ui-ux
- https://www.mygreatlearning.com/academy/learn-for-free/courses/figma-for-ui-ux-design
- https://www.mygreatlearning.com/ux-design/free-courses

Verified public-page details:
- The UI/UX for Beginners course is labelled beginner level and is advertised as approximately 3.0 learning hours on the course page (other Great Learning catalog surfaces display 2 hours; duration labels are inconsistent across public surfaces and should be verified after enrollment rather than silently reconciled).
- The course page advertises free access to course content, skill quizzes, and a completion certificate subject to a certificate fee. It says the full curriculum is available after enrollment.
- The visible outline has four broad modules: (1) Design Thinking and Research Foundations, including frameworks, surveys and NPS; (2) Understanding Your Users, including personas and empathy maps; (3) Designing the Experience, including user flows, wireframes and prototypes; and (4) Testing and Measuring UX, including usability tests and UX metrics.
- The page promotes beginner entry, instructor attribution, learner counts/ratings, skill outcomes and a next-step path. The separate Figma course page describes exercises including onboarding-flow design, logo creation and homepage redesign, but these belong to that separate course and must not be attributed to the UI/UX for Beginners course.
- Public page states that course content can be revisited; authenticated persistence, actual player navigation, quiz grading, lesson completion rules and resume states remain unverified.

Analysis/inference (not a verified in-course observation):
- The four-part sequence offers a compact end-to-end mental model: frame the problem → understand people → design a flow/prototype → test and measure.
- The course's concise module outline and beginner positioning could inform a clearer HACHARA course overview, but HACHARA should retain richer practice/rework/validation and evidence-linked outcomes rather than reduce the curriculum to four headings.
- The inconsistency between 2-hour and 3-hour public labels is itself a discoverability/trust lesson: HACHARA should have one source of truth for lesson and bundle effort estimates.

Still unknown:
- Exact videos/lesson sequence and length; in-lesson visual design; quiz question types and explanations; whether hands-on work is submitted or self-evaluated; grading; certificate eligibility details after enrollment; actual progress/resume and mobile interaction. No logged-in course screens were inspected.

## Cross-competitor comparison — verified scope, not a ranking
| Platform | Publicly evidenced learning mechanism | Publicly evidenced practice/output | Feedback / progress evidence | Important unknown |
|---|---|---|---|---|
| Skillshare | Short, focused lesson segments; one concept per lesson encouraged | Class project; lightweight or staged projects encouraged | Project Gallery and instructor/community feedback guidance | Actual player and saved-progress UI |
| Coursera UI/UX specialization | Four-course staged learning sequence | Visual/non-visual exercises, wireframes, mockups, prototype and complex-site plan | Course page states applied learning; detailed assessment flow not captured | Authenticated grading, rubrics, peer review UI |
| Great Learning Academy | Four broad modules from research to testing/metrics | Course page mentions examples; separate Figma course lists onboarding, logo and homepage exercises | Quizzes advertised; completion certificate fee disclosed | Exact lesson, quiz and resume experience |
| Codecademy | Beginner course: three lessons; theory → wireframes → Figma prototype | Two named Ridgeline projects and three quizzes | Quiz presence is verified; evaluator behaviour unknown | In-lesson hints, validation and feedback |
| GRRAS | Four-month design-to-development program; weekly tests advertised | Hands-on projects and assignments | Weekly performance tracking and mentorship advertised | Student portal and real review/grading UI |
| UX UI Open | 25 units in five parts; AI generates → learner judges → refines | Projects throughout; component states, design system, research, flows and testing | Curriculum and roadmap are public; account persistence is advertised on free-course page | Logged-in assessment mechanics and mobile UI |

## Reusable code and assets audit — current result
No competitor-specific code or assets have been verified as safe to copy or integrate. The public pages support adoption of learning principles, not a claim that their source code is available for reuse. Do not scrape lesson videos, copy course text, reproduce proprietary graphics, or reuse paid course material.
Potentially relevant *separate reference libraries* are not competitors' code:
- Radix Primitives: React-oriented accessible primitives; technical fit is low without an approved framework change.
- shadcn/ui: MIT license, React/Tailwind ecosystem; individual source components and dependencies still require a compatibility/license review before use.
- WCAG 2.2, Apple HIG and Figma Auto Layout guidance: standards/documentation for design and acceptance criteria, not plug-in implementation code.
Before any third-party code is adopted, record repository/package, exact component, license file/version, copyright notices, dependencies, security/maintenance status, framework fit, modifications and attribution obligations. Until then: adopt patterns, not code.

## Implementation mapping and acceptance criteria (proposed; not yet implemented)
| Candidate | HACHARA surface to inspect first | Acceptance criteria before calling it done |
|---|---|---|
| Lesson contract and expected outcome | Academy/catalog and physical lesson files | Each sampled lesson exposes objective, context, example, action, deliverable, criteria and next step; no curriculum renumbering or file removal |
| Short lesson + one practice action | Lesson template/content registry | A learner can identify one key concept and complete one small practice without losing the larger lesson context |
| Cumulative project checkpoints | Studio, Review, project/bundle dashboard | Each checkpoint links to prior evidence; resubmission preserves earlier version and open findings |
| Rubric/evidence-based feedback | Review and Rework workflow | Every finding has evidence, severity/priority, actionable recommendation and validation outcome; no unsupported claim presented as fact |
| Transparent progress | Progress page and storage model | Counts derive from persisted learner events; viewed/attempted/submitted/reviewed/validated are distinct; reload/resume and reset tested |
| Component-state exercise | Existing lesson mapped to Studio/Review | Learner checks default, hover, focus, pressed, disabled, loading, error/success where applicable; keyboard/focus and responsive behaviour tested |
| Beginner course discovery | Catalog and bundle overview | Level, effort, prerequisites, tools and deliverables come from a single validated data source |
| Share/community | No implementation surface selected | Do not build until privacy, moderation, access control, persistence and operational ownership are designed |

## Evidence and confidence labels
- **Verified public page/help documentation:** explicitly described on a cited public source.
- **Analysis/inference:** design implication derived from verified information; useful hypothesis, not a competitor feature claim.
- **Not inspected:** paid/authenticated or interaction-level behaviour that has not been observed directly.
- **Not a code-reuse candidate:** no exact repository, license and technical compatibility review completed.

## Next inspection pass
1. Capture the public page and, where accessible without account access, the visible course/lesson preview for each platform.
2. Record screenshots/notes for catalog, course overview, lesson, practice, assessment, completion and resume; mark inaccessible screens rather than guessing.
3. Capture one representative exercise prompt per platform verbatim only in short, necessary excerpts; otherwise paraphrase and link to the source.
4. Validate HACHARA's actual files and data model before marking any proposed mapping as an existing capability.
5. Add a separate adoption decision record after evidence collection: adopt / adapt / defer / reject, owner, dependencies, test and rollback plan.

## Updated status
Great Learning's public course overview is now researched to a more specific level. This expands the public-source baseline, but **does not close the full teardown checklist**. Authenticated course interactions, screen-by-screen UI inventory, HACHARA code-level gap mapping and a third-party code/license audit remain open.
