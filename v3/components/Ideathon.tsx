import { ideathon } from "@/lib/content";
import { Section, SectionHeading, Reveal } from "./ui/primitives";

export default function Ideathon() {
  return (
    <Section id="ideathon" bordered>
      <SectionHeading eyebrow={ideathon.eyebrow} title={ideathon.title} intro={ideathon.intro} />

      <div className="mt-14 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="card h-full p-8">
            <p className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/60">Judged on</p>
            <ul className="mt-6 space-y-4">
              {ideathon.judgedOn.map((j) => (
                <li key={j} className="flex items-start gap-3 text-violet-100/85">
                  <span className="mt-1 text-violet-300/40">→</span>
                  <span>{j}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card h-full p-8">
            <p className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/60">
              Example prompts
            </p>
            <div className="mt-6 space-y-3">
              {ideathon.prompts.map((p) => (
                <p
                  key={p}
                  className="border border-violet-400/20 bg-violet-500/[0.07] p-4 font-mono text-sm text-violet-100/85"
                >
                  “{p}”
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
