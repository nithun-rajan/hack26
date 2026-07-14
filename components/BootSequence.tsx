"use client";

// CRT power-on boot screen, shown once per session. Types out a fake POST
// readout, fills a loading bar, then waits on PRESS START — which dismisses
// the overlay and kicks off the chiptune (a real user gesture).

import { useCallback, useEffect, useRef, useState } from "react";
import { useSound } from "@/lib/sound";

const LINES = [
  "SOTONSHIP OS v2.6 ............. OK",
  "MEMORY CHECK ......... 65,536 KB OK",
  "MOUNTING /dev/hackathon ....... OK",
  "LOADING PIXEL FLEET ........... OK",
  "CHIPTUNE DRIVER ............ READY",
  "CAPT. BYTEBEARD ........... AWAKE",
];

export default function BootSequence() {
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(0); // how many POST lines revealed
  const [ready, setReady] = useState(false); // PRESS START available
  const { on, toggle } = useSound();
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem("booted")) return;
    setShow(true);
    LINES.forEach((_, i) => {
      timers.current.push(window.setTimeout(() => setShown(i + 1), 260 * (i + 1)));
    });
    timers.current.push(window.setTimeout(() => setReady(true), 260 * LINES.length + 400));
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const dismiss = useCallback(() => {
    if (!ready) return;
    sessionStorage.setItem("booted", "1");
    if (!on) toggle(); // start the music on the way in
    setShow(false);
  }, [ready, on, toggle]);

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        dismiss();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show, dismiss]);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={dismiss}
      aria-label="Press start to enter"
      className="crt-boot fixed inset-0 z-[100] flex cursor-pointer flex-col items-start justify-center bg-deck px-8 text-left md:px-24"
    >
      <div className="w-full max-w-2xl">
        <p className="pixel mb-8 text-2xl text-white md:text-4xl">
          SotonShip<span className="text-violet-400">26</span>
          <span className="ml-1 inline-block h-[0.7em] w-[0.5em] translate-y-[0.08em] animate-blink bg-violet-300" />
        </p>

        <div className="min-h-[168px] font-mono text-xs uppercase leading-relaxed tracking-[0.08em] text-violet-200/80 md:text-sm">
          {LINES.slice(0, shown).map((l) => (
            <p key={l}>
              <span className="text-violet-300/50">&gt; </span>
              {l}
            </p>
          ))}
        </div>

        {/* loading bar */}
        <div className="mt-6 h-4 w-full border border-violet-400/40">
          <div
            className="h-full bg-violet-500 transition-all duration-300 ease-linear"
            style={{ width: `${(shown / LINES.length) * 100}%` }}
          />
        </div>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-violet-300/60">
          {ready ? (
            <span className="animate-blink text-white">▶ Press start</span>
          ) : (
            <span>Booting…</span>
          )}
        </p>
      </div>
    </button>
  );
}
