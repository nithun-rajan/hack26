import PageShell from "@/components/PageShell";
import BoardingPass from "@/components/BoardingPass";
import PixelSprite from "@/components/PixelSprite";

export const metadata = { title: "Boarding Pass · SotonShip 26" };

export default function BoardingPassPage() {
  return (
    <PageShell
      code="Final stage 05/05"
      sprite="ticket"
      title="Boarding Pass"
      prev={{ label: "The Backers", href: "/sponsors" }}
    >
      {/* Southampton send-off — the city has launched great voyages since 1912 */}
      <section className="border-b border-violet-400/20 px-6 pb-12 pt-16 text-center">
        <div className="mx-auto max-w-7xl">
          <div className="inline-block animate-bob">
            <PixelSprite name="liner" size={7} />
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-violet-300/60 md:text-sm">
            Departing Southampton — launching great voyages since 1912.
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-violet-300/40">
            Iceberg-free route confirmed · we brought version control
          </p>
        </div>
      </section>

      <BoardingPass />
    </PageShell>
  );
}
