import TeamPage from "@/components/TeamPage/TeamPage";
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
      {/* <TeamPage /> */}
    </main>
  );
};

export default TeamsPage;
