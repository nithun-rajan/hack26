# Soton Ship 2026 🚢

Event microsite for **Soton Ship 2026** — an applied-AI hackathon by the University of Southampton AI Society.

> Stop learning AI. Start shipping it. · 16–18 October 2026 · Eagle Labs, Southampton · 200+ builders

Layout and interaction style inspired by [Vercel Ship](https://vercel.com/ship): minimal, typography-driven, near-monochrome on pure black — big cinematic hero, sticky transparent nav, a divided stats row, announcement-style cards, a sessions table, image mosaic, sponsor grid and footer. Original name, copy, palette and content throughout (not a clone).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (black / white / zinc, thin-bordered cards, subtle radial gradients)
- **Framer Motion** (scroll fade-in + blur reveals, count-ups)
- **lucide-react** (icons), **clsx**

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — type the command on its own line (a trailing `# comment` would be passed to Next.js as a directory and error out).

```bash
npm run build
npm run start
```

## Editing content

**All event copy, stats, schedule and sponsors live in one file:**
[`lib/content.ts`](lib/content.ts)

Edit text there and every section updates — no component changes needed. Each exported object maps to a section (`event`, `opportunity`, `pillars`, `workshops`, `talks`, `manifest`, `sponsors`, `boardingPass`, …).

Two exceptions kept inline because they're page structure rather than copy:
- the headline figures in [`components/Stats.tsx`](components/Stats.tsx)
- the placeholder gallery tile captions in [`components/Gallery.tsx`](components/Gallery.tsx)

## Project structure

```
app/
  layout.tsx        # Inter + JetBrains Mono, metadata, shell
  page.tsx          # assembles all sections in order
  globals.css       # theme tokens + utilities (eyebrow, card, radial-thumb)
components/
  Nav.tsx           # sticky transparent nav (mobile menu)
  Hero.tsx          # huge typography hero + radial gradient
  Stats.tsx         # divided headline stats band
  Opportunity.tsx … Footer.tsx   # one component per section
  Gallery.tsx       # placeholder photo mosaic (masonry)
  BoardingPass.tsx  # boarding-pass ticket CTA (form is a placeholder)
  ui/
    primitives.tsx  # Section, SectionHeading, Reveal, CountUp, Button
lib/
  content.ts        # ← single source of truth for content
```

## Design system

```
Background  #000000      Borders   rgba(255,255,255,0.10)
Text        #ffffff      Cards     rgba(255,255,255,0.03–0.06)
Muted       zinc-400/500 Accent    white / light grey
Width       max-w-7xl    Sections  ~112–144px vertical padding
```

Motion is restrained: scroll-triggered fade + blur reveals, count-up numbers, hover glow on cards. All animation respects `prefers-reduced-motion`.

## Swapping in real photography

The gallery ([`components/Gallery.tsx`](components/Gallery.tsx)) uses captioned gradient placeholder tiles. Replace each tile's inner content with a `next/image` and keep the `row-span-2` on `tall` tiles to preserve the masonry rhythm.

## Boarding pass form

The ticket UI in "Get your boarding pass" is **visually complete but not wired to a backend**. The submit handler in [`components/BoardingPass.tsx`](components/BoardingPass.tsx) is a placeholder — drop in a form provider or API route there to issue real tickets.

## Deploy to Vercel

1. Push this folder to a Git repo.
2. Import at [vercel.com/new](https://vercel.com/new) — Next.js auto-detects, no config needed. Deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Notes on source data

Two figures from the source deck worth confirming before going public, kept verbatim in `lib/content.ts`:
- 2024 participants appear as both **80+** and **120+** in the deck (this site uses **80+**).
- "Russell Group / Imperial / Oxbridge" is redundant (Imperial is Russell Group).
