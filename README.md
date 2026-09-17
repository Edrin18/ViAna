# VStudy

A single-page student dashboard: an attendance landing page, a profile/menu system,
and a one-time onboarding form that asks each visitor for their name, photo, and
academic details the first time they open the app on their device.

## Project structure

```
vstudy-app/
├── index.html        # page structure only
├── css/
│   └── styles.css    # all styling (dark theme, cards, rings, forms)
├── js/
│   └── app.js         # all app logic (rendering, routing, storage, onboarding)
└── README.md
```

## How it works

- **No backend, no build step.** Open `index.html` directly in a browser, or deploy
  the folder as-is to any static host (Vercel, Netlify, GitHub Pages, S3, etc.).
- **Per-visitor onboarding.** On first load, the app checks the browser's
  `localStorage` for a saved profile. If none exists, it shows the onboarding form
  (name, photo, roll number, program, CGPA, mentor info, links, academic-progress
  breakdown, etc.). Once submitted, the profile is saved to that browser's
  `localStorage` and the form won't appear again on that device.
- **Important:** because profiles live in `localStorage`, they are private to
  *one browser on one device*. If your friend opens the link on their own phone,
  they get their own blank onboarding form — their data never overwrites or mixes
  with anyone else's. But the same person opening the link on two different
  devices will be asked to fill it in twice, and there is no way to sync or
  recover a profile across devices without adding a real backend.
- **Editing later.** From the attendance page, tap the avatar (top-right) →
  Profile → "Edit" / "View Full Details" / "View Details" to reopen the form
  pre-filled with the saved data.
- **Attendance data** (the four slot percentages and milestone label) is stored
  separately in `localStorage` under `vstudy_attendance_v2`, defaulted to sample
  values in `js/app.js` (`defaultAttendance`). Edit that object directly to change
  the defaults every visitor starts with.

## Customizing

- **Colors / fonts / spacing:** edit `css/styles.css`. Key CSS variables are
  defined at the top of the file under `:root` (`--accent`, `--green`, `--red`,
  `--purple`, `--cyan`, `--magenta`, `--maroon`, etc.).
- **Icons:** all icons are inline SVG path data defined in the `ICON_PATHS`
  object at the top of `js/app.js` — add or edit entries there.
- **Form fields / profile shape:** the onboarding form markup and the `profile`
  object it saves are both in the `showOnboarding()` function in `js/app.js`.
- **Menu items:** edit the `renderMenu()` function in `js/app.js`.

## Deploying

Any static host works since there's no server code:

- **Netlify / Vercel:** drag-and-drop the `vstudy-app` folder, or connect it as
  a git repo — no build command needed (or set it to a no-op).
- **GitHub Pages:** push the folder to a repo and enable Pages on the branch.
- **Anything else:** upload the three files (`index.html`, `css/styles.css`,
  `js/app.js`) keeping the same relative folder structure.

## Known limitations

- Profiles are per-browser (see above) — there's no shared login system.
- Photos are stored as compressed base64 JPEGs inside `localStorage`, which has
  a size limit (usually ~5–10MB per site) — fine for a few profile photos, but
  not meant for large files.
- Clearing browser data/history for the site will remove the saved profile.
