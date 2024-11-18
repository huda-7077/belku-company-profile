interface StaticMemberData {
  role: string;
  description: string;
  detail: string;
}

interface StaticTeamData {
  engineering: StaticMemberData[];
  marketing: StaticMemberData[];
  support: StaticMemberData[];
}

export const staticTeamData: StaticTeamData = {
  engineering: [
    {
      role: "Chief Heat Officer",
      description:
        "Leads the charge in crafting bold, unforgettable flavors with a fiery edge.",
      detail:
        "A visionary in culinary heat, Carolina redefines spice innovation with expertise and passion.",
    },
    {
      role: "Spice Operations Manager",
      description: "Drives the efficient production of our signature sauces.",
      detail:
        "Excels at creating seamless processes to bring the perfect heat to tables worldwide.",
    },
    {
      role: "Flavor Architect",
      description: "Designs cutting-edge spice blends to captivate taste buds.",
      detail:
        "Combines a love for chemistry and cooking to engineer the ultimate hot sauce experience.",
    },
    {
      role: "Innovation Lead",
      description: "Pioneers research into groundbreaking spice technologies.",
      detail:
        "Collaborates with culinary experts to push the limits of heat and flavor.",
    },
    {
      role: "Quality Assurance Specialist",
      description: "Guarantees every bottle meets the highest standards.",
      detail:
        "Obsessed with ensuring that every product delivers consistent, fiery perfection.",
    },
    {
      role: "Heat Systems Engineer",
      description:
        "Optimizes equipment and processes for maximum flavor output.",
      detail:
        "Uses engineering expertise to refine production methods for scalable spice creation.",
    },
  ],
  marketing: [
    {
      role: "Brand Heat Strategist",
      description: "Develops campaigns that ignite global spice enthusiasm.",
      detail:
        "Specializes in connecting our products with passionate chili lovers worldwide.",
    },
    {
      role: "Social Media Firebrand",
      description: "Spreads the word of our sauces across digital platforms.",
      detail:
        "Creates engaging posts and viral challenges that keep the buzz alive.",
    },
    {
      role: "Hot Sauce Storyteller",
      description: "Builds narratives that celebrate the art of spice.",
      detail:
        "Masters the art of blending marketing with the essence of fiery flavor journeys.",
    },
  ],
  support: [
    {
      role: "Heat Experience Specialist",
      description: "Guides customers through their spicy adventures.",
      detail:
        "Ensures every customer interaction leaves a lasting impression of satisfaction and heat.",
    },
    {
      role: "Pepper Care Advocate",
      description: "Answers all questions about our products and spice levels.",
      detail:
        "Combines product knowledge with empathy to support heat seekers everywhere.",
    },
    {
      role: "Spice Support Coordinator",
      description: "Resolves issues with professionalism and a dash of warmth.",
      detail:
        "Dedicated to ensuring every customer’s journey is as smooth as it is spicy.",
    },
  ],
};
