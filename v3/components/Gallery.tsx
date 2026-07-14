import { Section, SectionHeading, Reveal } from "./ui/primitives";

// Real event photography from last year aboard. Files live in /public/gallery.
// `tall` tiles span two rows to keep the masonry rhythm; portrait shots go tall.
// Plain <img> needs the GitHub Pages base path prefixed manually (next/image is
// not used here — output is a static export with unoptimized images).
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const tiles: { caption: string; src: string; tall?: boolean }[] = [
  { caption: "Opening keynote", src: "keynote-hall.jpg", tall: true },
  { caption: "Team-forming", src: "roundtable.jpg" },
  { caption: "Workshop floor", src: "workshop-floor.jpg" },
  { caption: "On the mic", src: "opening-talk.jpg", tall: true },
  { caption: "Mentor check-ins", src: "mentor-demo.jpg" },
  { caption: "Lightning talks", src: "lightning-talk.jpg" },
  { caption: "The whole crew", src: "group-photo.jpg", tall: true },
  { caption: "Networking floor", src: "networking.jpg" },
  { caption: "Fuel stop", src: "pizza.jpg" },
];

export default function Gallery() {
  return (
    <Section id="gallery" bordered>
      <SectionHeading
        eyebrow="Last year aboard"
        title="The weekend, in frames."
        intro="A taste of the build energy — talks, workshops, mentor floors and the crew that made it happen."
      />

      <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-4 md:grid-cols-4">
        {tiles.map((t, i) => (
          <Reveal
            key={t.src}
            delay={(i % 4) * 0.05}
            className={t.tall ? "row-span-2" : "row-span-1"}
          >
            <div className="radial-thumb group relative flex h-full items-end overflow-hidden border border-violet-400/20 bg-violet-500/[0.08] transition-colors hover:border-violet-300/50">
              <img
                src={`${base}/gallery/${t.src}`}
                alt={t.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="relative p-4 font-mono text-xs text-violet-100/90 transition-colors group-hover:text-white">
                {t.caption}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
