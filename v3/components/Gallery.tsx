import { Section, SectionHeading, Reveal } from "./ui/primitives";
import Photo from "./ui/Photo";

// Full event mosaic for the dedicated Logbook page. `tall` tiles span two rows
// to keep the masonry rhythm; portrait / hero shots go tall.
const tiles: { caption: string; src: string; alt: string; tall?: boolean }[] = [
  { caption: "Opening keynote", src: "keynote-hall.jpg", alt: "Packed hall at the opening keynote", tall: true },
  { caption: "Team-forming", src: "roundtable.jpg", alt: "Round-table team-forming session" },
  { caption: "Workshop floor", src: "workshop-floor.jpg", alt: "Students in a workshop lecture theatre" },
  { caption: "On the mic", src: "opening-talk.jpg", alt: "Organiser opening the event", tall: true },
  { caption: "Live build-along", src: "coding-workshop.jpg", alt: "Mentor demoing a live-coded dashboard" },
  { caption: "Industry keynote", src: "iet-talk.jpg", alt: "Industry speaker presenting" },
  { caption: "The whole crew", src: "group-photo.jpg", alt: "The full cohort group photo", tall: true },
  { caption: "Mentor check-ins", src: "mentor-demo.jpg", alt: "Small group at a demo screen" },
  { caption: "Lightning talks", src: "lightning-talk.jpg", alt: "Speaker delivering a talk" },
  { caption: "Heads-down hacking", src: "hacking-hall.jpg", alt: "Teams building in the lecture hall" },
  { caption: "Networking floor", src: "networking.jpg", alt: "Participants networking" },
  { caption: "Fuel stop", src: "pizza.jpg", alt: "Members grabbing pizza" },
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
            <Photo src={t.src} alt={t.alt} caption={t.caption} className="h-full" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
