# HACHARA Hands-Off Continuity & Safe Execution Contract v1.0

**Product:** UI UX Playground — HACHARA  
**Repository:** `Haricharan-creator/UI-UX-Playground`  
**Branch:** `main`  
**Purpose:** Enable hands-off, incremental delivery without silently losing approved work, instructions, data, or decisions.

## 1. Governing operating loop

Use this sequence for every work item:

**UNDERSTAND → SOURCE OF TRUTH → PLAN → PROTECT → EXECUTE → TEST → VALIDATE → REGRESSION → REPORT → LEARN → UPDATE → CONTINUE**

Do not repeat already-verified work unless a new change, failure, or dependency makes re-verification necessary.

## 2. Non-negotiable preservation rules

1. Preserve approved data, content, file structures, curriculum, behavior, design decisions, instructions, and guidance.
2. Do not silently delete, overwrite, merge, renumber, migrate, simplify, or materially change scope or architecture.
3. Make changes additive and narrowly scoped wherever possible.
4. Before editing, inspect the current source of truth and current file version; never edit from a stale copy.
5. Use existing approved baselines, manifests, validators, tests, and checkpoints.
6. When uncertainty or conflicting instructions could materially change the result, stop only that decision-dependent action, document the conflict, and continue safe, non-destructive work.
7. Never claim a change, test, deployment, backup, or recovery succeeded without evidence.
8. Keep sensitive secrets, tokens, credentials, and personal information out of repository documentation and logs.

## 3. Safe hands-off execution

For each safe work item:

1. Identify the goal, relevant source files, constraints, dependencies, and acceptance criteria.
2. Inspect current implementation and existing test coverage.
3. Record the checkpoint: branch, latest commit, relevant baseline, and current CI status.
4. Make the smallest useful change.
5. Add or update regression coverage when behavior changes.
6. Run the most relevant checks and the existing full required CI suite.
7. Inspect failures and correct only evidence-backed causes.
8. Commit with a descriptive message after the change is validated to the extent possible.
9. Verify the resulting commit and its CI runs.
10. Update the live status and proceed to the next safe task.

No destructive operation, irreversible migration, external publication with material consequences, paid service, permission expansion, or unapproved scope/architecture change is included in hands-off authority. Use a SAFE STOP for such decisions. Continue independent, reversible work where possible.

## 4. Required live project status

After meaningful milestones, record:

- **Phase / work item**
- **Status:** VERIFIED, TESTED, ASSUMPTION, PROPOSED, UNCERTAIN, BLOCKED, APPROVED, or PENDING
- **Completed / in progress / pending / blocked**
- **Current branch and latest verified commit**
- **Approved baseline and checkpoint**
- **Checks run and their exact results**
- **Known limitations and unverified areas**
- **Inputs or approvals required**
- **Next safe action**

Do not label the whole product FINAL or complete merely because CI passes.

## 5. HACHARA product and curriculum protections

- Keep **UI UX Playground — HACHARA** as the product identity.
- Preserve the methodology: **Learn + Think + Ideate + Develop + Test + Rework + Build + Share**.
- Preserve the learning loop: **Learn → Understand → Analyse → Practice → Build → Submit → Review → Rework → Validate → Reflect → Progress**.
- Preserve the Classic Workspace (`index.html`) as a functional baseline and the Modern Workspace (`modern.html`) as an alternative presentation.
- Preserve the curriculum of 17 bundles and 96 physical lesson files (95 curriculum units plus one reference/template). Do not delete, merge, renumber, or rewrite its architecture without explicit approval.
- Preserve architecture lock v1.0, output contract v1.0, protected benchmark/manifest and CI safeguards. Treat v1.1 as the current protected implementation benchmark as previously recorded.
- Preserve existing workflow reliability, state recovery, review history, validation-note visibility, stale-review isolation, and regression tests.
- Treat the competitor teardown register as partial public-page research, not a complete screen-by-screen teardown.
- Treat personas as provisional hypotheses until validated with real users.
- Treat architecture documentation as a logical model, not proof that every component is integrated at runtime.
- Treat automated viewport checks as automated responsive checks, not physical iPhone/iPad/Android acceptance.
- Do not claim a V2 design artifact exists when the current system has only recorded a change summary. Be explicit about what is and is not uploaded or persisted.
- Do not overwrite the protected curriculum or baseline to make tests pass. Fix the implementation or test only when evidence supports the correction.

## 6. Evidence labels

Use these labels accurately:

- **SOURCE-INSPECTED:** Read from the current source.
- **AUTOMATED-TESTED:** A named automated check passed.
- **MANUALLY-OBSERVED:** A human visibly checked the behavior.
- **PHYSICAL-DEVICE-TESTED:** Checked on the stated real device.
- **APPROVED:** Explicitly accepted by the user.
- **PROPOSED / ASSUMPTION / UNVERIFIED:** Not yet proven or approved.

A green CI run does not prove production readiness, learner usability, or physical-device acceptance.

## 7. Durable source-of-truth strategy

- Keep project architecture, operating rules, accepted decisions, baseline references, and delivery status in version-controlled project documentation.
- Keep implementation, curriculum, data files, test definitions, and baseline manifests in their existing authoritative locations.
- Prefer links to authoritative files over duplicating entire documents. If a necessary summary is created, identify it as a summary and link to the source.
- Before any handoff or context reset, refresh the repository state and record the latest commit, current CI status, unresolved risks, and exact next action.
- Never infer that a chat summary contains every detail from every prior conversation. If a requirement is important to future execution, capture it in the appropriate project source-of-truth document without deleting or replacing the original source.
- Backups, commits, and CI history reduce risk but do not guarantee against every form of data loss. Do not claim a backup exists unless its location and contents have been verified.

## 8. Current checkpoint at document creation

The latest observed commit before this document was `926a97bf9f615de1940dfd4930d8225d723a2893` (repeated rework version history preservation). The five CI checks on that commit were observed as successful:

- Pages build and deployment
- HACHARA Maintenance
- HACHARA Browser Smoke
- HACHARA Playground Validation
- HACHARA Integration Validation

This checkpoint is historical; always refresh the branch and workflow status before relying on it.

## 9. Next-action rule

After each completed checkpoint, select the next highest-value, evidence-backed, non-destructive task that advances the existing approved scope. Do not ask the user to repeat already documented instructions. Ask only when a material choice cannot be resolved from approved sources or when an action falls outside the safe hands-off authority defined above.
