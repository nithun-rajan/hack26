import { talks } from "@/lib/content";
import { Section, SectionHeading, Reveal } from "./ui/primitives";
import Photo from "./ui/Photo";

export default function Talks() {
  return (
    <Section id="talks" bordered>
      <SectionHeading eyebrow={talks.eyebrow} title={talks.title} intro={talks.note} />

      <Reveal delay={0.08}>
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          <Photo
            src="iet-talk.jpg"
            alt="Industry speaker presenting to the room"
            caption="Industry keynotes"
            className="h-52 md:h-60"
          />
          <Photo
            src="lightning-talk.jpg"
            alt="Speaker delivering a talk to a packed room"
            caption="Lightning talks"
            className="h-52 md:h-60"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 overflow-hidden border border-violet-400/20">
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
