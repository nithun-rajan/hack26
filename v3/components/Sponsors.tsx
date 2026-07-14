import { sponsors } from "@/lib/content";
import { Section, SectionHeading, Reveal, Button } from "./ui/primitives";
import HoverQuip from "./HoverQuip";
import SponsorLogo from "./SponsorLogo";
import type { SpriteName } from "./PixelSprite";

// hover a backer and a crew member pops out with a salute
const CREW: { sprite: SpriteName; quip: string }[] = [
  { sprite: "captain", quip: "The finest wind in our sails!" },
  { sprite: "mate", quip: "Keeps the treasury stocked. Salute!" },
  { sprite: "gull", quip: "Squawk! A true friend o' the fleet!" },
  { sprite: "miniship", quip: "Fuel for the voyage. Much obliged." },
  { sprite: "coin", quip: "Doubloons well invested, says the crew." },
];

export default function Sponsors() {
  return (
    <Section id="sponsors" bordered>
      <SectionHeading eyebrow={sponsors.eyebrow} title={sponsors.title} align="center" />

      <Reveal delay={0.1}>
        <div className="mt-14 grid grid-cols-2 overflow-hidden border border-violet-400/20 sm:grid-cols-3 md:grid-cols-3">
          {sponsors.items.map((s, i) => (
            <div
              key={s.name}
              className="group relative flex h-40 flex-col items-center justify-center gap-3 border-b border-r border-violet-400/20 px-6 text-center transition-colors hover:bg-violet-500/[0.08]"
            >
              <HoverQuip
                text={CREW[i % CREW.length].quip}
                sprite={CREW[i % CREW.length].sprite}
                className="w-full"
              >
                <SponsorLogo name={s.name} logo={s.logo} />
              </HoverQuip>
              {s.note && (
                <span className="border border-violet-400/25 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-violet-300/60">
                  {s.note}
                </span>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex justify-center">
          <Button href={sponsors.cta.href} variant="secondary" withArrow>
            {sponsors.cta.label}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
