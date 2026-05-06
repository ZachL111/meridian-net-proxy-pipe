# Meridian Net Proxy Pipe Walkthrough

The fixture is intentionally compact, so the review starts with the cases that pull farthest apart.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 199 | ship |
| stress | retry pressure | 169 | ship |
| edge | route drift | 181 | ship |
| recovery | socket risk | 161 | ship |
| stale | packet span | 218 | ship |

Start with `stale` and `recovery`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `packet span` against `socket risk`, not the raw score alone.
