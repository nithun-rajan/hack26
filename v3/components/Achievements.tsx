"use client";

// Retro achievement toasts. Listens for arcade:achievement events (fired via
// lib/arcade.ts unlock()) and pops a pixel toast top-right, once per session.

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Achievement } from "@/lib/arcade";
import PixelSprite from "./PixelSprite";

export default function Achievements() {
  const [toasts, setToasts] = useState<Achievement[]>([]);

  useEffect(() => {
    const onUnlock = (e: Event) => {
      const { id, title } = (e as CustomEvent<Achievement>).detail;
      const key = `ach:${id}`;
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
      setToasts((t) => [...t, { id, title }]);
      setTimeout(() => {
        setToasts((t) => t.filter((a) => a.id !== id));
      }, 4200);
    };
    window.addEventListener("arcade:achievement", onUnlock);
    return () => window.removeEventListener("arcade:achievement", onUnlock);
  }, []);

  return (
    <div className="pointer-events-none fixed right-5 top-20 z-50 flex flex-col gap-3 md:right-8">
      <AnimatePresence>
        {toasts.map((a) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-3 border border-violet-400/40 bg-deck px-4 py-3 shadow-[4px_4px_0_0_rgba(124,58,237,0.35)]"
          >
            <PixelSprite name="coin" size={3} />
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300/60">
                ★ Achievement unlocked
              </p>
              <p className="pixel mt-1 text-sm text-white">{a.title}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
