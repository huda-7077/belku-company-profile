"use client";
import { useState, useEffect, FC } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { fetchTeamData, TeamData, Member } from "@/lib/randomuser";
import { staticTeamData } from "@/data/teamData";
import { Team } from "@/types/team";

interface TeamProps {
  teams: Team[];
}

const OurTeamsSection: FC<TeamProps> = ({ teams }) => {
  const members = teams.filter((team) => team.division === "member");

  const [teamData, setTeamData] = useState<TeamData>({
    engineering: [],
    marketing: [],
    support: [],
  });

  useEffect(() => {
    const getTeamData = async () => {
      try {
        const data = await fetchTeamData();
        setTeamData(data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    getTeamData();
  }, []);

  return (
    <section className="flex items-center justify-center bg-gradient-to-b from-yellow-600 to-orange-600 p-6 md:min-h-screen">
      <Tabs defaultValue="management" className="w-full max-w-7xl">
        <TabsList className="mb-6 w-full rounded-lg bg-yellow-700 p-1">
          <TabsTrigger
            value="management"
            className="overflow-hidden text-ellipsis whitespace-nowrap rounded px-4 py-2 text-white hover:bg-yellow-600"
          >
            Management Team
          </TabsTrigger>
          <TabsTrigger
            value="engineering"
            className="overflow-hidden text-ellipsis whitespace-nowrap rounded px-4 py-2 text-white hover:bg-yellow-600"
          >
            Engineering
          </TabsTrigger>
          <TabsTrigger
            value="marketing"
            className="overflow-hidden text-ellipsis whitespace-nowrap rounded px-4 py-2 text-white hover:bg-yellow-600"
          >
            Marketing
          </TabsTrigger>
          <TabsTrigger
            value="support"
            className="overflow-hidden text-ellipsis whitespace-nowrap rounded px-4 py-2 text-white hover:bg-yellow-600"
          >
            Customer Support
          </TabsTrigger>
        </TabsList>

        <TabsContent value="management">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div
                key={index}
                className="transform rounded-lg bg-yellow-800 p-6 text-center shadow-lg transition-transform hover:scale-105 hover:bg-yellow-700 hover:shadow-xl"
              >
                <Image
                  src={member.thumbnail}
                  alt={member.thumbnailName}
                  className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
                  width={96}
                  height={96}
                />
                <h3 className="mb-2 text-xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="mb-3 text-yellow-300">{member.role}</p>
                <p className="mb-4 text-gray-400">{member.description}</p>
                <p className="text-sm text-gray-300">{member.quotes}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        {Object.entries(teamData).map(([team, members]) => (
          <TabsContent key={team} value={team}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member: Member, index: number) => {
                const staticData =
                  staticTeamData[team as keyof typeof staticTeamData][index];

                return (
                  <div
                    key={index}
                    className="transform rounded-lg bg-yellow-800 p-6 text-center shadow-lg transition-transform hover:scale-105 hover:bg-yellow-700 hover:shadow-xl"
                  >
                    <Image
                      src={member.picture.large}
                      alt={`${member.name.first} ${member.name.last}`}
                      className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
                      width={96}
                      height={96}
                    />
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {member.name.first} {member.name.last}
                    </h3>
                    <p className="mb-3 text-yellow-300">{staticData.role}</p>
                    <p className="mb-4 text-gray-300">
                      {staticData.description}
                    </p>
                    <p className="text-sm text-gray-400">{staticData.detail}</p>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default OurTeamsSection;
