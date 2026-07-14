// Original pixel-art sprite library — every icon is hand-drawn on a character
// grid and rendered as crisp SVG squares, same technique as PixelShip.
// Legend: # main, l light violet, p mid violet, d deep violet.

const SPRITES = {
  // mission — expedition flag
  flag: [
    "#lllllllll",
    "#llddllddl",
    "#llllllll.",
    "#lddllddl.",
    "#lllllll..",
    "#.........",
    "#.........",
    "#.........",
  ],
  // pillars — ship's helm
  helm: [
    "#...#...#",
    ".#..#..#.",
    "..#####..",
    "#..#l#..#",
    "####l####",
    "#..#l#..#",
    "..#####..",
    ".#..#..#.",
    "#...#...#",
  ],
  // workshops — spanner
  wrench: [
    "##....##",
    "##....##",
    ".######.",
    "...##...",
    "...##...",
    "...##...",
    "..####..",
    "..####..",
  ],
  // talks — megaphone
  megaphone: [
    "...#........",
    "...###.....l",
    "...#####....",
    "...########l",
    "...#####....",
    "...###.....l",
    "...#........",
  ],
  // technical challenge — leaderboard bars
  chart: [
    "#........",
    "#.....ll.",
    "#.....ll.",
    "#.pp..ll.",
    "#.pp..ll.",
    "#.pp..ll.",
    "#########",
  ],
  // ideathon — lightbulb
  bulb: [
    ".#####.",
    "#lllll#",
    "#lllll#",
    "#lllll#",
    ".#lll#.",
    "..###..",
    "..ppp..",
    "..ppp..",
    "...#...",
  ],
  // vc for a day — coin
  coin: [
    "..####..",
    ".#llll#.",
    "#ll##ll#",
    "#l####l#",
    "#l####l#",
    "#ll##ll#",
    ".#llll#.",
    "..####..",
  ],
  // manifest — logbook
  map: [
    "#########",
    "#.......#",
    "#.ppppp.#",
    "#.......#",
    "#.ppppp.#",
    "#.......#",
    "#.ppp...#",
    "#########",
  ],
  // backers — anchor
  anchor: [
    "...###...",
    "...#.#...",
    "...###...",
    "....#....",
    ".#######.",
    "....#....",
    "....#....",
    "#...#...#",
    "##..#..##",
    ".#######.",
  ],
  // boarding pass — ticket
  ticket: [
    "############",
    "#..........#",
    "#.pppppp.p.#",
    "#..........#",
    "#.pppp...p.#",
    "#..........#",
    "############",
  ],
  // footer sail-by — mini container ship
  miniship: [
    "..#..........",
    "..#..ll.dd...",
    ".###.ll.dd...",
    "#############",
    ".###########.",
    "..#########..",
  ],
  // Captain Bytebeard — resident pirate mascot (hat, eyepatch, beard, coat)
  captain: [
    "...dddddd...",
    "..dddddddd..",
    "..########..",
    "..llllllll..",
    "..lkkllkll..",
    "..llllllll..",
    "..l#llll#l..",
    "..########..",
    "...######...",
    "..dddddddd..",
    ".ddd####ddd.",
    ".dd.####.dd.",
  ],
  // grand four-funnel ocean liner — a nod to Southampton's 1912 departures
  liner: [
    "....dd...dd...dd...dd..........",
    "....dd...dd...dd...dd..........",
    "...######################......",
    "...#kk#kk#kk#kk#kk#kk#k#.......",
    "..########################.....",
    ".ddddddddddddddddddddddddddd...",
    ".dddd##dd##dd##dd##dd##ddddd...",
    "..ddddddddddddddddddddddddd....",
    "...ddddddddddddddddddddddd.....",
  ],
  // first mate — sailor cap and striped shirt
  mate: [
    "...######...",
    "..########..",
    "..########..",
    "...llllll...",
    "...lkllkl...",
    "...llllll...",
    "....llll....",
    "..dddddddd..",
    ".dd##dd##dd.",
    ".dddddddddd.",
    "..dd....dd..",
  ],
  // seagull on the wing
  gull: [
    "###......###",
    "..##....##..",
    "...######...",
    "....####....",
  ],
} as const;

export type SpriteName = keyof typeof SPRITES;

const LIGHT: Record<string, string> = {
  "#": "#ffffff",
  l: "#c4b5fd",
  p: "#a78bfa",
  d: "#7c3aed",
  k: "#0b0516",
};

// used when the sprite sits on an inverted (white) row
const DARK: Record<string, string> = {
  "#": "#2e1065",
  l: "#7c3aed",
  p: "#6d28d9",
  d: "#4c1d95",
  k: "#ffffff",
};

export default function PixelSprite({
  name,
  size = 4,
  variant = "light",
  className = "",
}: {
  name: SpriteName;
  size?: number;
  variant?: "light" | "dark";
  className?: string;
}) {
  const art = SPRITES[name];
  const palette = variant === "dark" ? DARK : LIGHT;
  const cols = Math.max(...art.map((r) => r.length));

  return (
    <svg
      viewBox={`0 0 ${cols * size} ${art.length * size}`}
      width={cols * size}
      height={art.length * size}
      shapeRendering="crispEdges"
      aria-hidden
      className={`inline-block ${className}`}
    >
      {art.flatMap((row, y) =>
        Array.from(row).map((ch, x) => {
          const fill = palette[ch];
          if (!fill) return null;
          return (
            <rect key={`${x}-${y}`} x={x * size} y={y * size} width={size} height={size} fill={fill} />
          );
        })
      )}
    </svg>
  );
}
