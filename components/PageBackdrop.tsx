// Decorative background layer — a twinkling pixel-star field, a huge faint
// watermark of the page's sprite, and a ghost ship drifting across the deep.
// Deterministic star positions (no Math.random) keep SSR hydration stable.

import PixelSprite, { type SpriteName } from "./PixelSprite";

const STARS = Array.from({ length: 42 }, (_, i) => ({
  left: (i * 73 + 11) % 100,
  top: (i * 37 + 17) % 100,
  size: 2 + ((i * 31) % 3),
  delay: (i * 47) % 60, // tenths of a second
  dim: i % 3 === 0,
}));

export default function PageBackdrop({
  sprite,
  ship = true,
}: {
  sprite?: SpriteName;
  ship?: boolean;
}) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* pixel-star field */}
      {STARS.map((s, i) => (
        <span
          key={i}
          className={`absolute animate-twinkle ${s.dim ? "bg-violet-400/25" : "bg-violet-200/40"}`}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay / 10}s`,
          }}
        />
      ))}

      {/* giant watermark of the page's sprite, anchored like a HUD emblem */}
      {sprite && (
        <div className="absolute -bottom-14 -right-16 opacity-[0.05]">
          <PixelSprite name={sprite} size={32} />
        </div>
      )}

      {/* ghost ship drifting across the deep */}
      {ship && (
        <div className="absolute top-[30%] left-0 animate-drift opacity-[0.08]">
          <PixelSprite name="miniship" size={9} />
        </div>
      )}
    </div>
  );
}
