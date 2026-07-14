import { vcForADay } from "@/lib/content";
import { Section, SectionHeading, Reveal, CountUp } from "./ui/primitives";
import HoverQuip from "./HoverQuip";

export default function VCForADay() {
  return (
    <Section id="vc-for-a-day" bordered>
      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-white/[0.05] blur-[120px]" />
        <SectionHeading
          eyebrow={vcForADay.eyebrow}
          title={vcForADay.title}
          align="center"
        />

        <Reveal delay={0.1}>
          <div className="relative mt-14 flex flex-col items-center text-center">
            <HoverQuip text="Spend it wisely, guv'nor." sprite="coin">
              <div className="pixel text-6xl md:text-8xl">
                <CountUp value={vcForADay.amount} prefix="£" />
              </div>
            </HoverQuip>
            <p className="mt-6 max-w-xl text-lg text-violet-200/70">{vcForADay.subtitle}</p>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {vcForADay.steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.07}>
            <div className="card relative h-full p-7">
              <span className="flex h-10 w-10 items-center justify-center border border-violet-400/25 font-mono text-sm text-violet-100/85">
                {s.n}
              </span>
              <h3 className="mt-5 font-pixel-circle text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-violet-200/70">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 text-center font-mono text-xs text-violet-300/40">* {vcForADay.footnote}</p>
      </Reveal>
    </Section>
  );
}
