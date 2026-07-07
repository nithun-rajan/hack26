import { technicalChallenge } from "@/lib/content";
import { Section, SectionHeading, Reveal } from "./ui/primitives";

export default function TechnicalChallenge() {
  return (
    <Section id="technical-challenge" bordered>
      <SectionHeading eyebrow={technicalChallenge.eyebrow} title={technicalChallenge.title} />

      <div className="mt-14 grid gap-px overflow-hidden border border-violet-400/20 bg-violet-400/20 md:grid-cols-2">
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
