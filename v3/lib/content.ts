// =============================================================================
// Soton Ship 2026 — single source of truth for all site content.
// Edit copy, stats, schedule and sponsors here. Components read from this file.
// =============================================================================

export const event = {
  name: "Soton Ship 2026",
  tagline: "Stop learning AI. Start shipping it.",
  dates: "16–18 October 2026",
  datesShort: "16–18 OCT 2026",
  venue: "Eagle Labs, Southampton",
  venueShort: "EAGLE LABS",
  builders: "200+ builders",
  org: "University of Southampton AI Society",
  tentative: "Tentative · subject to change",
  ctaPrimary: "Get your boarding pass",
  ctaSecondary: "View the manifest",
} as const;

export const nav = {
  links: [
    { label: "Mission", href: "/mission" },
    { label: "Pillars", href: "/pillars" },
    { label: "Manifest", href: "/manifest" },
    { label: "Backers", href: "/sponsors" },
    { label: "Logbook", href: "/logbook" },
  ],
  cta: { label: "Get a Ticket", href: "/boarding-pass" },
} as const;

// 3. The Opportunity — 2x2 grid
export const opportunity = {
  eyebrow: "Why this weekend matters",
  title: "The opportunity",
  cards: [
    {
      label: "The Problem",
      body: "UK universities teach AI theory, not AI entrepreneurship. Students graduate knowing AI but not building it. The industry is desperate for builders.",
    },
    {
      label: "Our Solution",
      body: "A 2.5-day applied AI hackathon blending traditional ML, vibe-coding, and a venture-capital simulation — modelled on how real AI products actually get built.",
    },
    {
      label: "The Audience",
      body: "200+ student participants from UK universities — builders, founders and engineers entering the workforce 2027–2030.",
    },
    {
      label: "Who it's for / What you'll leave with",
      body: "Ambitious students who want to build, not just study. You leave with a shipped portfolio project, a denser network, and direct exposure to employers.",
    },
  ],
} as const;

// 4. Who We Are
export const whoWeAre = {
  eyebrow: "Who we are",
  title: "University of Southampton AI Society",
  blurb:
    "A student-led community of 200+ members from Computer Science, Electronics, Mathematics and cross-faculty disciplines — united by building things with AI.",
  stats: [
    { value: 200, suffix: "+", label: "active members" },
    { value: 40, suffix: "+", label: "events per year" },
    { value: 12, suffix: "+", label: "partner companies" },
    { value: 3, suffix: "rd", label: "largest AI student society in the UK" },
  ],
  doList: [
    "Weekly hands-on workshops",
    "Speaker series",
    "Project teams",
    "Competitions (annual flagship hackathon + Kaggle / research challenges)",
  ],
} as const;

// 5. 2024 Track Record
export const trackRecord = {
  eyebrow: "Track record",
  title: "What happened in 2024",
  stats: [
    { value: 80, suffix: "+", label: "student participants" },
    { value: 14, suffix: "", label: "final submissions" },
    { value: 6, suffix: "", label: "industry mentors on-site" },
    { value: 95, suffix: "%", label: "said they'd attend again" },
  ],
  quote: {
    text: "Easily the best weekend of my degree!",
    author: "Suleyman Cagatay",
    role: "Winner, IET–AISoc Hackathon 2024",
  },
  note: "This year aims for the biggest yet — 200+ participants from across the UK.",
} as const;

// 6. The Five Pillars
export const pillars = {
  eyebrow: "The five pillars",
  title: "Five strands. One weekend.",
  items: [
    {
      n: "01",
      icon: "🛠️",
      name: "Workshops",
      body: "Guided, hands-on sessions led by practitioners on high-leverage tools: LangChain, PyTorch Lightning, Modal, LoRA fine-tuning, evals.",
    },
    {
      n: "02",
      icon: "🎤",
      name: "Talks",
      body: "Short, high-signal talks from industry and research. 20 minutes + 5 min Q&A, no slide padding.",
    },
    {
      n: "03",
      icon: "📊",
      name: "Technical Challenge",
      body: "A classical-ML competition with a held-out test set and leaderboard. Rewards statistical rigour and feature-engineering craft.",
    },
    {
      n: "04",
      icon: "✨",
      name: "Creative Ideathon",
      body: "Open-ended vibe-coding: pick a problem, ship a product in 24 hours using AI code-gen tools. Judged on usefulness and delight.",
    },
    {
      n: "05",
      icon: "💸",
      name: "VC for a Day",
      body: "Every attendee is handed £200k in virtual capital to allocate across pitches. The winning team wins the real prize.",
    },
  ],
} as const;

