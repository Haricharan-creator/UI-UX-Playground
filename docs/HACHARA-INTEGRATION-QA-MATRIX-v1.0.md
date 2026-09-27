# HACHARA Integration QA Matrix v1.0

## Purpose
Verify that the new learning-engine surfaces can be integrated without weakening the locked baseline.

| Area | Check | Gate |
|---|---|---|
| Academy | Bundle entry opens | Pass required |
| Academy | Bundle state uses shared model | Pass required |
| Studio | Challenge can capture evidence | Pass required |
| Review | Findings use shared rubric | Pass required |
| Rework | V1 remains preserved | Pass required |
| Progress | Skill/evidence states are consistent | Pass required |
| Navigation | Academy → Studio → Review → Progress works | Pass required |
| Responsive | Mobile and desktop layouts usable | Pass required |
| Accessibility | Keyboard, labels, contrast and readable structure checked | Pass required |
| Regression | Existing entry points and curriculum remain intact | Pass required |
| Data integrity | No duplicate/conflicting IDs introduced | Pass required |

## Automation candidates
- Validate JSON schemas and required fields.
- Detect broken local links.
- Detect duplicate IDs.
- Verify referenced files exist.
- Verify state names against the state machine.
- Check HTML documents for basic structural validity.
- Generate a machine-readable QA report.

## Human gate
Stop only for ambiguous content mapping, destructive changes, learner-policy decisions, or any change that could alter the locked benchmark.
