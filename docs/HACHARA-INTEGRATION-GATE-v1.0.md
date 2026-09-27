# HACHARA Integration Gate v1.0

## Purpose
Define the gate before the new architecture replaces or modifies protected existing entry points.

## Gate order
1. Schema validation
2. Curriculum/data integrity check
3. Navigation/link check
4. Functional workflow check
5. Responsive UI check
6. Evidence/review/rework state check
7. Regression check against protected baseline
8. Human review only where a consequential decision remains
9. Integration
10. Final regression

## Protected assets
- Existing curriculum files
- Existing lesson registry/history
- Existing application entry points
- Locked safe benchmark
- Existing learner content

## Integration rule
New pages and data contracts may be developed independently. They may not replace protected entry points until the complete gate passes.

## Release criteria
A release is acceptable only when the workflow is internally consistent, no protected content is lost, required links resolve, mobile/desktop layouts remain usable, and state transitions obey the workflow state machine.

## Stop condition
Stop and request user input only when the gate reveals an ambiguous content decision, destructive migration, major architecture conflict, or another decision that cannot be safely inferred.