// 7. Workshops detail
export const workshops = {
  eyebrow: "Pillar 01 — expanded",
  title: "Workshop tracks",
  note: "Themes subject to speaker availability.",
  tracks: [
    {
      track: "Track A",
      name: "GenAI Apps",
      body: "Build apps with popular GenAI APIs, API key setup, prompt scaffolding and deployment.",
      duration: "90 min",
      level: "Beginner-friendly",
    },
    {
      track: "Track B",
      name: "Fine Tuning",
      body: "Fine-tune open-source models for specific use cases with LoRA and lightweight adapters.",
      duration: "2 hr",
      level: "Intermediate",
    },
    {
      track: "Track C",
      name: "Classical ML",
      body: "Feature engineering, gradient boosting and model calibration for the technical challenge.",
      duration: "90 min",
      level: "Beginner-friendly",
    },
    {
      track: "Track D",
      name: "Evals & Safety",
      body: "Designing evals, red-teaming, guardrails and observability in production.",
      duration: "90 min",
      level: "Advanced",
    },
    {
      track: "Track E",
      name: "Vibe Coding",
      body: "Ship a production-ready app in hours using Cursor, Claude Code and v0.",
      duration: "2 hr",
      level: "Any level",
    },
    {
      track: "Track F",
      name: "Research Primer",
      body: "How to read a paper, replicate a baseline, and file your first PR to a lab.",
      duration: "90 min",
      level: "Curious readers",
    },
  ],
} as const;

// 8. Talks
export const talks = {
  eyebrow: "Pillar 02",
  title: "The talks",
  note: "Min 20 minutes each, from industry experts.",
  items: [
    { title: "Building AI product", speaker: "Founder · Applied AI startup" },
    { title: "How research labs ship products", speaker: "Research engineer · Frontier lab" },
    { title: "The economics of AI", speaker: "Head of AI · Financial services" },
    { title: "Responsible AI", speaker: "Policy researcher" },
    { title: "How VCs evaluate AI-native companies in 2026", speaker: "Investor · Early-stage tech fund" },
    { title: "Graduating into AI", speaker: "Senior engineer · Big Tech" },
  ],
} as const;

// 9. Technical Challenge
export const technicalChallenge = {
  eyebrow: "Pillar 03",
  title: "The Technical Challenge",
  rows: [
    {
      label: "Dataset",
      body: "A real-world, anonymised dataset from a partner firm (time-series, tabular or image-based).",
    },
    {
      label: "Format",
      body: "48-hour Kaggle-style competition with public & private leaderboards. Teams of 1–4.",
    },
    {
      label: "Constraints",
      body: "No LLM API calls. No pretrained foundation models. Compute provided by sponsor.",
    },
    {
      label: "Judging",
      body: "Top-5 leaderboard teams present to a panel. Code review counts.",
    },
  ],
} as const;

// 10. Creative Ideathon
export const ideathon = {
  eyebrow: "Pillar 04",
  title: "The Creative Ideathon",
  intro:
    "Teams have 24 hours to ship a working AI-powered product using any coding agents, APIs and frameworks. Demoed live to judges and the VC floor.",
  judgedOn: [
    "Does it work end-to-end?",
    "Is the problem worth solving?",
    "How novel is the approach?",
    "Design / UX / polish",
    "Quality of the 3-min demo",
  ],
  prompts: [
    "Solve a problem your housemate has this weekend.",
    "Ship a CLI that makes one developer workflow 10× faster.",
    "Create a creative tool that would be impossible without AI.",
    "Build a tool that helps someone study for a real exam next week.",
  ],
} as const;

// 11. VC for a Day
export const vcForADay = {
  eyebrow: "Pillar 05",
  title: "VC for a Day",
  amount: 200000,
  amountLabel: "£200,000",
  subtitle:
    "Virtual capital, allocated by every attendee. The most promising teams actually get the funding they need.",
  footnote: "Not real money — allocations decide who takes home the real cash prize.",
  steps: [
    { n: "1", title: "Pitches", body: "3-min pitch + 2 min Q&A from every team." },
    { n: "2", title: "Due diligence", body: "Browse demos, kick the tyres, talk to founders." },
    { n: "3", title: "Allocation", body: "Each attendee splits £200k across up to 5 teams." },
    { n: "4", title: "Prize awarded", body: "Highest total allocation wins cash + mentorship." },
  ],
} as const;

