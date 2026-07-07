import { success } from "@/lib/content";
import { Section, SectionHeading, Reveal, CountUp } from "./ui/primitives";

export default function Success() {
  return (
    <Section id="success" bordered>
      <SectionHeading eyebrow={success.eyebrow} title={success.title} />

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {success.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="card p-8">
              <div className="pixel text-4xl md:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm text-violet-300/60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {success.outcomes.map((o, i) => (
          <Reveal key={o} delay={i * 0.05}>
            <div className="flex items-start gap-3 border border-violet-400/20 bg-violet-500/[0.05] p-5">
              <span className="mt-0.5 text-violet-300/40">→</span>
              <span className="text-violet-100/85">{o}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
