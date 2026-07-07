import PageShell from "@/components/PageShell";
import Talks from "@/components/Talks";

export const metadata = { title: "Talks · SotonShip 26" };

export default function TalksPage() {
  return (
    <PageShell
      code="Level 02/05"
      sprite="megaphone"
      title="Talks"
      prev={{ label: "Workshops", href: "/pillars/workshops" }}
      next={{ label: "Technical Challenge", href: "/pillars/technical-challenge" }}
    >
      <Talks />
    </PageShell>
  );
}
