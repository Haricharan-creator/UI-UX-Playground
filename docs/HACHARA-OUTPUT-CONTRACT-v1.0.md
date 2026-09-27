# HACHARA OUTPUT CONTRACT v1.0

Every completed build cycle should report the same minimum output so progress cannot become ambiguous.

## Required status fields

- Benchmark version
- Benchmark commit
- Current architecture version
- Curriculum/bundle status
- Repository lesson inventory status
- Automation status
- Validation status
- Files/commits changed
- Items preserved
- Items intentionally deferred
- Blocking issues
- Safe-stop decision
- Next implementation action

## Build states

`PLANNED` → `BUILDING` → `VALIDATING` → `SAFE` → `LOCKED`

A build is not reported as complete merely because files were created. It reaches `SAFE` only after the relevant automated and functional checks pass. A benchmark becomes `LOCKED` only when the user-approved baseline is explicitly versioned.

## Preservation statement

Every status report must explicitly state whether existing curriculum, application functionality, architecture and data were preserved. If anything is removed, merged or materially changed, it must be named rather than hidden inside a summary.

## Counting rule

Never mix file count, curriculum lesson count, bundle count, module count or skill count. Report them separately whenever they are available.
