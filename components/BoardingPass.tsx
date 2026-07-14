"use client";

import { useState, type FormEvent } from "react";
import { boardingPass as bp } from "@/lib/content";
import { Section, SectionHeading, Reveal } from "./ui/primitives";

export default function BoardingPass() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Placeholder handler — swap in a real backend / form provider here later.
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="boarding-pass" bordered>
      <SectionHeading eyebrow={bp.eyebrow} title={bp.title} intro={bp.subtitle} align="center" />

      <Reveal delay={0.1}>
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative flex flex-col overflow-hidden border border-violet-400/25 bg-violet-500/[0.08] md:flex-row">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

            {/* main stub */}
            <div className="flex-1 p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/60">
                  {bp.pass.carrier}
                </span>
                <span aria-hidden className="pixel text-sm text-violet-200/70">S26</span>
              </div>

              <form onSubmit={handleSubmit} className="mt-8">
                <label className="block font-mono text-[10px] uppercase tracking-eyebrow text-violet-300/60">
                  {bp.pass.passengerLabel}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={bp.pass.passengerPlaceholder}
                  className="mt-1 w-full border-b border-violet-400/25 bg-transparent pb-2 font-mono text-lg uppercase text-white placeholder:text-violet-300/40 focus:border-white focus:outline-none"
                  aria-label="Passenger name"
                />

                <div className="mt-8 grid grid-cols-3 gap-4 font-mono">
                  <Field label="FROM" value={bp.pass.from} />
                  <Field label="TO" value={bp.pass.to} />
                  <Field label="GATE" value={bp.pass.gate} />
                  <Field label="DATE" value={bp.pass.date} />
                  <Field label="BOARDING" value={bp.pass.boarding} />
                  <Field label="SEAT" value={bp.pass.seat} />
                </div>

                <button
                  type="submit"
                  className="mt-9 w-full bg-white px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-violet-950 transition-colors hover:bg-violet-200"
                >
                  {submitted ? "✓ Aboard — see you in October!" : bp.cta}
                </button>
                {submitted && (
                  <p className="mt-3 text-center font-mono text-xs text-violet-300/60">
                    Saved for {name || "passenger"}. (Demo — wire to a backend to issue real tickets.)
                  </p>
                )}
              </form>
            </div>

            {/* perforated edge */}
            <div className="relative flex items-center">
              <div className="hidden h-full border-l-2 border-dashed border-violet-400/25 md:block" />
              <div className="block w-full border-t-2 border-dashed border-violet-400/25 md:hidden" />
            </div>

            {/* tear-off stub */}
            <div className="flex flex-col items-center justify-center gap-3 bg-violet-500/[0.07] p-8 md:w-52">
              <span className="font-mono text-[10px] uppercase tracking-eyebrow text-violet-300/60">
                Flight
              </span>
              <span className="font-mono text-sm text-white">{bp.pass.flight}</span>
              <div className="mt-2 flex h-16 items-end gap-[2px]" aria-hidden>
                {Array.from({ length: 26 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-[2px] bg-white/70"
                    style={{ height: `${30 + ((i * 37) % 70)}%` }}
                  />
                ))}
              </div>
              <span className="font-mono text-[10px] tracking-widest text-violet-300/60">
                {bp.pass.seat}-2026
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-eyebrow text-violet-300/60">{label}</p>
      <p className="mt-1 text-sm text-white">{value}</p>
    </div>
  );
}
