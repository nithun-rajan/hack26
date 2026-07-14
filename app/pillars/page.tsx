import PageShell from "@/components/PageShell";
import LevelSelect from "@/components/LevelSelect";

export const metadata = { title: "Five Pillars · SotonShip 26" };

export default function PillarsPage() {
  return (
    <PageShell
      code="Stage 02/05"
      sprite="helm"
      title="Five Pillars"
      prev={{ label: "The Mission", href: "/mission" }}
      next={{ label: "The Manifest", href: "/manifest" }}
    >
      <LevelSelect />
    </PageShell>
  );
}
