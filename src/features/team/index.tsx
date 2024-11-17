import DescriptionSection from "./DescriptionSection";
import OurTeamsSection from "./OurTeamsSection";
import ExecutiveSection from "./ExecutiveSection";
import { getEntriesTeam } from "@/lib/contentful";
import JoinTeamsSection from "./JoinTeamsSection";

const TeamsPage = async () => {
  const teams = await getEntriesTeam();
  if (!teams) {
    return;
  }
  return (
    <main>
      <DescriptionSection />
      <ExecutiveSection teams={teams} />
      <OurTeamsSection teams={teams} />
      <JoinTeamsSection />
    </main>
  );
};

export default TeamsPage;
