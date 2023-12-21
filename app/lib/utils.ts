'use server'
/*
    All fetch calls for the project:

    1. getAllTeamsData
    2. getSingleTeamData
    3. getGamesData
    4. getAllPlayersData
    5. getStatsData
*/


export const getAllTeamsData = async () => {
    const response = await fetch(`${process.env.RAPIDAPI_URL}/teams?per_page=500`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return response.json();
};

export const getSingleTeamData = async (teamId: number) => {
    const response = await fetch(`${process.env.RAPIDAPI_URL}/teams/${teamId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return response.json();
};

export const getGamesData = async (teamId: number) => {
  const response = await fetch(`${process.env.RAPIDAPI_URL}/games?team_ids[]=${teamId}&per_page=500`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate',
      'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  console.log(response);
  return response.json();
};

export const getAllPlayersData = async () => {
  const response = await fetch(`${process.env.RAPIDAPI_URL}/players?per_page=3500`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate',
      'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  console.log(response);
  return response.json();
};

export const getStatsData = async (gameId: number) => {

  const response = await fetch(`${process.env.RAPIDAPI_URL}/stats?game_ids[]=${gameId}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate',
      'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};