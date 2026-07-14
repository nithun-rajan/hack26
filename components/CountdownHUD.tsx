"use client";

// Pixel countdown HUD ticking toward doors-open: Fri 16 Oct 2026, 17:00.

import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-16T17:00:00").getTime();

function parts(ms: number) {
  const clamp = Math.max(0, ms);
  const d = Math.floor(clamp / 86_400_000);
  const h = Math.floor((clamp % 86_400_000) / 3_600_000);
  const m = Math.floor((clamp % 3_600_000) / 60_000);
  const s = Math.floor((clamp % 60_000) / 1000);
  return { d, h, m, s };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function CountdownHUD({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // placeholder before hydration to avoid mismatch
  const { d, h, m, s } = now === null ? { d: 0, h: 0, m: 0, s: 0 } : parts(TARGET - now);

  const cells: { v: string; label: string }[] = [
    { v: now === null ? "···" : String(d), label: "days" },
    { v: now === null ? "··" : pad(h), label: "hrs" },
    { v: now === null ? "··" : pad(m), label: "min" },
    { v: now === null ? "··" : pad(s), label: "sec" },
  ];

  return (
    <div className={`inline-flex items-stretch gap-2 ${className}`}>
      {cells.map((c, i) => (
        <div key={c.label} className="flex items-center gap-2">
          <div className="border border-violet-400/25 bg-violet-500/[0.07] px-3 py-2 text-center">
            <span className="pixel block text-2xl leading-none text-white md:text-3xl tabular-nums">
              {c.v}
            </span>
            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-violet-300/50">
              {c.label}
            </span>
          </div>
          {i < cells.length - 1 && <span className="pixel text-xl text-violet-300/40">:</span>}
        </div>
      ))}
    </div>
  );
}
