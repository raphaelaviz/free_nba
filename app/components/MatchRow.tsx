export interface MatchRowProps {
    date: string;
    homeTeam: string;
    homeTeamScore: number;
    visitorTeamScore: number;
    visitorTeam: string;
  }
  
  export default function MatchRow(props: MatchRowProps) {
    const { date, homeTeam, homeTeamScore, visitorTeamScore, visitorTeam } = props;
  
    
    const isWinner = homeTeamScore > visitorTeamScore;
  
    return (
      <div className="flex gap-4 p-1 px-3 items-center w-full bg-secondary_dark rounded-lg mt-1 text-xs sm:text-sm" data-testid='match-row'>
        <div className="flex items-center text-primary_gray">{date}</div>
  
        <div className="flex">
          <div className='w-16 sm:w-48 flex justify-end mr-4'>{homeTeam}</div>
          <span className={`w-10 flex items-center justify-center mr-4 ${isWinner ? 'text-green-500' : 'text-red-500'}`}>{homeTeamScore}</span>
        </div>
  
        <span className="-ml-8 sm:-mr-2 -mr-4 sm:-ml-5">-</span>
  
        <div className="flex">
          <span className={`w-10 flex items-center justify-center mr-2 ${isWinner ? 'text-red-500' : 'text-green-500'}`}>{visitorTeamScore}</span>
          <div className={`flex-shrink-0 w-16 sm:w-48 ${isWinner ? 'sm:w-28' : ''}`}>{visitorTeam}</div>
        </div>
      </div>
    );
  }
  