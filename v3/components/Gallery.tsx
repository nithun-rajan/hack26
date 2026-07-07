import { Section, SectionHeading, Reveal } from "./ui/primitives";

// Placeholder mosaic — swap these tiles for real event photography later.
// `tall` tiles span two rows to create the masonry rhythm.
const tiles: { caption: string; tall?: boolean }[] = [
  { caption: "Kick-off keynote", tall: true },
  { caption: "Team-forming" },
  { caption: "Workshop floor" },
  { caption: "Night hacking", tall: true },
  { caption: "Mentor check-ins" },
  { caption: "Sponsor booths" },
  { caption: "Demo day", tall: true },
  { caption: "VC allocation floor" },
  { caption: "Awards & closing" },
];

export default function Gallery() {
  return (
    <Section id="gallery" bordered>
      <SectionHeading
        eyebrow="Last year aboard"
        title="The weekend, in frames."
        intro="A taste of the build energy. Real photography drops in here closer to the event."
      />

      <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-4 md:grid-cols-4">
        {tiles.map((t, i) => (
          <Reveal
            key={t.caption}
            delay={(i % 4) * 0.05}
            className={t.tall ? "row-span-2" : "row-span-1"}
          >
            <div className="radial-thumb group relative flex h-full items-end overflow-hidden border border-violet-400/20 bg-violet-500/[0.08] p-4 transition-colors hover:border-violet-300/50">
              <span className="font-mono text-xs text-violet-200/70 transition-colors group-hover:text-white">
                {t.caption}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
