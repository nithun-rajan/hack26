import { pillars } from "@/lib/content";
import { Section, SectionHeading, Reveal } from "./ui/primitives";

export default function Pillars() {
  return (
    <Section id="pillars" bordered>
      <SectionHeading eyebrow={pillars.eyebrow} title={pillars.title} />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pillars.items.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.06}>
            <article className="group card h-full p-8 transition-colors duration-300 hover:border-violet-300/50 hover:bg-violet-500/[0.14]">
              <div className="flex items-start justify-between">
                <span className="pixel text-3xl text-violet-300/60 transition-colors group-hover:text-white" aria-hidden>{p.n}</span>
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-violet-300/40 transition-colors group-hover:text-violet-100/85" aria-hidden>
                  [{p.n}/05]
                </span>
              </div>
              <h3 className="mt-6 font-pixel-circle text-2xl">{p.name}</h3>
              <p className="mt-3 text-violet-200/70">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
