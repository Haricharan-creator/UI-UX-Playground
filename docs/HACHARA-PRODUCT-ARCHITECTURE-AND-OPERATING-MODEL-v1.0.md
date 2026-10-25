# HACHARA Product Architecture & Operating Model v1.0

**Status:** Draft architecture synthesis based on current repository contracts; verify runtime before treating implementation mappings as proven.  
**Product:** UI UX Playground — HACHARA  
**Source of truth:** `Haricharan-creator/UI-UX-Playground`  
**Architecture baseline:** `docs/HACHARA-ARCHITECTURE-LOCK-v1.0.md`, `docs/HACHARA-OUTPUT-CONTRACT-v1.0.md`, `docs/HACHARA-SAFE-BENCHMARK-v1.1.md`, `docs/REPOSITORY-SOURCE-OF-TRUTH-v1.0.md`

## 1. Product intent
HACHARA is a practice-first UI/UX learning and product-building environment. It must connect knowledge to deliberate practice, evidence, critique, rework, validation and capability growth. It is not only a video/course catalog, a design tool, or an automated critique bot.

**Product promise:** help a learner move from understanding a UX/UI principle to applying it to a real interface, explaining design decisions, testing the result, improving it and presenting credible evidence of capability.

**Methodology:** Learn + Think + Ideate + Develop + Test + Rework + Build + Share.  
**Primary learner loop:** Learn → Understand → Analyse → Practice → Build → Submit → Review → Rework → Validate → Reflect → Progress.

## 2. Non-negotiable guardrails
1. Preserve `index.html` as the Classic Workspace functional baseline and `modern.html` as an alternative presentation layer.
2. Preserve the 17-bundle learning architecture and current physical lesson inventory: 96 lesson files (95 curriculum units + `lesson.html` reference/template). File count is not a count of unique topics or validated capability.
3. Do not delete, merge, renumber or silently rewrite existing lessons.
4. `CURRICULUM-BUNDLE-MASTER.md` defines bundle architecture; `LESSON-REGISTRY.md` inventories physical lesson files; mappings remain uncertain where explicitly marked.
5. Learner work is never silently replaced. Preserve V1; record V2 changes and rationale.
6. Separate observation, evidence, interpretation, recommendation and inference.
7. Automate repeatable inventory, validation, reporting and scaffolding; require human approval for destructive changes and consequential/ambiguous learning decisions.
8. The Grammar Playbook is a separate product; do not import its curriculum or counts.
9. Automated viewport checks do not equal physical iPhone/iPad/Android acceptance.

## 3. Layered architecture
| Layer | Responsibility | Primary artifacts / candidates | Invariants |
|---|---|---|---|
| Experience/presentation | Classic/Modern workspaces, responsive screens, navigation | `index.html`, `modern.html`, `ui-options.html` | Two presentation options, one product |
| Discovery/navigation | Find bundles, lessons, tools and next action | `academy-lesson-catalog.html`, `academy.html`, bundle dashboards | Routes must preserve task context |
| Curriculum/content | Bundles, modules, lessons, examples and prerequisites | `CURRICULUM-BUNDLE-MASTER.md`, `LESSON-REGISTRY.md`, lesson HTML, curriculum manifest | No duplicate authority in page markup |
| Practice/project | Challenges, real product work, Figma/Framer/tool tasks | `studio.html`, `tool-practice.html`, project/bundle pages | Practice has a brief and an observable output |
| Evidence/artifacts | Links, screenshots, prototypes, notes, tests, before/after, reflection | Evidence records and project context; verify exact storage implementation | Evidence points to learner work and version |
| Review | Structured critique and findings | `review.html`, `data/review-rubric.json` | Required evidence, confidence, impact and recommendation |
| Rework/versioning | V1 → feedback → V2 → change rationale | Review workflow and before/after records | V1 preserved; changes traceable |
| Workflow/state | Allowed transitions and transition guards | `data/workflow-state-machine.json` | No skipping evidence/review/rework/validation gates |
| Progress/capability | Lesson, evidence, skill, bundle and capability states | `progress.html`, `data/progress-model.json` | Progress means demonstrated capability, not page views |
| Tool integration | External design/build tools and platform guidance | Tool Training, Tool Practice, Figma/Framer links | External tools do not silently become source of truth |
| Automation/quality | Inventory, mapping, validation, regression, consistency and reporting | scripts/tests, `.github/workflows/`, automation playbook | Repeatable checks; human approval for destructive operations |
| Portfolio/share | Case studies, handoff and presentation | Project/portfolio surfaces (runtime scope to verify) | Learner controls what is shared |

**Important:** this is a logical architecture map grounded in repository contracts. It is not proof that each layer is fully implemented, integrated, persisted or production-ready.

## 4. Source-of-truth hierarchy
1. Architecture and lock index: boundaries and protected decisions.
2. Curriculum master + manifest: bundles and intended learning structure.
3. Lesson registry + actual lesson files: physical lesson inventory and source content.
4. JSON contracts: state machine, progress model, review rubric, mapping policies.
5. Application pages and scripts: current behaviour, to be verified through tests.
6. Tests/CI: evidence for only the assertions they actually run.
7. Research registers: external pattern evidence and adoption proposals.
8. Personas/journey documents: hypotheses until validated with real users.

When two sources conflict: stop and record the conflict; do not silently select the convenient version. Follow the source-of-truth and contract-consistency audit.

