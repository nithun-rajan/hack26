import { whoWeAre } from "@/lib/content";
import { Section, SectionHeading, Reveal, CountUp } from "./ui/primitives";
import Photo from "./ui/Photo";

const COMMUNITY_PHOTOS = [
  { src: "group-photo.jpg", alt: "The full cohort at last year's hackathon", caption: "The crew" },
  { src: "lightning-talk.jpg", alt: "A speaker mid-talk to a packed room", caption: "On the mic" },
  { src: "pizza.jpg", alt: "Members grabbing pizza between sessions", caption: "Fuel stop" },
  { src: "networking.jpg", alt: "Members networking on the floor", caption: "Networking" },
];

export default function WhoWeAre() {
  return (
    <Section id="about" bordered>
      <SectionHeading eyebrow={whoWeAre.eyebrow} title={whoWeAre.title} intro={whoWeAre.blurb} />

      {/* community in frames — a slice of who "we" are */}
      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
        {COMMUNITY_PHOTOS.map((p, i) => (
          <Reveal key={p.src} delay={(i % 4) * 0.05}>
            <Photo src={p.src} alt={p.alt} caption={p.caption} className="h-40" />
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-violet-400/20 bg-violet-400/20 md:grid-cols-4">
        {whoWeAre.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="h-full bg-deck p-8">
              <div className="pixel text-4xl md:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm text-violet-300/60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-3">
          {whoWeAre.doList.map((item) => (
            <span
              key={item}
              className="border border-violet-400/20 bg-violet-500/[0.07] px-4 py-2 font-mono text-xs text-violet-200/70"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
