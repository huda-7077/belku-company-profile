export interface Member {
  picture: {
    large: string;
    medium: string;
  };
  name: {
    first: string;
    last: string;
  };
}

export interface TeamData {
  engineering: Member[];
  marketing: Member[];
  support: Member[];
}

export interface HappyCostumer {
  costumer: Member[];
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  highlight: string;
  rating: number;
  image: string;
}

export const fetchTeamData = async (): Promise<TeamData> => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=12");
    const data = await response.json();
    const results: Member[] = data.results;

    return {
      engineering: results.slice(0, 6),
      marketing: results.slice(6, 9),
      support: results.slice(9, 12),
    };
  } catch (error) {
    console.error("Error fetching team data:", error);
    throw error;
  }
};

export const fetchHappyCostumer = async (): Promise<HappyCostumer> => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=3");
    const data = await response.json();
    const results: Member[] = data.results;

    return {
      costumer: results,
    };
  } catch (error) {
    console.error("Error fetching team data:", error);
    throw error;
  }
};

export const generateTestimonials = async (): Promise<Testimonial[]> => {
  const response = await fetch("https://randomuser.me/api/?results=12");
  const data = await response.json();

  const sambals = ["BELMI", "BELCU", "BELRI", "BELGI"];
  const ratings = [5, 5, 5, 4];

  return data.results.map((user: any, index: number) => ({
    name: `${user.name.first} ${user.name.last}`,
    role: "Sambal Enthusiast",
    company: `${user.location.city}, ${user.location.country}`,
    content: `This sambal is fantastic! ${sambals[index % sambals.length]} really adds a burst of flavor to every dish.`,
    highlight: `Highly recommend ${sambals[index % sambals.length]}!`,
    rating: ratings[index % ratings.length],
    image: user.picture.medium,
  }));
};
