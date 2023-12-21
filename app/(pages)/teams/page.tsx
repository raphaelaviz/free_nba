import React from 'react';
import DivisionColumn from '@/app/components/DivisionColumn';
import { getAllTeamsData } from '@/app/lib/utils';
import { Team } from '@/app/lib/types';


export default async function TeamsPage() {
  
  const teamData = await getAllTeamsData();

  const teams = teamData.data || [];

  
  const atlanticTeams: Team[] = [];
  const centralTeams: Team[] = [];
  const southeastTeams: Team[] = [];
  const northwestTeams: Team[] = [];
  const pacificTeams: Team[] = [];
  const southwestTeams: Team[] = [];

  // Populate the arrays above according to the division values
  
  teams.forEach((team: Team) => {
    const { division } = team;
    switch (division) {
      case 'Atlantic':
        atlanticTeams.push(team);
        break;
      case 'Central':
        centralTeams.push(team);
        break;
      case 'Southeast':
        southeastTeams.push(team);
        break;
      case 'Northwest':
        northwestTeams.push(team);
        break;
      case 'Pacific':
        pacificTeams.push(team);
        break;
      case 'Southwest':
        southwestTeams.push(team);
        break;
   
    }
  });

  return (
    <main className='bg-primary_dark w-full min-h-screen flex items-center justify-center py-20'>
      <div className='w-full min-h-screen flex flex-col items-center justify-center'>
        <div className='text-3xl font-bold text-white mb-6 w-full pl-8 md:pl-72 '>
          All teams
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <DivisionColumn columnTitle="Atlantic" teams={atlanticTeams} />
          <DivisionColumn columnTitle="Central" teams={centralTeams} />
          <DivisionColumn columnTitle="Southeast" teams={southeastTeams} />
          <DivisionColumn columnTitle="Northwest" teams={northwestTeams} />
          <DivisionColumn columnTitle="Pacific" teams={pacificTeams} />
          <DivisionColumn columnTitle="Southwest" teams={southwestTeams} />
        </div>
      </div>
    </main>
  );
}
