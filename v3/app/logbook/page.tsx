import PageShell from "@/components/PageShell";
import Gallery from "@/components/Gallery";

export const metadata = { title: "The Logbook · SotonShip 26" };

export default function LogbookPage() {
  return (
    <PageShell
      code="Ship's Log"
      sprite="gull"
      title="The Logbook"
      prev={{ label: "The Backers", href: "/sponsors" }}
      next={{ label: "Boarding Pass", href: "/boarding-pass" }}
    >
      <Gallery />
    </PageShell>
  );
}
