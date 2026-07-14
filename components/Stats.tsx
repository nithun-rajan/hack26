import { CountUp, Reveal } from "./ui/primitives";
import HoverQuip from "./HoverQuip";
import type { SpriteName } from "./PixelSprite";

// Event-level headline figures — hover a number for a quip from the crew.
const stats: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  quip: string;
  sprite: SpriteName;
}[] = [
  {
    value: 200,
    suffix: "+",
    label: "builders",
    quip: "That's a lot o' deck hands!",
    sprite: "captain",
  },
  {
    value: 5,
    suffix: "",
    label: "pillars",
    quip: "Five islands, one map.",
    sprite: "helm",
  },
  {
    value: 3,
    suffix: "",
    label: "days of Ship Weekend",
    quip: "48 hours o' hacking, give or take a nap.",
    sprite: "map",
  },
  {
    value: 200,
    prefix: "£",
    suffix: "k",
    label: "virtual capital to allocate",
    quip: "Virtual doubloons, real prize!",
    sprite: "coin",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-violet-400/20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-violet-400/20 sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-y-0">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="px-6 py-12">
              <HoverQuip text={s.quip} sprite={s.sprite}>
                <p className="pixel text-5xl md:text-6xl">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
              </HoverQuip>
              <p className="mt-3 text-sm text-violet-300/60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
