"use client";

// Level-select screen for the five pillars — each pillar is a playable level.

import Link from "next/link";
import { pillars } from "@/lib/content";
import { Section, SectionHeading, Reveal } from "./ui/primitives";
import { useSound } from "@/lib/sound";
import PixelSprite, { type SpriteName } from "./PixelSprite";

const LEVEL_ROUTES: Record<string, string> = {
  "01": "/pillars/workshops",
  "02": "/pillars/talks",
  "03": "/pillars/technical-challenge",
  "04": "/pillars/ideathon",
  "05": "/pillars/vc-for-a-day",
};

const LEVEL_SPRITES: Record<string, SpriteName> = {
  "01": "wrench",
  "02": "megaphone",
  "03": "chart",
  "04": "bulb",
  "05": "coin",
};

export default function LevelSelect() {
  const { blip } = useSound();

  return (
    <Section id="pillars">
      <SectionHeading
        eyebrow={pillars.eyebrow}
        title="Select a level."
        intro="Five strands, one weekend. Enter a pillar to see how it plays."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pillars.items.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.06}>
            <Link
              href={LEVEL_ROUTES[p.n]}
              onMouseEnter={blip}
              className="group card block h-full p-8 transition-colors duration-200 hover:border-violet-300/50 hover:bg-violet-500/[0.14]"
            >
              <div className="flex items-start justify-between">
                <span className="pixel text-3xl text-violet-300/60 transition-colors group-hover:text-white" aria-hidden>
                  {p.n}
                </span>
                <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-violet-300/40 transition-colors group-hover:text-violet-200/70">
                  Level {p.n}
                  <PixelSprite
                    name={LEVEL_SPRITES[p.n]}
                    size={3}
                    className="transition-transform duration-200 group-hover:-translate-y-1"
                  />
                </span>
              </div>
              <h3 className="mt-6 font-pixel-circle text-2xl">{p.name}</h3>
              <p className="mt-3 text-violet-200/70">{p.body}</p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-violet-300/40 transition-colors group-hover:text-white">
                ▶ Press start
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
