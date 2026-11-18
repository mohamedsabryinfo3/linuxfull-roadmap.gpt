# Linux Learning Track – one-pass curriculum

A static Arabic RTL learning tracker built for GitHub Pages / Vercel.

## What is included
- Ahmed Eid: selected OS / Linux kernel / virtualization foundation chapters only.
- TananyAcademy: all 72 Linux Administration lessons, in source order, with the listed lesson duration.
- Abdallah Al-Nuaimy: the non-duplicate Linux network, monitoring, troubleshooting and final challenge lessons that complement Tanany.
- Security Jordan Bash: only the timestamped chapters that add material not already covered by Tanany (Shebang, script execution, user input, operators, loops reading files, projects, arrays and functions).
- Security Jordan Linux Part 2: AWK / SED / CUT / TR text-processing segment at the timestamp previously identified.

## Study status labels
- `أساسي`: core lessons required to complete the track.
- `استكمال مطلوب`: complementary content that is still required now.
- `تطبيق عملي`: required hands-on challenge.

Every visible lesson is part of the same one-pass sequence. There is no optional "review and expansion" stage.

## Run locally
Open `index.html` in a browser. No build step or external JavaScript package is required. Google Fonts is used as a visual enhancement; the page falls back to system fonts if unavailable.

## Deploy to Vercel
- Framework Preset: Other
- Build Command: empty
- Output Directory: `.`
- Install Command: empty

Upload the contents of this folder to the root of a GitHub repository, then import that repository into Vercel.

## Progress
Progress is saved in browser `localStorage`. Use Export / Import to move progress between browsers or machines.

## Accuracy note
The Tanany 72-lesson titles/durations were transcribed from the public playlist index mirrored by iToutBreak. Ahmed Eid chapters were transcribed from the public chapter list. Security Jordan's compiled Bash video has chapter timestamps; selected segment durations are calculated from adjacent published chapter markers. The Abdullah playlist data was supplied by the user; durations that were not visible are marked as not available rather than guessed. The previously supplied separate Bash playlist (video `SWDrATjXYlo`) could not be fully enumerated via public indexing; the supplied While Loop Part 1 is excluded as duplicate of Tanany lesson 61 and the selected Security Jordan loops segment.
