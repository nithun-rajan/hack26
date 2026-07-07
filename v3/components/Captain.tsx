"use client";

// Captain Bytebeard — the site's resident NPC. He peeks from the bottom-left
// corner, pops up with a page-specific quip when you arrive, rises fully on
// hover, and cycles quips when clicked. All lines are original.

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { useSound } from "@/lib/sound";
import PixelSprite from "./PixelSprite";

const GLOBAL_QUIPS = [
  "Ahoy, builder! The tide favours those who ship.",
  "A smooth sea never made a skilled shipper.",
  "Rule one o' the sea: demo it, or it didn't happen.",
  "I've sailed many stacks. This one's seaworthy.",
  "Click the big ship sometime. She likes to toot.",
];

const ROUTE_QUIPS: Record<string, string[]> = {
  "/": [
    "Welcome aboard! Arrow keys steer the menu, ⏎ sets sail.",
    "Turn the sound on, sailor — the sea has a soundtrack.",
  ],
  "/mission": [
    "Every voyage needs a why. This here be ours.",
    "200+ deck hands and not a single lecture. Glorious.",
  ],
  "/pillars": [
    "Five islands to conquer. Pick yer level, sailor.",
    "No wrong choice here — but the coin one pays.",
  ],
  "/pillars/workshops": ["Sharpen yer tools before the storm hits."],
  "/pillars/talks": ["Twenty minutes o' signal, zero slide padding."],
  "/pillars/technical-challenge": ["No pretrained crutches on this island. Pure craft."],
  "/pillars/ideathon": ["Ship something delightful in 24 hours. I believe in ye."],
  "/pillars/vc-for-a-day": ["Virtual doubloons, real treasure. Allocate wisely."],
  "/manifest": [
    "Check the departures twice — the sea waits for no one.",
    "Friday 17:00 sharp. Stragglers swab the deck.",
  ],
  "/sponsors": ["These fine folk keep the ship afloat. Salute 'em!"],
  "/boarding-pass": [
    "No stowaways! Grab yer pass and hop aboard.",
    "Seat: BUILDER. Best seat on the whole vessel.",
    "Southampton's been launchin' legends since 1912. Yer next.",
  ],
};

export default function Captain() {
  const pathname = usePathname();
  const { blip } = useSound();
  const [popped, setPopped] = useState(false);
  const [idx, setIdx] = useState(0);

  const lines = useMemo(
    () => [...(ROUTE_QUIPS[pathname] ?? []), ...GLOBAL_QUIPS],
    [pathname]
  );

  // pop up shortly after arriving on a page, then duck back down
  useEffect(() => {
    setIdx(0);
    const show = setTimeout(() => setPopped(true), 2200);
    const hide = setTimeout(() => setPopped(false), 10500);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [pathname]);

  return (
    <div
      className={`group fixed bottom-0 left-5 z-40 transition-transform duration-500 ease-out hover:translate-y-0 md:left-8 ${
        popped ? "translate-y-0" : "translate-y-[72%]"
      }`}
    >
      {/* speech bubble */}
      <div
        className={`absolute bottom-full left-0 mb-3 w-56 transition-opacity duration-300 group-hover:opacity-100 ${
          popped ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="border border-violet-400/40 bg-deck px-3 py-2.5 font-mono text-[11px] uppercase leading-relaxed tracking-[0.06em] text-violet-100 shadow-[4px_4px_0_0_rgba(124,58,237,0.35)]">
          <span className="mb-1 block text-[9px] text-violet-300/60">Capt. Bytebeard:</span>
          {lines[idx % lines.length]}
        </div>
        <span aria-hidden className="ml-6 block h-2 w-2 bg-violet-400/40" />
      </div>

      {/* the captain himself */}
      <button
        type="button"
        aria-label="Talk to Captain Bytebeard"
        title="Arr?"
        onClick={() => {
          setPopped(true);
          setIdx((i) => i + 1);
          blip();
        }}
        className="block cursor-pointer border-0 bg-transparent p-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400"
      >
        <span className="inline-block transition-transform duration-200 group-hover:animate-bob">
          <PixelSprite name="captain" size={6} />
        </span>
      </button>
    </div>
  );
}
