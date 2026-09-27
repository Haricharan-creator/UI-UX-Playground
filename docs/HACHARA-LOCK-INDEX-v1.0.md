# HACHARA LOCK INDEX v1.0

**LOCK STATUS: ACTIVE**

This index is the final reference for the current safe benchmark, architecture and output contract.

## Protected baseline

- Pre-lock baseline commit: `ad758b0b5cd763ee966d07d2cbef4d1493da2f5a`
- Safe benchmark: `docs/HACHARA-SAFE-BENCHMARK-v1.0.md`
- Architecture lock: `docs/HACHARA-ARCHITECTURE-LOCK-v1.0.md`
- Output contract: `docs/HACHARA-OUTPUT-CONTRACT-v1.0.md`
- Curriculum manifest: `data/curriculum-manifest.json`

## Lock commits

- Safe benchmark: `0b668eece4605ed157afb4b06742b712f5297ad7`
- Output contract: `b8f1e4edb54a63c314908bef0f74c463de5999b6`
- Architecture lock: `6aaff8e937fcb092510ba82a179cf079a06e21dd`
- Manifest lock: `1f78668d35d67c854180bee9c7123d881a888233`

## Non-destructive guarantee

The lock is an architectural and process baseline. It does not delete or replace existing lesson files. Future implementation is incremental.

## Required future change process

`Read lock → assess impact → preserve → implement → validate → report → explicit versioned lock if architecture changes.`

## Automation policy

Repetitive work should be automated where safe. Destructive operations, curriculum merges, lesson deletion and major architecture changes require human approval.

## Counting policy

Never combine file count, curriculum lesson count, bundle count, module count or skill count into one number.

## Current state

The project is **not frozen**. The benchmark is locked so that development can continue safely from a known baseline.
