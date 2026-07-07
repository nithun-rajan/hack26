import { opportunity } from "@/lib/content";
import { Section, SectionHeading, Reveal } from "./ui/primitives";

export default function Opportunity() {
  return (
    <Section id="opportunity" bordered>
      <SectionHeading eyebrow={opportunity.eyebrow} title={opportunity.title} />

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {opportunity.cards.map((card, i) => (
          <Reveal key={card.label} delay={i * 0.06}>
            <article className="group card h-full p-8 transition-colors duration-300 hover:border-violet-300/50 hover:bg-violet-500/[0.14]">
              <div className="radial-thumb mb-9 h-28 border border-violet-400/20" />
              <p className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/60">
                {card.label}
              </p>
              <p className="mt-3 text-lg leading-relaxed text-violet-100/85">{card.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
