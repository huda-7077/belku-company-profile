// data/teamData.ts

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
        "Expert in crafting explosive flavors and managing our spiciest initiatives.",
      detail:
        "With years of experience in the world's hottest kitchens, Carolina brings unique expertise in pushing the boundaries of spice.",
    },
    {
      role: "Operations Director",
      description: "Specializes in scaling our heat operations globally.",
      detail:
        "Masters the art of balancing intense flavors with operational excellence.",
    },
    {
      role: "Operations Director",
      description: "Specializes in scaling our heat operations globally.",
      detail:
        "Masters the art of balancing intense flavors with operational excellence.",
    },

    {
      role: "Head of Spice Research",
      description: "Innovates new spice combinations and heat levels.",
      detail:
        "Leads our spice engineering team in developing revolutionary hot sauce formulas.",
    },
    {
      role: "Head of Spice Research",
      description: "Innovates new spice combinations and heat levels.",
      detail:
        "Leads our spice engineering team in developing revolutionary hot sauce formulas.",
    },
    {
      role: "Head of Spice Research",
      description: "Innovates new spice combinations and heat levels.",
      detail:
        "Leads our spice engineering team in developing revolutionary hot sauce formulas.",
    },
  ],
  marketing: [
    {
      role: "Brand Fire Starter",
      description: "Creates viral campaigns around our spiciest offerings.",
      detail: "Specializes in making our hot products the talk of the town.",
    },
    {
      role: "Brand Fire Starter",
      description: "Creates viral campaigns around our spiciest offerings.",
      detail: "Specializes in making our hot products the talk of the town.",
    },
    {
      role: "Brand Fire Starter",
      description: "Creates viral campaigns around our spiciest offerings.",
      detail: "Specializes in making our hot products the talk of the town.",
    },
  ],
  support: [
    {
      role: "Customer Satisfaction Guru",
      description: "Ensures every spicy experience is memorable.",
      detail: "Helps customers navigate their heat tolerance journey.",
    },
    {
      role: "Customer Satisfaction Guru",
      description: "Ensures every spicy experience is memorable.",
      detail: "Helps customers navigate their heat tolerance journey.",
    },
    {
      role: "Customer Satisfaction Guru",
      description: "Ensures every spicy experience is memorable.",
      detail: "Helps customers navigate their heat tolerance journey.",
    },
  ],
};
