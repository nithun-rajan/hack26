import PageShell from "@/components/PageShell";
import ChapterSelect from "@/components/ChapterSelect";
import Stats from "@/components/Stats";
import Opportunity from "@/components/Opportunity";
import WhoWeAre from "@/components/WhoWeAre";
import TrackRecord from "@/components/TrackRecord";
import Success from "@/components/Success";

export const metadata = { title: "The Mission · SotonShip 26" };

export default function MissionPage() {
  return (
    <PageShell
      code="Stage 01/05"
      sprite="flag"
      title="The Mission"
      next={{ label: "Five Pillars", href: "/pillars" }}
    >
      <Stats />
      <ChapterSelect
        chapters={[
          { id: "opportunity", label: "The Opportunity", sprite: "flag", content: <Opportunity /> },
          { id: "who-we-are", label: "Who We Are", sprite: "mate", content: <WhoWeAre /> },
          { id: "track-record", label: "Track Record", sprite: "chart", content: <TrackRecord /> },
          { id: "the-bar", label: "The Bar We're Setting", sprite: "coin", content: <Success /> },
        ]}
      />
    </PageShell>
  );
}
