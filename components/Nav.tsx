"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, event } from "@/lib/content";
import { useSound } from "@/lib/sound";
import { unlock } from "@/lib/arcade";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { on, toggle, blip } = useSound();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "border-violet-400/20 bg-[#0b0516]/70" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="pixel text-base leading-none text-white">
          SotonShip<span className="text-violet-300/60">26</span>
        </Link>

        <div className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.12em] text-violet-200/70 md:flex">
          {nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onMouseEnter={blip}
              className={`transition-colors hover:text-white ${
                pathname === l.href ? "text-white" : ""
              }`}
            >
              {pathname === l.href && <span aria-hidden>▶ </span>}
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => {
              if (!on) unlock("bgm", "BGM engaged");
              toggle();
            }}
            aria-pressed={on}
            className={`border px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
              on
                ? "border-violet-300/60 text-white"
                : "border-violet-400/30 text-violet-300/60 hover:text-white"
            }`}
          >
            ♪ {on ? "ON" : "OFF"}
          </button>
          <Link
            href={nav.cta.href}
            onMouseEnter={blip}
            className="border border-violet-400/30 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-violet-950"
          >
            {event.ctaPrimary}
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center border border-violet-400/30 font-mono text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-sm leading-none">{open ? "[x]" : "[=]"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-violet-400/20 bg-[#0b0516]/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.12em] text-violet-100/85"
              >
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggle}
              className="border border-violet-400/30 px-4 py-2 text-left font-mono text-xs uppercase tracking-[0.12em] text-violet-100/85"
            >
              ♪ Sound {on ? "on" : "off"}
            </button>
            <Link
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="bg-white px-4 py-2 text-center font-mono text-xs font-semibold uppercase tracking-[0.12em] text-violet-950"
            >
              {event.ctaPrimary}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
