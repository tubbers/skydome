# Changelog

## 1.6.1 — 2026-10-29
- Added the Crescent Nebula (NGC 6888) in Cygnus (200PDS + ASI1600MM, Ha/OIII).

## 1.6.0 — 2026-10-29
- The dome now opens on the sky as it is right now. The sidereal time is set once from the viewer's clock at page load, using the default longitude 151.2 and latitude −33.8 (unchanged). Before this, desktop and phone both started at the slider's fixed 80° and only point-at-the-sky mode read the clock. The Sun, which follows its real position, was usually drawn below the horizon. Now it sits at its true altitude and azimuth for that time (above the horizon by day, below it at night). The LST slider, "spin sky to it" and point-at-the-sky mode work as before.
- Added NGC 460 (N84) in the Small Magellanic Cloud (200PDS + ASI585MC, south-up frame).

## 1.5.0 — 2026-10-29
- The Sun on the dome. A manifest entry with `track: "sun"` is moved to the Sun's position for the current date and time (low-precision solar formula precessed to J2000, ~0.01°). It is scaled to that day's solar diameter and rebuilt as the Sun moves, with a once-a-minute redraw while the page is open. Its stored corners are the capture-time geometry, so older viewers show it where it was when it was taken.
- `ephem.orientation: "horizon"` keeps the frame zenith-up for the sky as drawn. The position angle of image-up is the parallactic angle, worked out from the dome's own latitude setting and sidereal time (the slider, or the clock in point-at-the-sky mode). No observer location is stored in the manifest.
- Per-image `blend: "screen"`: black adds nothing, so a disc on a black frame shows no border against the backdrop.
- Distances under 0.01 ly show as light-minutes ("8.3 lt-min") instead of "0 ly".
- First tracked image: ISS transit of the Sun, 17 Oct 2026 (DWARF Mini).

## 1.4.2 — 2026-10-26
- Privacy: rounded the default gyro/real-sky observer location (`lat0`/`lon` in the main state object) from 2 decimal places to 1 (now -33.8, 151.2). The latitude slider and its label already read -33.8.
- Corrected the 1.4.1 entry below.

## 1.4.1 — 2026-10-21
- Version bump only. The release notes originally said the default observer location had been rounded from 5 to 2 decimal places; that was wrong. The default (`lat0`/`lon` in the main state object) had been at 2 decimal places since 2026-08-31 and never had 5 in this repo, and 1.4.1 did not change it.
