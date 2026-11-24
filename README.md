# WORLD IN 24 HOURS — 24 November 2026

[![Reward](https://make.fun/badge/news-image-20261124/Junior-Coding-ID/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)
[![Bounty](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![Rank](https://make.fun/badge/news-image-20261124/Junior-Coding-ID/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)

One 1024×1024 editorial dashboard summing up 24 November 2026 in eight
stories: Russia's strike on Zaporizhzhia, Asia's tech-stock surge, the Ebola
team rescue in DR Congo, Tiangong's first foreign astronaut, the killing of
Hamas security chief Naeem Abu Nahel in Gaza, Malaysia's planned Myanmar
returns, Australia's Big Tech safety bill, and Colombia's Villavicencio
blast toll. Sources: AP · Reuters · Nature · CMSA · WHO · AFP · Focus Taiwan.

## How it is made

`render.py` draws the whole image from scratch with Pillow primitives —
flat editorial vector illustrations, no stock photos, no copied assets.
Run it with `python3 render.py`; it writes `entry.png` (1024×1024, RGB).
`main.ts` copies `entry.png` into the harness output directory
(`$MAKEFUN_OUTPUT`, default `/output`).
