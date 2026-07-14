"use client";

// Shared frame for every sub-page: level header, back-to-deck link, and
// prev/next "level" navigation at the bottom — like moving between game screens.

import Link from "next/link";
import { motion } from "framer-motion";
import { useSound } from "@/lib/sound";
import PixelSprite, { type SpriteName } from "./PixelSprite";
import PageBackdrop from "./PageBackdrop";
import type { ReactNode } from "react";

export type LevelLink = { label: string; href: string };

export default function PageShell({
  code,
  title,
  sprite,
  children,
  prev,
  next,
}: {
  code: string;
  title: string;
  sprite?: SpriteName;
  children: ReactNode;
  prev?: LevelLink;
  next?: LevelLink;
}) {
  const { blip } = useSound();

  return (
    <main className="relative min-h-screen">
      <PageBackdrop sprite={sprite} />

      <div className="relative z-10">
      {/* level header */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-violet-400/20 px-6 pb-6 pt-28"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-baseline justify-between gap-4">
          <div className="flex items-center gap-5">
            {sprite && (
              <span className="inline-flex animate-bob" aria-hidden>
                <PixelSprite name={sprite} size={4} />
              </span>
            )}
            <span className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/40">
              {code}
            </span>
            <h1 className="pixel text-2xl text-white md:text-3xl">{title}</h1>
          </div>
          <Link
            href="/"
            onMouseEnter={blip}
            className="font-mono text-xs uppercase tracking-[0.14em] text-violet-300/60 transition-colors hover:text-white"
          >
            ◀ Back to deck
          </Link>
        </div>
      </motion.div>

      {children}

      {/* level navigation */}
      <nav className="border-t border-violet-400/20 px-6 py-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.14em]">
          {prev ? (
            <Link
              href={prev.href}
              onMouseEnter={blip}
              className="border border-violet-400/30 px-4 py-3 text-violet-200/70 transition-colors hover:bg-white hover:text-violet-950"
            >
              ◀ {prev.label}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href="/"
            onMouseEnter={blip}
            className="hidden text-violet-300/40 transition-colors hover:text-white sm:block"
          >
            ▲ Deck
          </Link>
          {next ? (
            <Link
              href={next.href}
              onMouseEnter={blip}
              className="border border-violet-400/30 px-4 py-3 text-violet-200/70 transition-colors hover:bg-white hover:text-violet-950"
            >
              {next.label} ▶
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
      </div>
    </main>
  );
}
