import Image from 'next/image';
import logosMap from '@/app/assets/logosMap';
import { getAllPlayersData, getGamesData, getSingleTeamData } from '@/app/lib/utils';
import MatchRow from '@/app/components/MatchRow';
import SinglePlayerRow from '@/app/components/SinglePlayerRow';
import Link from 'next/link';
import { Game, Player  } from '@/app/lib/types';


interface TeamPageProps {
  params: {
    teamName: string;
  };
}

export default async function TeamPage({ params }: TeamPageProps) {
  
  // Find the team ID from logosMap based on teamName param in the URL
  const team = logosMap.find((team) => team.name === params.teamName);

  if (!team) {
    throw new Error('Team not found in logosMap');
  }

  // Fetch calls
  const gamesData = await getGamesData(team.id);
  const singleTeamData = await getSingleTeamData(team.id);
  

  // Organizes the games by chronological order.

  const sortedGamesByDate = gamesData.data
    .sort((a: { date: string }, b: { date: string }) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className='bg-primary_dark w-full min-h-screen flex flex-col items-center justify-center py-20 px-2 sm:px-32 text-white overflow-x-hidden'>
      <div className='w-full min-h-screen'>
        <div className='text-3xl font-bold text-white mb-6'>Team Profile</div>

        {/* Team Header Section */}

        <div className='flex flex-col md:flex-row md:h-36 rounded-lg border-red-500 border-2 w-full'>
          <div className='flex items-center p-2 sm:p-0 sm:pr-8 rounded-lg'>
            
            <div className='w-24 h-24 ml-8'>
              <Image
                src={logosMap.find((logo) => logo.id === team.id)?.logo}
                alt={'Team Logo'}
                priority={true}
              />
            </div>

            <div className='flex flex-col'>
              <div className='flex items-center justify-center ml-10 sm:ml-5 font-bold'>{singleTeamData.full_name}</div>
              <div className='flex items-center justify-center ml-10 sm:ml-0 sm:mt-5 font-bold'>{singleTeamData.abbreviation}</div>
            </div>

          </div>
          
          <div className='flex-1 flex items-center justify-around bg-secondary_dark rounded-lg p-2 sm:p-0 '>
            <div className='flex flex-col items-center'>
              <span className='text-primary_gray mb-2 text-xs sm:text-sm'>CITY</span>
              <span className='font-bold flex items-center'>{singleTeamData.city}</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-primary_gray mb-2 text-xs sm:text-sm'>CONFERENCE</span>
              <span className='font-bold flex items-center'>{singleTeamData.conference}</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-primary_gray mb-2 text-xs sm:text-sm'>DIVISION</span>
              <span className='font-bold flex items-center'>{singleTeamData.division}</span>
            </div>
          </div>
        </div>

        {/* Games Section   */}

        <div className='flex flex-col md:flex-row justify-between gap-6 mt-6'>
          <div className='bg-terciary_dark w-full md:w-[660px] rounded-lg p-3'>
            <div className='flex justify-between px-2'>
              <h2 className='text-white text-lg font-bold mb-3'>All matches history</h2>
            </div>
            
            {sortedGamesByDate.map((game: Game) => (
              <MatchRow
                key={game.id}
                date={game.date.substring(0, 10)}
                homeTeam={game.home_team.full_name}
                homeTeamScore={game.home_team_score}
                visitorTeamScore={game.visitor_team_score}
                visitorTeam={game.visitor_team.full_name}
              />
            ))}
          </div>

         
        </div>
      </div>
    </main>
  );
}
