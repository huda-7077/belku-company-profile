export interface Member {
  picture: {
    large: string;
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

export const fetchTeamData = async (): Promise<TeamData> => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=12");
    const data = await response.json();
    const results: Member[] = data.results;

    // Distribute users across teams
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
