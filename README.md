# Soton Ship 2026 🚢

Event website for **Soton Ship 2026** — an applied-AI hackathon run by the
University of Southampton AI Society.

> Stop learning AI. Start shipping it. · 16–18 October 2026 · Eagle Labs, Southampton

**Live site:** https://nithun-rajan.github.io/hack26/

The site is styled as a retro-arcade "spaceship" console: a pixel wordmark, a
keyboard-navigable game menu, chiptune boot sequence and violet-on-near-black
palette. Each destination in the menu is its own page (Mission, Pillars,
Manifest, Backers, Logbook, Boarding Pass).

## Tech stack

- **Next.js 14** (App Router) + **TypeScript** — static export (`output: "export"`)
- **Tailwind CSS** for styling
- **Framer Motion** for scroll reveals, count-ups and hover choreography
- **Geist / Geist Mono / Geist Pixel** self-hosted fonts (SIL OFL)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To produce the static build that gets deployed:

```bash
npm run build     # outputs static HTML/JS to ./out
```

## Editing content

**Almost all event copy, stats, schedule and sponsors live in one file:**
[`lib/content.ts`](lib/content.ts). Edit the text there and the relevant section
updates — no component changes needed. Each exported object maps to a section
(`event`, `opportunity`, `whoWeAre`, `trackRecord`, `pillars`, `workshops`,
`talks`, `manifest`, `sponsors`, `boardingPass`, `footer`, …).

- **Event photos** live in [`public/gallery/`](public/gallery) and are referenced
  by filename in the relevant components (e.g. `Gallery.tsx`, `Opportunity.tsx`).
- **Sponsor logos** live in [`public/sponsors/`](public/sponsors); the list and
  logo filenames are in `sponsors` in `lib/content.ts`. A sponsor with no logo
  file falls back to showing its name.

## Project structure

```
app/
  layout.tsx        # fonts, metadata, global shell
  page.tsx          # Hero (the arcade "main menu")
  globals.css       # theme tokens + utilities
  mission/          # Stage 01 — Mission (Opportunity, Who We Are, Track Record …)
  pillars/          # Stage 02 — Five Pillars (+ workshops, talks, etc. sub-pages)
  manifest/         # Stage 03 — 3-day schedule
  sponsors/         # Stage 04 — Backers / sponsor wall
  logbook/          # Ship's Log — photo gallery from last year
  boarding-pass/    # Boarding Pass — sign-up CTA
components/         # one component per section, plus ui/ primitives
lib/
  content.ts        # ← single source of truth for content
  sound.tsx         # chiptune / blip audio context
  arcade.ts         # easter-egg / unlock helpers
public/
  fonts/  gallery/  sponsors/
```

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export and publishes it to **GitHub Pages**. Because
Pages serves the site from a `/hack26` sub-path, the workflow sets
`NEXT_PUBLIC_BASE_PATH=/hack26` at build time (locally it stays empty so
`npm run dev` runs at the root).
