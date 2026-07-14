"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

// -----------------------------------------------------------------------------
// Section — generous vertical rhythm + scroll anchor (max-w-7xl)
// -----------------------------------------------------------------------------
export function Section({
  id,
  children,
  className = "",
  bordered = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${bordered ? "border-t border-violet-400/20" : ""} px-6 py-28 md:py-36 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Section heading — mono eyebrow + pixel display title
// -----------------------------------------------------------------------------
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        {eyebrow && (
          <p className="eyebrow mb-5">
            <span className="mr-2 text-violet-300/40" aria-hidden>
              ▚
            </span>
            {eyebrow}
          </p>
        )}
        <h2 className="pixel text-3xl leading-[1.1] md:text-5xl">{title}</h2>
        {intro && <p className="mt-6 text-lg leading-8 text-violet-200/70">{intro}</p>}
      </div>
    </Reveal>
  );
}

// -----------------------------------------------------------------------------
// Reveal — scroll fade-in (steps easing for a slightly CRT feel)
// -----------------------------------------------------------------------------
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// CountUp — animated number when scrolled into view
// -----------------------------------------------------------------------------
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1600,
  className = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-GB")}
      {suffix}
    </span>
  );
}

// -----------------------------------------------------------------------------
// Button — square retro terminal button, uppercase mono
// -----------------------------------------------------------------------------
export function Button({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  withArrow?: boolean;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-150";
  const styles =
    variant === "primary"
      ? "bg-white text-violet-950 hover:bg-violet-200"
      : "border border-violet-400/30 text-white hover:bg-white hover:text-violet-950";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      <span aria-hidden className="text-violet-300/60 transition-colors group-hover:text-inherit">
        [
      </span>
      {children}
      {withArrow && <span aria-hidden>↗</span>}
      <span aria-hidden className="text-violet-300/60 transition-colors group-hover:text-inherit">
        ]
      </span>
    </a>
  );
}
