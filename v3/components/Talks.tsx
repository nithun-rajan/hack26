import { talks } from "@/lib/content";
import { Section, SectionHeading, Reveal } from "./ui/primitives";

export default function Talks() {
  return (
    <Section id="talks" bordered>
      <SectionHeading eyebrow={talks.eyebrow} title={talks.title} intro={talks.note} />

      <Reveal delay={0.1}>
        <div className="mt-14 overflow-hidden border border-violet-400/20">
          {talks.items.map((t, i) => (
            <div
              key={t.title}
              className="grid grid-cols-1 gap-2 border-b border-violet-400/20 p-6 transition-colors last:border-b-0 hover:bg-violet-500/[0.08] md:grid-cols-[64px_1fr_320px] md:items-center md:gap-6"
            >
              <span className="font-mono text-sm text-violet-300/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-pixel-circle text-lg">{t.title}</p>
              <p className="font-mono text-sm text-violet-200/70">{t.speaker}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
