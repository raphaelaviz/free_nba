export interface Team {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
  }

  export interface Game {
    id: number;
    date: string;
    home_team: Team;
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: Team;
    visitor_team_score: number;
  }

  export interface Player {
    id: number;
    first_name: string;
    height_feet: number | null;
    height_inches: number | null;
    last_name: string;
    position: string;
    team: Team;
    weight_pounds: number | null;
  }