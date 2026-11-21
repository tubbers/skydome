# Changelog

## 1.6.8 — 2026-11-21
- Use month-level capture dates; keep photography details in the Gallery facts table.

## 1.6.7 — 2026-11-21
- Added M33, the Triangulum Galaxy, captured from Wiruna (GSO 150 + ASI2600MM, LRGB, 7.17 hours of integration over November 2026).

## 1.6.6 — 2026-11-18
- Added NGC 6752 (the Great Peacock), a globular cluster in Pavo, captured from Wiruna (GSO 150 + ASI2600MM).
- Added NGC 1433, a barred spiral in Horologium with Type Ia supernova SN 2026ahvu, captured remotely from the Nebula Nest (Askar 91F + ASI2600MC).


## 1.6.5 — 2026-11-14
- Added NGC 1532 (Haley's Coronet), an edge-on barred spiral in Eridanus with its dwarf companion NGC 1531, captured from Wheeny Creek and Wiruna (200PDS + ASI585MC).
- Added M 74 (the Phantom Galaxy), a face-on grand design spiral in Pisces, captured from Wiruna (200PDS + ASI585MC).


## 1.6.4 — 2026-11-13
- Added NGC 1097 (Caldwell 67), a barred spiral in Fornax, captured from Wiruna (200PDS + ASI585MC).
- Shortened the M31 and M78 descriptions on the dome to match the older, more educational style.


## 1.6.3 — 2026-11-13
- Added the Andromeda Galaxy (M31), a DWARF Mini mosaic from Wiruna, and M78 (NGC 2068), captured remotely from the Nebula Nest.


## 1.6.2 — 2026-10-29
- Distance tour: eight dome images had no `distance_ly` in the manifest (only in gallery.json), so "by distance" put them after the 100M-ly galaxies (Zeta Ophiuchi 440 ly, Eastern Veil 2,400 ly, Lagoon SHO 4,100 ly...). Copied their distances across from gallery.json.

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
