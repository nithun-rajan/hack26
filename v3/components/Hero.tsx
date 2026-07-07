"use client";

// Title screen — a game main menu. ↑/↓ (or W/S) moves the cursor, Enter
// boards the selected destination. Hovering blips, the ship toots on click.

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { event } from "@/lib/content";
import { useSound } from "@/lib/sound";
import { unlock } from "@/lib/arcade";
import PixelShip from "./PixelShip";
import PixelSprite, { type SpriteName } from "./PixelSprite";
import PageBackdrop from "./PageBackdrop";
import CountdownHUD from "./CountdownHUD";

const MENU: { n: string; label: string; sub: string; href: string; sprite: SpriteName }[] = [
  { n: "01", label: "The Mission", sub: "Why we ship", href: "/mission", sprite: "flag" },
  { n: "02", label: "Five Pillars", sub: "Level select", href: "/pillars", sprite: "helm" },
  { n: "03", label: "The Manifest", sub: "3-day schedule", href: "/manifest", sprite: "map" },
  { n: "04", label: "The Backers", sub: "Sponsors & partners", href: "/sponsors", sprite: "anchor" },
  { n: "05", label: "Boarding Pass", sub: "Claim your seat", href: "/boarding-pass", sprite: "ticket" },
];

export default function Hero() {
  const [sel, setSel] = useState(0);
  const router = useRouter();
  const { blip } = useSound();

  const move = useCallback(
    (dir: 1 | -1) => {
      setSel((s) => (s + dir + MENU.length) % MENU.length);
      blip();
    },
    [blip]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "s") move(1);
      else if (e.key === "ArrowUp" || e.key === "w") move(-1);
      else if (e.key === "Enter") {
        unlock("navigator", "Keyboard navigator");
        router.push(MENU[sel].href);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move, router, sel]);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-6 pt-32 md:pt-36">
      {/* star field only — the hero already has its own interactive ship */}
      <PageBackdrop ship={false} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
      {/* faint purple glow behind the wordmark */}
      <div className="pointer-events-none absolute left-1/2 top-16 h-[380px] w-[640px] -translate-x-1/2 bg-violet-600/15 blur-[140px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/60"
        >
          {event.org} presents
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="pixel mt-6 text-[13vw] leading-[0.9] md:text-[8.5rem]"
        >
          SotonShip
          <span className="text-violet-400">26</span>
          <span
            aria-hidden
            className="ml-2 inline-block h-[0.72em] w-[0.5em] translate-y-[0.08em] bg-violet-300 animate-blink"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 font-mono text-sm uppercase tracking-[0.18em] text-violet-200/70 md:text-base"
        >
          {event.tagline} · {event.venueShort} · {event.datesShort}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-violet-300/50">
            ▮ Doors open in
          </p>
          <CountdownHUD />
        </motion.div>

        <div className="mt-12 flex flex-1 flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* game menu */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full max-w-xl"
          >
            <p className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/40">
              Select destination — ↑↓ + ⏎
            </p>
            <ul className="mt-4 border-t border-violet-400/20" role="menu">
              {MENU.map((m, i) => {
                const active = i === sel;
                return (
                  <li key={m.href} role="none" className="border-b border-violet-400/20">
                    <Link
                      role="menuitem"
                      href={m.href}
                      onMouseEnter={() => {
                        setSel(i);
                        blip();
                      }}
                      className={`flex items-baseline justify-between gap-4 py-4 transition-colors ${
                        active ? "bg-white px-4 text-violet-950" : "text-white"
                      }`}
                    >
                      <span className="flex items-center">
                        <span
                          aria-hidden
                          className={`pixel mr-3 inline-block w-5 text-2xl md:text-3xl ${
                            active ? "text-violet-700" : "text-transparent"
                          }`}
                        >
                          ▶
                        </span>
                        <PixelSprite
                          name={m.sprite}
                          size={3}
                          variant={active ? "dark" : "light"}
                          className="mr-3 shrink-0"
                        />
                        <span className="pixel text-2xl md:text-3xl">{m.label}</span>
                      </span>
                      <span
                        className={`font-mono text-xs uppercase tracking-[0.18em] ${
                          active ? "text-violet-800" : "text-violet-300/60"
                        }`}
                      >
                        {m.n} · {m.sub}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-violet-300/40">
              <span className="animate-blink">▮</span> Insert coin · {event.builders} · free entry
            </p>
          </motion.div>

          {/* the ship — hover to sail, click to toot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex justify-center pb-10 md:justify-end md:pt-10"
          >
            <div className="animate-bob">
              <PixelShip className="w-[320px] md:w-[430px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
