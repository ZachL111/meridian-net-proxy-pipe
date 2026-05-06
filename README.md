# meridian-net-proxy-pipe

`meridian-net-proxy-pipe` is a TypeScript project in networking. Its focus is to design a TypeScript verification harness for proxy systems, covering stream reduction, windowed input fixtures, and failure-oriented tests.

## Reason For The Project

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Meridian Net Proxy Pipe Review Notes

For a quick review, compare `packet span` with `socket risk` before reading the middle cases.

## What It Does

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/meridian-net-proxy-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `packet span` and `socket risk`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## How It Is Put Together

The core code exposes a scoring path and the added review layer uses `signal`, `slack`, `drag`, and `confidence`. The domain terms are `packet span`, `retry pressure`, `route drift`, and `socket risk`.

The added TypeScript path is deliberately direct, with fixtures doing most of the explaining.

## Run It

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Check It

The verifier is intentionally local. It should fail if the fixture score math, lane assignment, or language-specific test drifts.

## Boundaries

This remains a local project with deterministic fixtures. It does not depend on credentials, hosted services, or live data. Future work should add richer malformed inputs before widening the public API.
