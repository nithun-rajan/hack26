"use client";

// Game-style chapter selector: a row of sprite buttons, one chapter of content
// visible at a time. Turns long pages into click-through screens.

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSound } from "@/lib/sound";
import PixelSprite, { type SpriteName } from "./PixelSprite";

export type Chapter = {
  id: string;
  label: string;
  sprite: SpriteName;
  content: ReactNode;
};

export default function ChapterSelect({ chapters }: { chapters: Chapter[] }) {
  const [sel, setSel] = useState(0);
  const { blip } = useSound();

  return (
    <div>
      <div className="border-b border-violet-400/20 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/40">
            Choose a chapter:
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {chapters.map((c, i) => {
              const active = i === sel;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setSel(i);
                    blip();
                  }}
                  onMouseEnter={blip}
                  aria-pressed={active}
                  className={`flex items-center gap-3 border px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                    active
                      ? "border-white bg-white text-violet-950"
                      : "border-violet-400/30 text-violet-200/70 hover:border-violet-300/60 hover:text-white"
                  }`}
                >
                  <PixelSprite name={c.sprite} size={3} variant={active ? "dark" : "light"} />
                  {c.label}
                  <span aria-hidden className={active ? "" : "opacity-0"}>
                    ◀
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={chapters[sel].id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
        >
          {chapters[sel].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
