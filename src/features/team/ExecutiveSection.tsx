import { FC } from "react";
import { Card } from "@/components/ui/card";
import { Team } from "@/types/team";

interface TeamProps {
  teams: Team[];
}

const ExecutiveSection: FC<TeamProps> = ({ teams }) => {
  const owners = teams.filter((team) => team.division === "owner");

  return (
    <section className="flex items-center justify-center bg-gradient-to-b from-red-800 to-red-900 p-8 md:min-h-[90vh]">
      <div className="w-full max-w-2xl">
        {owners.length > 0 && (
          <Card className="rounded-lg border border-red-500 bg-red-900/50 p-8 shadow-lg backdrop-blur-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-red-700 hover:shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-red-500/50 ring-4 ring-orange-400/20">
                  <img
                    src={owners[0].thumbnail}
                    alt={owners[0].thumbnailName}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h2 className="mb-2 text-2xl font-bold text-red-400">
                {owners[0].name}
              </h2>

              <h3 className="mb-4 text-lg text-orange-400">{owners[0].role}</h3>

              <p className="max-w-lg text-sm leading-relaxed text-orange-100/80 md:text-base">
                {owners[0].description}
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
        )}
      </div>
    </section>
  );
};

export default ExecutiveSection;