// 12. Schedule / The Manifest
export const manifest = {
  eyebrow: "The manifest",
  title: "Three days. Departures board.",
  note: "Tentative · subject to change",
  days: [
    {
      day: "Friday",
      heading: "Kick-off",
      footnote: "Potential opening ceremony with VIPs.",
      items: [
        { time: "17:00", event: "Doors open · team-forming" },
        { time: "17:30", event: "Opening keynote" },
        { time: "18:00", event: "VIP talks / speeches" },
        { time: "18:30", event: "Technical Challenge opens + Ideathon briefing" },
        { time: "19:30", event: "Dinner · networking mixer" },
        { time: "20:30", event: "Night hacking (mentors on call)" },
      ],
    },
    {
      day: "Saturday",
      heading: "Build Day",
      footnote: null,
      items: [
        { time: "09:00", event: "Breakfast · standups" },
        { time: "10:30", event: "Workshop Track A / B" },
        { time: "12:30", event: "Lunch · sponsor booths" },
        { time: "14:00", event: "Workshop Track C / D" },
        { time: "15:30", event: "Talks block 1 (×3)" },
        { time: "16:30", event: "Focused hacking / mentor check-ins" },
        { time: "17:30", event: "Talks block 2 (×3)" },
        { time: "18:30", event: "Dinner · mixer" },
        { time: "20:30", event: "Night hacking" },
      ],
    },
    {
      day: "Sunday",
      heading: "Demo Day",
      footnote: null,
      items: [
        { time: "08:00", event: "Breakfast · blockers clinic" },
        { time: "09:00", event: "Workshop Track E / F" },
        { time: "11:00", event: "Leaderboard freezes" },
        { time: "12:00", event: "Lunch · final polish" },
        { time: "13:30", event: "Ideathon demos (3 min/team)" },
        { time: "15:00", event: "Technical Challenge finalists present" },
        { time: "16:00", event: "VC for a Day allocation opens" },
        { time: "17:00", event: "Awards · closing · group photo" },
        { time: "18:00", event: "After-party (sponsor-hosted)" },
      ],
    },
  ],
} as const;

// 13. What success looks like
export const success = {
  eyebrow: "What success looks like",
  title: "The bar we're setting",
  stats: [
    { value: 200, suffix: "+", label: "participants from Russell Group / Imperial / Oxbridge" },
    { value: 10, suffix: "+", label: "partner universities" },
    { value: 30, suffix: "%", label: "first-time hackathon attendees" },
  ],
  outcomes: [
    "Ship a portfolio project (working, git-tagged AI product)",
    "Network density (10+ new connections per attendee)",
    "Direct employer exposure (booths, mentorship, recruiting)",
    "Confidence shipping products independently",
  ],
} as const;

// 14. Sponsors
export const sponsors = {
  eyebrow: "Backed by",
  title: "Our partners",
  items: [
    { name: "IET", note: "Main sponsor" },
    { name: "Barclays", note: null },
    { name: "True Money", note: null },
    { name: "Southampton City Council", note: null },
    { name: "Carbon GPT", note: null },
  ],
  cta: { label: "Become a sponsor / partner with us", href: "mailto:aisoc@soton.ac.uk" },
} as const;

// 15. Boarding pass
export const boardingPass = {
  eyebrow: "Boarding now",
  title: "Get your boarding pass",
  subtitle: "All aboard. Claim your seat for the weekend builders ship.",
  pass: {
    carrier: "BOARDING PASS · SOTON SHIP 2026",
    passengerLabel: "PASSENGER",
    passengerPlaceholder: "YOUR NAME",
    from: "ANYWHERE, UK",
    to: "SOTON",
    gate: "EAGLE LABS",
    seat: "BUILDER",
    date: "16–18 OCT 2026",
    boarding: "FRI 17:00",
    flight: "SHIP 2026",
  },
  cta: "Get your boarding pass",
} as const;

// 16. Footer
export const footer = {
  contacts: ["aisoc@soton.ac.uk", "Ivan.ling@soton.ac.uk"],
  org: "University of Southampton AI Society",
  eventLine: "Soton Ship 2026 · 16–18 October 2026 (Tentative) · Eagle Labs, Southampton, UK.",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Discord", href: "#" },
    { label: "X", href: "#" },
  ],
} as const;
