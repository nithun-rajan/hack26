"use client";

// Game-style hover dialog: wrap any element and a pixel speech box pops above
// it with a mini sprite and a flavor line.

import type { ReactNode } from "react";
import { useSound } from "@/lib/sound";
import PixelSprite, { type SpriteName } from "./PixelSprite";

export default function HoverQuip({
  text,
  sprite = "miniship",
  children,
  className = "",
}: {
  text: string;
  sprite?: SpriteName;
  children: ReactNode;
  className?: string;
}) {
  const { blip } = useSound();

  return (
    <span
      className={`group/quip relative inline-block cursor-help ${className}`}
      onMouseEnter={blip}
    >
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 hidden w-max max-w-[260px] -translate-x-1/2 group-hover/quip:block">
        <span className="flex items-center gap-2.5 border border-violet-400/40 bg-deck px-3 py-2 font-mono text-[11px] uppercase tracking-[0.06em] text-violet-100 shadow-[4px_4px_0_0_rgba(124,58,237,0.35)]">
          <PixelSprite name={sprite} size={2} className="shrink-0" />
          {text}
        </span>
        <span aria-hidden className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 bg-violet-400/40" />
      </span>
    </span>
  );
}
