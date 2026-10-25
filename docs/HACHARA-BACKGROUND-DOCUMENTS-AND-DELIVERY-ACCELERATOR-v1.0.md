# HACHARA Background Documents & Delivery Accelerator v1.0

**Purpose:** create a reliable project onboarding pack so future research, design and engineering work starts from known decisions instead of rediscovering context.  
**Status:** index and operating procedure; it does not replace existing source-of-truth documents.

## 1. Start-here reading order
1. `README.md` — run instructions and product identity.
2. `docs/REPOSITORY-SOURCE-OF-TRUTH-v1.0.md` — authoritative repository and curriculum sources.
3. `docs/HACHARA-LOCK-INDEX-v1.1.md` — protected decisions and current benchmark locks.
4. `docs/HACHARA-ARCHITECTURE-LOCK-v1.0.md` — product layers and boundaries.
5. `docs/HACHARA-OUTPUT-CONTRACT-v1.0.md` — expected outputs/quality contract.
6. `docs/HACHARA-SAFE-BENCHMARK-v1.1.md` — protected implementation baseline.
7. `CURRICULUM-BUNDLE-MASTER.md` + `LESSON-REGISTRY.md` — intended learning structure and actual physical files.
8. `data/curriculum-manifest.json`, `data/curriculum-mapping-policy.json`, `data/progress-model.json`, `data/workflow-state-machine.json`, `data/review-rubric.json` — machine-readable contracts.
9. `docs/HACHARA-IMPLEMENTATION-ROADMAP-v1.0.md` — intended build sequence.
10. `docs/HACHARA-INTEGRATION-QA-MATRIX-v1.0.md`, `docs/HACHARA-INTEGRATION-GATE-v1.0.md`, `docs/HACHARA-STATE-MACHINE-TESTS.md`, `tests/README.md` — validation.
11. `docs/COMPETITOR-TEARDOWN-AND-ADOPTION-REGISTER.md` — external patterns and evidence gaps.
12. This pack’s architecture, persona, journey and flow documents — proposed synthesis that must be checked against runtime.

## 2. New companion documents
- `docs/HACHARA-PRODUCT-ARCHITECTURE-AND-OPERATING-MODEL-v1.0.md`: logical layers, entities, boundaries, invariants and acceptance gates.
- `docs/HACHARA-PERSONAS-AND-EMPATHY-MAPS-v1.0.md`: provisional persona hypotheses and validation protocol.
- `docs/HACHARA-USER-JOURNEY-AND-FLOW-MAPS-v1.0.md`: end-to-end journey, task flows, review/rework process, recovery and edge states.
- `docs/HACHARA-BACKGROUND-DOCUMENTS-AND-DELIVERY-ACCELERATOR-v1.0.md`: this onboarding and speed-up plan.

## 3. Source-of-truth rules
- Architecture lock defines protected boundaries; roadmap defines intended order, not proof of implementation.
- Curriculum master defines bundles; registry defines physical lesson files; lesson pages are content sources, not the global registry.
- JSON contracts define allowed states and review/progress semantics; UI runtime must be tested against them.
- GitHub main branch is the current source of truth. Read the latest file and blob SHA before editing.
- External competitor research must label verified public facts, analysis/inference and uninspected behaviour separately.
- Personas/journeys are hypotheses until backed by user research.
- No new code is adopted without license/dependency/compatibility review.
- Never state a task is complete solely because a document exists; use tests/evidence and mark remaining gaps.

## 4. Standard task brief (copy for every implementation task)
### Outcome
What user problem should change, for whom, and what observable outcome is expected?

### Evidence
- User/competitor/repository evidence:
- Source files and line/section:
- Current observed behaviour:
- Reproduction steps:
- Confidence and unknowns:

### Scope
- In scope:
- Out of scope:
- Protected files/data/contracts:
- Existing feature to reuse:

### Design/process
- Persona/journey stage:
- User goal and task:
- Happy path:
- Alternate/error/recovery paths:
- Accessibility/responsive considerations:

### Implementation
- Files likely affected:
- Data contract/state transitions:
- Dependencies/licensing:
- Migration/rollback:
- Human approval required?

### Acceptance criteria
Write observable Given/When/Then or measurable checks. Include:
- correct behaviour;
- invalid/edge cases;
- persistence/reload/resume;
- accessibility/responsive;
- curriculum/benchmark preservation;
- regression suite.

### Delivery report
- Commit:
- Files changed:
- Tests run and result:
- Manual checks:
- Known limitations:
- Rollback path:
- Next smallest action:

