import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinTeamsSection = () => {
  return (
    <section className="bg-gradient-to-b from-orange-500 to-red-600 px-4 py-16 md:min-h-[45vh] md:py-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex-1">
          <h2 className="mb-4 text-3xl font-bold text-white">Join Our Team</h2>
          <p className="text-white">
            We are always on the lookout for talented individuals who are
            enthusiastic about making a difference. Explore our career
            opportunities and join us in our mission.
          </p>
        </div>
        <Link href="/about#contact-me" passHref>
          <Button className="bg-red-700 px-8 text-white transition duration-300 hover:bg-orange-700">
            Join Us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default JoinTeamsSection;
