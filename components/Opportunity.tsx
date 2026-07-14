import { opportunity } from "@/lib/content";
import { Section, SectionHeading, Reveal } from "./ui/primitives";
import Photo from "./ui/Photo";

// One photo per card, in the same order as opportunity.cards
// (Problem, Solution, Audience, What you'll leave with).
const CARD_PHOTOS = [
  { src: "workshop-floor.jpg", alt: "Students in a lecture theatre during a workshop" },
  { src: "coding-workshop.jpg", alt: "Mentor demoing a live-coded dashboard" },
  { src: "keynote-hall.jpg", alt: "Packed hall at the opening keynote" },
  { src: "networking.jpg", alt: "Participants networking between sessions" },
];

export default function Opportunity() {
  return (
    <Section id="opportunity" bordered>
      <SectionHeading eyebrow={opportunity.eyebrow} title={opportunity.title} />

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {opportunity.cards.map((card, i) => (
          <Reveal key={card.label} delay={i * 0.06}>
            <article className="group card h-full p-8 transition-colors duration-300 hover:border-violet-300/50 hover:bg-violet-500/[0.14]">
              <Photo
                src={CARD_PHOTOS[i % CARD_PHOTOS.length].src}
                alt={CARD_PHOTOS[i % CARD_PHOTOS.length].alt}
                className="mb-9 h-40"
              />
              <p className="font-mono text-xs uppercase tracking-eyebrow text-violet-300/60">
                {card.label}
              </p>
              <p className="mt-3 text-lg leading-relaxed text-violet-100/85">{card.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
