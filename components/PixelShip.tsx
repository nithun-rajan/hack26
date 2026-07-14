"use client";

// Original pixel-art container ship, drawn on a character grid and rendered
// as crisp SVG squares. Legend: # hull/bridge (white), a/b/c container shades
// (violet), w bridge window, ~ waves. Hover: the hull rocks and puffs pixel
// smoke while the waves speed up. Click: foghorn.

import { useSound } from "@/lib/sound";
import { unlock } from "@/lib/arcade";

const HULL = [
  "........#.....................................",
  "........#.....................................",
  "......#####...................................",
  "......#w#w#...................................",
  "......#####..aaaa.bbbb.......cccc.............",
  "......#####..aaaa.bbbb.aaaa..cccc.bbbb........",
  "......#####..aaaa.bbbb.aaaa..cccc.bbbb.aa.....",
  "....##############################################",
  "....############################################..",
  ".....#########################################....",
  ".......####################################.......",
];

const WAVES = [
  "..~~~....~~~~........~~....~~~~~......~~....~~~...",
  ".......~~........~~~~..........~~..........~~.....",
];

const COLORS: Record<string, string> = {
  "#": "#ffffff",
  a: "#c4b5fd",
  b: "#7c3aed",
  c: "#a78bfa",
  w: "#0b0516",
  "~": "#6d28d9",
};

const CELL = 8;

function cells(art: string[], yOffset: number) {
  return art.flatMap((row, y) =>
    Array.from(row).map((ch, x) => {
      const fill = COLORS[ch];
      if (!fill) return null;
      return (
        <rect
          key={`${x}-${y + yOffset}`}
          x={x * CELL}
          y={(y + yOffset) * CELL}
          width={CELL}
          height={CELL}
          fill={fill}
        />
      );
    })
  );
}

export default function PixelShip({ className = "" }: { className?: string }) {
  const { horn } = useSound();
  const cols = Math.max(...[...HULL, ...WAVES].map((r) => r.length));
  const rows = HULL.length + 1 + WAVES.length;

  return (
    <button
      type="button"
      onClick={() => {
        horn();
        unlock("foghorn", "Foghorn sounded");
      }}
      aria-label="Sound the ship's foghorn"
      title="Toot!"
      className={`ship-group relative block cursor-pointer border-0 bg-transparent p-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 ${className}`}
    >
      {/* pixel smoke puffs above the funnel (col ~8 of the grid) */}
      <span aria-hidden className="pointer-events-none absolute left-[13%] top-[-14%]">
        <span className="ship-smoke absolute block h-2 w-2 bg-violet-300" style={{ animationDelay: "0s" }} />
        <span className="ship-smoke absolute left-2 block h-1.5 w-1.5 bg-violet-400" style={{ animationDelay: "0.4s" }} />
        <span className="ship-smoke absolute -left-2 block h-1.5 w-1.5 bg-violet-200" style={{ animationDelay: "0.8s" }} />
      </span>

      <svg
        viewBox={`0 0 ${cols * CELL} ${rows * CELL}`}
        width={cols * CELL}
        height={rows * CELL}
        className="h-auto max-w-full"
        shapeRendering="crispEdges"
        role="img"
        aria-label="Pixel art of a container ship departing"
      >
        <g className="ship-hull">{cells(HULL, 0)}</g>
        <g className="ship-waves">{cells(WAVES, HULL.length + 1)}</g>
      </svg>
    </button>
  );
}
