import { FC } from "react";
import { Card } from "@/components/ui/card";
import { Team } from "@/types/team";
interface TeamProps {
  teams: Team[];
}

const ExecutiveSection: FC<TeamProps> = ({ teams }) => {
  const owners = teams.filter((team) => team.division === "owner");
  //   console.log(teams);

  return (
    <section className="min-h-screen bg-gradient-to-b from-red-950 to-slate-900 p-8">
      <div className="mx-auto max-w-2xl">
        {owners.map((owner, index) => (
          <Card
            key={index}
            className="rounded-lg border border-red-500/20 bg-slate-900/50 p-8 shadow-lg backdrop-blur-sm"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-red-500/50 ring-4 ring-orange-400/20">
                  <img
                    src={owner.thumbnail}
                    alt={owner.thumbnailName}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h2 className="mb-2 text-2xl font-bold text-red-400">
                {owner.name}
              </h2>

              <h3 className="mb-4 text-lg text-orange-400">{owner.role}</h3>

              <p className="max-w-lg leading-relaxed text-orange-100/80">
                {owner.description}
              </p>

              <div className="mt-6 flex gap-2">
                {[1, 2, 3, 4, 5].map((pepper) => (
                  <span
                    key={pepper}
                    className="text-2xl text-red-500"
                    role="img"
                    aria-label="hot pepper"
                  >
                    🌶️
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExecutiveSection;
