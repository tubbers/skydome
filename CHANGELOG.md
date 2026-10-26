# Changelog

## 1.4.2 — 2026-10-26
- Privacy: rounded the default gyro/real-sky observer location (`lat0`/`lon` in the main state object) from 2 decimal places to 1 (now -33.8, 151.2). The latitude slider and its label already read -33.8.
- Corrected the 1.4.1 entry below.

## 1.4.1 — 2026-10-21
- Version bump only. The release notes originally said the default observer location had been rounded from 5 to 2 decimal places; that was wrong. The default (`lat0`/`lon` in the main state object) had been at 2 decimal places since 2026-08-31 and never had 5 in this repo, and 1.4.1 did not change it.