## 5. Automation-first development loop
1. **Orient:** fetch current repo tree, locks, task history and active issues.
2. **Inspect:** read source and tests before editing; reproduce issue.
3. **Specify:** write acceptance criteria and trace them to the user journey/state contract.
4. **Inventory:** find existing lesson/component/data before creating new ones.
5. **Plan:** smallest additive change; identify protected surfaces and rollback.
6. **Implement:** reuse existing components/contracts; keep content/data/logic separate.
7. **Test:** targeted test → full regression → workflow/contract tests; do not infer test success.
8. **Review:** inspect diff for unintended curriculum, navigation, privacy or contract changes.
9. **Commit:** focused commit with descriptive message.
10. **Verify CI:** check latest commit's workflows; report passed, failed, pending separately.
11. **Update docs:** update decision log, traceability and implementation status.
12. **Close loop:** state exactly what changed and what remains unverified.

## 6. Definition of ready
A task is ready only when the user problem, affected journey, current behaviour, source of truth, acceptance criteria, constraints and rollback plan are clear. If evidence is missing, run an inspection/research task first rather than coding from assumptions.

## 7. Definition of done
- Acceptance criteria pass and tests are linked to the change.
- No protected lesson, bundle, architecture lock or benchmark changed unintentionally.
- All changed routes/links resolve.
- Keyboard and responsive checks cover affected interactions.
- Persisted data and recovery are tested when applicable.
- CI result is known for the commit.
- Documentation and limitations are current.
- Any remaining manual/physical-device checks are explicitly listed.

## 8. Reusable task templates
### Competitor teardown
For each platform capture: source URL/date/access level; catalog IA; course overview; lesson structure; teaching method; UI components; task flow; exercise prompt/output; feedback/rubric; progress/resume; mobile/accessibility; differentiators; confidence; HACHARA mapping; adoption decision; license evidence. Mark unavailable screens “not inspected”.

### UX research
Research question → participant criteria → consent → task/scenario → observed behaviour → quote → interpretation → alternative explanation → confidence → design implication → follow-up test.

### Design critique
Scope/context → rubric dimension → observation → evidence → confidence/severity → principle → user impact → recommendation → learner decision → V2 → test → validation.

### Feature proposal
Problem → target persona → journey stage → current gap → options → trade-offs → decision → architecture impact → acceptance tests → rollback.

### Lesson addition or revision
Search registry and related lessons → map overlap → verify existing source content → define objective/prerequisites/output → worked example → practice → rubric/evidence → next step → validate against protected curriculum → review before commit.

## 9. Delivery prioritization
- **P0:** core journey reliability, state transitions, evidence and persistence truth.
- **P1:** consistent lesson contracts, catalog metadata, contextual handoffs and review clarity.
- **P2:** targeted teaching improvements and capability dashboard accuracy.
- **P3:** community, mentor or collaboration features after privacy, moderation and backend requirements are decided.

## 10. Risk register
| Risk | Why it matters | Mitigation |
|---|---|---|
| Re-discovering old decisions | Wastes time and causes contradictory implementation | Read start-here order; update decision/source links |
| Duplicate curriculum | Dilutes learning and creates maintenance burden | Search registry, map overlaps, human review |
| UI looks complete but workflow is disconnected | Learner cannot complete the loop | Test end-to-end journey and state transitions |
| Demo progress treated as real | Destroys trust | Trace every metric to persisted evidence; label samples |
| Unsupported AI feedback | Misleads learners | Evidence/confidence labels and human control |
| Local-only data mistaken for cloud sync | Data loss and false expectations | Document storage limits; test export/recovery |
| Competitor code copied without license review | Legal and maintenance risk | Pattern reuse first; code audit before integration |
| Unverified personas | Product optimized for imagined users | Conduct representative user research |
| Passing CI mistaken for full acceptance | Physical/device/usability defects remain | Report automated and manual gates separately |
| Overwriting protected baseline | Regressions and lost accumulated work | Benchmark tests, focused commits, rollback |

## 11. Project status discipline
Use only these labels:
- **Verified in source:** present in current files.
- **Automated-tested:** named test passed on the stated commit.
- **Manually observed:** steps, environment and date recorded.
- **Hypothesis:** proposed but not user-validated.
- **Proposed:** not implemented.
- **Blocked/unknown:** evidence unavailable.
- **Complete:** all defined acceptance criteria satisfied, with evidence.

## 12. First execution queue
1. Runtime audit the catalog → lesson → Studio → Review → Rework → Validate → Progress flow.
2. Verify route/context transfer and actual persistence/resume.
3. Compare the implementation to `data/workflow-state-machine.json`, `data/review-rubric.json` and `data/progress-model.json`.
4. Audit lesson contract consistency against the 96-file registry without editing lesson content.
5. Validate the persona hypotheses with learner sessions.
6. Finish competitor screen-by-screen evidence capture and only then make adoption decisions.
