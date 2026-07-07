import PageShell from "@/components/PageShell";
import Manifest from "@/components/Manifest";
import Gallery from "@/components/Gallery";

export const metadata = { title: "The Manifest · SotonShip 26" };

export default function ManifestPage() {
  return (
    <PageShell
      code="Stage 03/05"
      sprite="map"
      title="The Manifest"
      prev={{ label: "Five Pillars", href: "/pillars" }}
      next={{ label: "The Backers", href: "/sponsors" }}
    >
      <Manifest />
      <Gallery />
    </PageShell>
  );
}
