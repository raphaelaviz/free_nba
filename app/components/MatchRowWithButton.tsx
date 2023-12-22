'use client'

import { getStatsData } from "../lib/utils";

export interface MatchRowWithButtonProps {
    date: string;
    gameId: number;
    homeTeam: string;
    homeTeamScore: number;
    visitorTeamScore: number;
    visitorTeam: string;
    handleGameClick: (gameId: number) => void;
  }
  


  // This component isn't being used at the moment. It was meant to fetch the statsData.

  export default function MatchRowWithButton(props: MatchRowWithButtonProps) {
    const { date, gameId, homeTeam, homeTeamScore, visitorTeamScore, visitorTeam, handleGameClick } = props;
  
    
    const isWinner = homeTeamScore > visitorTeamScore;
  
    return (
        <button onClick={() => handleGameClick(gameId)}>

            <div className="flex gap-4 p-1 px-3 items-center w-full bg-secondary_dark rounded-lg mt-1 text-sm">
                <div className="w-24 flex items-center justify-around  text-primary_gray">{date}</div>
                
                <div className="flex">
                <div className='w-48 flex justify-end mr-4'>{homeTeam}</div>
                <span className={`w-10 ${isWinner ? 'text-green-500' : 'text-red-500'}`}>{homeTeamScore}</span>
                </div>
                
                <span className="-ml-5">-</span>
                
                <div className="flex">
                <span className={`w-10 ${isWinner ? 'text-red-500' : 'text-green-500'}`}>{visitorTeamScore}</span>
                <div className='w-48'>{visitorTeam}</div>
                </div>
            </div>
            
        </button>
    );
  }
  