"use client";

// ↑↑↓↓←→←→ B A — the classics. Triggers a pixel coin/ship downpour, fires a
// secret achievement, and gives the captain a reason to cheer.

import { useEffect, useState } from "react";
import { unlock } from "@/lib/arcade";
import { useSound } from "@/lib/sound";
import PixelSprite, { type SpriteName } from "./PixelSprite";

const CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const DROPS: { left: number; delay: number; dur: number; sprite: SpriteName; size: number }[] =
  Array.from({ length: 28 }, (_, i) => ({
    left: (i * 53 + 7) % 100,
    delay: (i * 137) % 900,
    dur: 2200 + ((i * 311) % 1800),
    sprite: (["coin", "miniship", "gull"] as SpriteName[])[i % 3],
    size: 3 + (i % 3),
  }));

export default function KonamiEasterEgg() {
  const [raining, setRaining] = useState(false);
  const { horn } = useSound();

  useEffect(() => {
    let pos = 0;
    const onKey = (e: KeyboardEvent) => {
      const want = CODE[pos];
      if (e.key.toLowerCase() === want.toLowerCase()) {
        pos++;
        if (pos === CODE.length) {
          pos = 0;
          setRaining(true);
          horn();
          unlock("konami", "Konami captain");
          window.setTimeout(() => setRaining(false), 5200);
        }
      } else {
        pos = e.key === CODE[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [horn]);

  if (!raining) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[70] overflow-hidden">
      {DROPS.map((d, i) => (
        <span
          key={i}
          className="absolute -top-10 animate-fall"
          style={{
            left: `${d.left}%`,
            animationDelay: `${d.delay}ms`,
            animationDuration: `${d.dur}ms`,
          }}
        >
          <PixelSprite name={d.sprite} size={d.size} />
        </span>
      ))}
    </div>
  );
}