## 5. Domain entities (conceptual data model)
- **Learner:** goals, experience level, constraints, preferences and consented accessibility needs.
- **Bundle / Module / Lesson:** stable identifiers, outcomes, prerequisites, content references and status.
- **Skill/Capability:** observable capability, criteria and required evidence.
- **Challenge/Task:** scenario, user need, constraints, instructions, output and success criteria.
- **Project:** product context, target audience, scope, current phase and decisions.
- **Artifact/Submission:** artifact type, URL/file/reference, version, created date, relation to task and privacy setting.
- **Review/ Finding:** rubric dimension, severity, confidence, evidence, principle, impact, recommendation and status.
- **Rework/Change:** accepted finding, proposed change, rationale, V1/V2 references and test result.
- **Validation:** criterion, method, expected/observed result, evidence, decision and reviewer.
- **Progress event:** learner action, entity, state transition, timestamp, evidence link and source.
- **Decision log:** decision, alternatives, rationale, evidence, owner and review date.

These are conceptual entities, not a claim that every entity currently has a normalized database or API.

## 6. Canonical workflow state contract
Current `data/workflow-state-machine.json` lists:
`not-started → in-progress → submitted → under-review → (needs-rework → resubmitted → under-review) or ready-for-validation → validated`.
Transition guards require evidence at submission, review context, preserved V1 and recorded V2 changes on resubmission, resolved/explicitly accepted findings before validation, and satisfied validation criteria. The active contract has no outgoing transition from validated. If a real learner needs to reopen validated work, design a versioned reopening policy instead of bypassing the state machine.

## 7. Key product flows
### Learning flow
Discover → choose bundle/lesson → understand outcome/prerequisites → learn with example → attempt practice → capture evidence → reflect → next lesson/challenge.

### Project workflow
Set context → define target user/problem → map journey/task → ideate → create flow/IA → design/build → submit evidence → review → rework → test → validate → document case study → share by choice.

### Review/rework flow
Select artifact/version → choose rubric dimension → record observation + evidence → label confidence and severity → explain impact/principle → recommend change → learner accepts/adjusts/disputes → implement V2 → compare V1/V2 → test → resolve finding or record accepted exception → validate.

### Recovery/resume flow
Persist a meaningful checkpoint → return to workspace → show last completed step and pending action → restore project/lesson context → confirm unsaved/expired state where relevant → continue without losing earlier evidence. Actual persistence behaviour must be verified.

## 8. Cross-cutting requirements
- **Accessibility:** semantic HTML, keyboard reachability, visible focus, sufficient contrast, error association, touch target adequacy and reduced-motion consideration.
- **Responsive:** reflow without horizontal overflow; task-critical actions remain discoverable at narrow widths.
- **Trust:** label illustrative/demo data; no fabricated progress or AI certainty.
- **Privacy:** explicit control over shared artifacts; minimize personal data; avoid publishing private research notes by default.
- **Explainability:** explain why a review finding matters and which evidence supports it.
- **Versioning:** preserve original artifacts, record change rationale and validation evidence.
- **Performance/reliability:** graceful empty/error/loading states, predictable links, resilient local persistence and export/backup plan.
- **Maintainability:** content, data contracts, UI and workflow logic remain separable.

## 9. System boundaries and integrations
- Figma/Framer are practice/build tools, not automatically HACHARA's authoritative curriculum or progress store.
- GitHub repository is the implementation/documentation source of truth.
- Browser localStorage usage exists in at least some scripts; do not assume cross-device sync, server persistence, authentication or backup.
- No backend, account system, cloud sync, AI-review guarantee or community moderation capability should be claimed without implementation evidence.
- Any new framework/library must pass license, dependency, architecture-fit and regression review.

## 10. Non-functional quality gates
1. No curriculum loss or identifier/route breakage.
2. Core learning loop tested at desktop and narrow viewport.
3. Keyboard-only path through all critical actions.
4. Workflow transitions tested against the JSON state machine.
5. Persistence tested across refresh, navigation and recovery; cross-device behaviour explicitly documented as supported/not supported.
6. Progress values traced to saved evidence/events; illustrative data labelled.
7. Review finding schema validated, with evidence and confidence.
8. V1/V2 comparison and validation are traceable.
9. Browser smoke + integration + curriculum + benchmark protection tests pass.
10. Manual device acceptance recorded separately.

## 11. Decisions required before large-scale implementation
- Is the intended learner primarily self-directed beginner, transitioning designer, or mixed audience? Current persona document is a hypothesis.
- Which progress events are authoritative and where are they stored?
- What constitutes required evidence per skill and bundle?
- Which review actions can be automated vs require human review?
- Is collaboration/community in scope now or later?
- What are privacy and retention defaults for projects/evidence?
- What are the export/backup and cross-device requirements?

## 12. Acceptance checklist
- [ ] Logical architecture and source-of-truth hierarchy reviewed against current code.
- [ ] Every key user journey maps to actual page/route and data contract.
- [ ] Each workflow transition has positive and negative tests.
- [ ] Persistence/resume behaviour documented from runtime observation.
- [ ] Persona and journey hypotheses validated with representative learners.
- [ ] All adoption changes linked to a measured gap, owner, acceptance criteria and rollback.
- [ ] No protected curriculum or benchmark regression.
