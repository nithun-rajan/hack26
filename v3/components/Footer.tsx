import { footer, event } from "@/lib/content";
import PixelSprite from "./PixelSprite";

export default function Footer() {
  return (
    <footer className="border-t border-violet-400/20">
      {/* mini ship sails across pixel waves on every page */}
      <div aria-hidden className="relative h-14 w-full overflow-hidden border-b border-violet-400/20">
        <div className="absolute bottom-2 left-0 animate-sail">
          <PixelSprite name="miniship" size={3} />
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-[6px]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #6d28d9 0 10px, transparent 10px 26px)",
          }}
        />
      </div>

      <div className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            <div className="max-w-sm">
              <div className="pixel text-lg text-white">
                SotonShip<span className="text-violet-300/60">26</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-violet-300/60">{footer.eventLine}</p>
              <p className="mt-3 text-sm text-violet-300/40">{footer.org}</p>
            </div>

            <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/40">
                  Contact
                </p>
                <ul className="mt-4 space-y-2">
                  {footer.contacts.map((c) => (
                    <li key={c}>
                      <a
                        href={`mailto:${c}`}
                        className="text-sm text-violet-200/70 transition-colors hover:text-white"
                      >
                        {c}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/40">
                  Follow
                </p>
                <ul className="mt-4 space-y-2">
                  {footer.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="text-sm text-violet-200/70 transition-colors hover:text-white"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-violet-400/20 pt-6 font-mono text-xs text-violet-300/40 md:flex-row md:items-center">
            <span>© 2026 {footer.org}.</span>
            <span>Departures · {event.datesShort}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
