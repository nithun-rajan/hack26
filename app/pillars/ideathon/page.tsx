import PageShell from "@/components/PageShell";
import Ideathon from "@/components/Ideathon";

export const metadata = { title: "Creative Ideathon · SotonShip 26" };

export default function IdeathonPage() {
  return (
    <PageShell
      code="Level 04/05"
      sprite="bulb"
      title="Creative Ideathon"
      prev={{ label: "Technical Challenge", href: "/pillars/technical-challenge" }}
      next={{ label: "VC for a Day", href: "/pillars/vc-for-a-day" }}
    >
      <Ideathon />
    </PageShell>
  );
}
