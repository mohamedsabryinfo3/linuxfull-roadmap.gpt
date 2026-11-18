# Linux Learning Track — Arabic, RTL

A **Linux-only** interactive study roadmap built from the playlists and courses the user supplied. The lesson order is curated by prerequisite and skill sequence, so the learner moves between instructors where a supplementary lesson naturally follows the core topic. This edition intentionally does not include SOC, SIEM, MITRE ATT&CK, EDR, Windows logging, or later career modules.

## Included content

- **TananyAcademy / محمد الطناني** — Linux Administration Course 2024, the 72-video core playlist.
- **Abdallah Al-Nuaimy / عبدالله النعيمي** — selected Linux Course in CyberSecurity lessons (28-video playlist), inserted after matching Linux topics.
- **Security Jordan** — selected parts of Linux for CyberSecurity Part 1/2, text processing, Bash projects, and optional Bandit practice.
- The separate Bash Scripting playlist supplied by the user, including the known While Loop Part 1 lesson.

Other supplied courses that repeat Linux fundamentals (Mostafa Abdelsalam and Ahmed Eid) are listed only as reference material. The general Ethical Hacking course is shown as out-of-scope for this Linux-only edition.

## Project files

- `index.html` — Arabic RTL page, modeled on the layout of the reference site.
- `css/style.css` — responsive styling.
- `curriculum.js` — 99 curated lessons/steps, 10 phases, source profiles, course references, and optional resources.
- `app.js` — search, instructor/source filters, completion checkboxes, progress ring, next-lesson navigation, and progress export/import.
- `vercel.json` — static Vercel settings.

## Run locally

Open `index.html` in a browser, or run:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy to GitHub and Vercel

1. Create a GitHub repository.
2. Upload the **contents of this folder** to the repository root.
3. In Vercel, import the GitHub repository.
4. Select Framework Preset: **Other**.
5. Leave Build Command and Install Command empty.
6. Set Output Directory to `.` (repository root).
7. Deploy. No environment variables or database are required.

## Progress tracking

- Completion is saved in this browser's `localStorage`.
- The overall progress ring counts required lessons only. Support/review and optional lessons remain checkable but do not block completion.
- Use **تصدير التقدم** and **استيراد التقدم** to move progress between devices. Progress does not sync automatically across browsers/devices because this is a static site without a backend.
- Existing progress from the previous combined roadmap is preserved for lessons whose IDs remain in this Linux edition.

## Accuracy notes

- Original video durations are displayed when present in the course listing used to assemble the roadmap.
- Where the duration could not be verified from the supplied course information, the lesson explicitly says so; any study-time estimate is labeled separately.
- Some Security Jordan chapters are linked at approximate timestamps previously identified; the lesson card labels those timestamps as approximate and asks the learner to verify them when opening the video.
- Optional storage and network-service material is retained so the 72-video Tanany course remains represented, but it is not required for the core progress percentage.


## Companion audit of unused supplied videos

A separate companion note, `DEFERRED_CONTENT_AFTER_LINUX_SECURITY_PLUS.md`, is delivered alongside the site package. Keep it as a planning reference for the next stage; it is intentionally not rendered in this Linux-only website.
