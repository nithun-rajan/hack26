import PageShell from "@/components/PageShell";
import Sponsors from "@/components/Sponsors";

export const metadata = { title: "The Backers · SotonShip 26" };

export default function SponsorsPage() {
  return (
    <PageShell
      code="Stage 04/05"
      sprite="anchor"
      title="The Backers"
      prev={{ label: "The Manifest", href: "/manifest" }}
      next={{ label: "Boarding Pass", href: "/boarding-pass" }}
    >
      <Sponsors />
    </PageShell>
  );
}
