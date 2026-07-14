"use client";

// The manifest as a game save-slot picker: choose a day, see its departures.

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { manifest } from "@/lib/content";
import { Section, SectionHeading } from "./ui/primitives";
import { useSound } from "@/lib/sound";
import PixelSprite, { type SpriteName } from "./PixelSprite";

const DAY_SPRITES: SpriteName[] = ["flag", "wrench", "coin"];

export default function Manifest() {
  const [sel, setSel] = useState(0);
  const { blip } = useSound();
  const day = manifest.days[sel];

  return (
    <Section id="manifest" bordered>
      <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
        <SectionHeading eyebrow={manifest.eyebrow} title={manifest.title} />
        <span className="border border-violet-400/25 px-3 py-1.5 font-mono text-xs text-violet-200/70">
          {manifest.note}
        </span>
      </div>

      {/* day selector — like picking a save slot */}
      <div className="mt-12 flex flex-wrap gap-3">
        {manifest.days.map((d, i) => {
          const active = i === sel;
          return (
            <button
              key={d.day}
              type="button"
              onClick={() => {
                setSel(i);
                blip();
              }}
              onMouseEnter={blip}
              aria-pressed={active}
              className={`flex items-center gap-3 border px-5 py-4 transition-colors ${
                active
                  ? "border-white bg-white text-violet-950"
                  : "border-violet-400/30 text-white hover:border-violet-300/60"
              }`}
            >
              <PixelSprite name={DAY_SPRITES[i]} size={3} variant={active ? "dark" : "light"} />
              <span className="text-left">
                <span className="pixel block text-lg leading-none">{d.day}</span>
                <span
                  className={`mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] ${
                    active ? "text-violet-700" : "text-violet-300/60"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}/03 · {d.heading}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* the selected day's departures board */}
      <AnimatePresence mode="wait">
        <motion.div
          key={day.day}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="mt-8 max-w-3xl"
        >
          <div className="flex h-full flex-col overflow-hidden border border-violet-400/20">
            <div className="flex items-baseline justify-between border-b border-violet-400/20 bg-violet-500/[0.07] px-6 py-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/60">
                  {day.day}
                </p>
                <p className="pixel mt-1 text-xl">{day.heading}</p>
              </div>
              <span className="font-mono text-xs text-violet-300/40">
                {String(sel + 1).padStart(2, "0")}/03
              </span>
            </div>

            <ul className="flex-1 divide-y divide-violet-400/10 px-6 py-2">
              {day.items.map((item) => (
                <li key={item.time + item.event} className="flex gap-4 py-3.5">
                  <span className="shrink-0 font-mono text-sm tabular-nums text-violet-300/60">
                    {item.time}
                  </span>
                  <span className="text-sm text-violet-100/85">{item.event}</span>
                </li>
              ))}
            </ul>

            {day.footnote && (
              <p className="border-t border-violet-400/20 px-6 py-3 font-mono text-[11px] text-violet-300/40">
                {day.footnote}
              </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
