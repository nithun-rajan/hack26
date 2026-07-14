import { technicalChallenge } from "@/lib/content";
import { Section, SectionHeading, Reveal } from "./ui/primitives";
import Photo from "./ui/Photo";

export default function TechnicalChallenge() {
  return (
    <Section id="technical-challenge" bordered>
      <SectionHeading eyebrow={technicalChallenge.eyebrow} title={technicalChallenge.title} />

      <Reveal delay={0.08}>
        <Photo
          src="hacking-hall.jpg"
          alt="Teams heads-down building in the lecture hall"
          caption="Heads-down build time"
          className="mt-12 h-64 w-full md:h-80"
        />
      </Reveal>

      <div className="mt-6 grid gap-px overflow-hidden border border-violet-400/20 bg-violet-400/20 md:grid-cols-2">
        {technicalChallenge.rows.map((row, i) => (
          <Reveal key={row.label} delay={i * 0.06}>
            <div className="h-full bg-deck p-8">
              <p className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/60">
                {row.label}
              </p>
              <p className="mt-3 text-lg leading-relaxed text-violet-100/85">{row.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
