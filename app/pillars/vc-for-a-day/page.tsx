import PageShell from "@/components/PageShell";
import VCForADay from "@/components/VCForADay";

export const metadata = { title: "VC for a Day · SotonShip 26" };

export default function VCForADayPage() {
  return (
    <PageShell
      code="Level 05/05"
      sprite="coin"
      title="VC for a Day"
      prev={{ label: "Creative Ideathon", href: "/pillars/ideathon" }}
      next={{ label: "The Manifest", href: "/manifest" }}
    >
      <VCForADay />
    </PageShell>
  );
}
