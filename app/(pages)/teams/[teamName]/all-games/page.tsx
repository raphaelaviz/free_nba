import Image from 'next/image';
import logosMap from '@/app/assets/logosMap';
import { getGamesData, getSingleTeamData, getStatsData } from '@/app/lib/utils';
import { Game } from '@/app/lib/types';

import MatchRowWithButton from '@/app/components/MatchRowWithButton';

export default async function AllGamesPage({ params }: { params: { teamName: string } }) {
  // Find the team ID from logosMap based on teamName param in the URL
  const team = logosMap.find((team) => team.name === params.teamName);

  if (!team) {
    throw new Error('Team not found in logosMap');
  }

  // Fetch calls
  const gamesData = await getGamesData(team.id);
  const singleTeamData = await getSingleTeamData(team.id);
  
  
  const handleGameClick = async (gameId: number) => {
    const statsData = await getStatsData(gameId);
  
  };


  // Organizes the games by chronological order.
  const sortedGamesByDate = gamesData.data
    .sort((a: { date: string }, b: { date: string }) => new Date(b.date).getTime() - new Date(a.date).getTime())
    

  return (
    <main className='bg-primary_dark w-full min-h-screen flex flex-col items-center justify-center py-20 px-32 text-white'>
      <div className='w-full min-h-screen'>
        <div className='text-3xl font-bold text-white mb-6'>Team Profile</div>
        <div className='flex h-36 rounded-lg border-red-500 border-2'>
          <div className='flex items-center bg-primary_dark pr-10 rounded-lg'>
            <div className='w-24 h-24 ml-8'>
              <Image
                src={logosMap.find((logo) => logo.id === team.id)?.logo}
                alt={'Team Logo'}
              />
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center justify-center ml-5 font-bold'>{singleTeamData.full_name}</div>
              <div className='flex items-center justify-center mt-5 font-bold'>{singleTeamData.abbreviation}</div>
            </div>
          </div>
          <div className='flex-1 flex items-center justify-around bg-secondary_dark rounded-lg'>
            <div className='flex flex-col items-center'>
              <span className='text-primary_gray mb-2 text-sm'>CITY</span>
              <span className='font-bold flex items-center'>{singleTeamData.city}</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-primary_gray mb-2 text-sm'>CONFERENCE</span>
              <span className='font-bold flex items-center'>{singleTeamData.conference}</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-primary_gray mb-2 text-sm'>DIVISION</span>
              <span className='font-bold flex items-center'>{singleTeamData.division}</span>
            </div>
          </div>
        </div>

        {/* Games Section   */}
        <div className='flex flex-col md:flex-row justify-between gap-6 mt-6'>
          <div className='bg-terciary_dark w-full md:w-3/5 rounded-lg p-3'>
            <div className='flex justify-between px-2'>
              <h2 className='text-white text-lg font-bold mb-3'>Match history</h2>       
            </div>
            
            {sortedGamesByDate.map((game: Game) => (

              <MatchRowWithButton
                key={game.id}
                gameId={game.id}
                date={game.date.substring(0, 10)}
                homeTeam={game.home_team.full_name}
                homeTeamScore={game.home_team_score}
                visitorTeamScore={game.visitor_team_score}
                visitorTeam={game.visitor_team.full_name}
                handleGameClick={handleGameClick}
              />
            ))}
          </div>


        {/* Players Section */}

          <div className='bg-terciary_dark w-full md:w-2/5 h-96 rounded-lg p-3 mt-6 md:mt-0'>
            <h2 className='text-white text-lg font-bold mb-3'>Match Stats</h2>
            <div className="flex justify-around p-1 px-3 items-center w-full bg-secondary_dark text-primary_gray rounded-lg mt-1 text-sm">
             
            </div>

            

          </div>         
        </div>
         
      </div>
    </main>
  );
}
