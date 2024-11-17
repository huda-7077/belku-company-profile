import { Button } from "@/components/ui/button";

const JoinTeamsSection = () => {
  return (
    <section className="container mx-auto bg-red-50 px-4 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex-1">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Join Our Team
          </h2>
          <p className="text-gray-600">
            We are always on the lookout for talented individuals who are
            enthusiastic about making a difference. Explore our career
            opportunities and join us in our mission.
          </p>
        </div>
        <Button className="bg-red-500 px-8 text-white hover:bg-red-600">
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default JoinTeamsSection;
