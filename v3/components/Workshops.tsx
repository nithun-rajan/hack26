import { workshops } from "@/lib/content";
import { Section, SectionHeading, Reveal } from "./ui/primitives";
import Photo from "./ui/Photo";

export default function Workshops() {
  return (
    <Section id="workshops" bordered>
      <SectionHeading eyebrow={workshops.eyebrow} title={workshops.title} />

      <Reveal delay={0.08}>
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          <Photo
            src="coding-workshop.jpg"
            alt="Mentor walking through a live-coded dashboard"
            caption="Live build-alongs"
            className="h-52 md:h-60"
          />
          <Photo
            src="workshop-floor.jpg"
            alt="Students following a workshop in a lecture theatre"
            caption="Full workshop floor"
            className="h-52 md:h-60"
          />
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workshops.tracks.map((t, i) => (
          <Reveal key={t.track} delay={i * 0.05}>
            <article className="group card flex h-full flex-col p-7 transition-colors hover:border-violet-300/50 hover:bg-violet-500/[0.14]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/60">
                  {t.track}
                </span>
                <span className="border border-violet-400/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-violet-200/70">
                  {t.level}
                </span>
              </div>
              <h3 className="mt-4 font-pixel-circle text-xl">{t.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-violet-200/70">{t.body}</p>
              <p className="mt-5 font-mono text-xs text-violet-300/60">{t.duration}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-6 font-mono text-xs text-violet-300/40">* {workshops.note}</p>
      </Reveal>
    </Section>
  );
}
