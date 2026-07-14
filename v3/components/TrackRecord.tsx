import { trackRecord } from "@/lib/content";
import { Section, SectionHeading, Reveal, CountUp } from "./ui/primitives";
import Photo from "./ui/Photo";

export default function TrackRecord() {
  return (
    <Section id="track-record" bordered>
      <SectionHeading eyebrow={trackRecord.eyebrow} title={trackRecord.title} />

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {trackRecord.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="card p-7">
              <div className="pixel text-4xl md:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm text-violet-300/60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <Photo
          src="group-photo.jpg"
          alt="Participants and organisers together at the previous hackathon"
          caption="BT Hackathon '24 — the full house"
          className="mt-10 h-64 w-full md:h-80"
        />
      </Reveal>

      <Reveal delay={0.1}>
        <figure className="mt-6 border border-violet-400/20 bg-violet-500/[0.07] p-10 md:p-14">
          <blockquote className="font-pixel-circle text-2xl leading-snug md:text-4xl">
            “{trackRecord.quote.text}”
          </blockquote>
          <figcaption className="mt-6 font-mono text-sm text-violet-300/60">
            {trackRecord.quote.author} — {trackRecord.quote.role}
          </figcaption>
        </figure>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-6 font-mono text-sm text-violet-200/70">{trackRecord.note}</p>
      </Reveal>
    </Section>
  );
}
