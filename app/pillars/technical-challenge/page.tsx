import PageShell from "@/components/PageShell";
import TechnicalChallenge from "@/components/TechnicalChallenge";

export const metadata = { title: "Technical Challenge · SotonShip 26" };

export default function TechnicalChallengePage() {
  return (
    <PageShell
      code="Level 03/05"
      sprite="chart"
      title="Technical Challenge"
      prev={{ label: "Talks", href: "/pillars/talks" }}
      next={{ label: "Creative Ideathon", href: "/pillars/ideathon" }}
    >
      <TechnicalChallenge />
    </PageShell>
  );
}
