import PageShell from "@/components/PageShell";
import Workshops from "@/components/Workshops";

export const metadata = { title: "Workshops · SotonShip 26" };

export default function WorkshopsPage() {
  return (
    <PageShell
      code="Level 01/05"
      sprite="wrench"
      title="Workshops"
      prev={{ label: "Level select", href: "/pillars" }}
      next={{ label: "Talks", href: "/pillars/talks" }}
    >
      <Workshops />
    </PageShell>
  );
}
