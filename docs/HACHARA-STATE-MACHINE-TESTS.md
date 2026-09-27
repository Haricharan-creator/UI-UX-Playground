# HACHARA Workflow State Machine — Acceptance Tests

## Purpose
Protect the learning workflow from accidental state skipping.

### Happy path
- Not Started → In Progress
- In Progress → Submitted
- Submitted → Under Review
- Under Review → Ready for Validation
- Ready for Validation → Validated

### Rework path
- Under Review → Needs Rework
- Needs Rework → Resubmitted
- Resubmitted → Under Review
- Ready for Validation → Needs Rework (if validation exposes unresolved evidence)

### Required guards
1. Submission without required evidence must fail.
2. Review without review context must fail.
3. Resubmission without preserving V1 must fail.
4. Resubmission without recording V2 changes must fail.
5. Validation without satisfied criteria must fail.
6. A validated item cannot silently return to an earlier state.
7. Ambiguous findings must remain reviewable rather than being auto-resolved.

## Safe benchmark rule
These tests are additive. They do not alter or delete existing curriculum content.
