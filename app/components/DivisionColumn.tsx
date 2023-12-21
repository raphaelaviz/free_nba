import React from 'react';
import logosMap from '../assets/logosMap';
import Image from 'next/image';
import Link from 'next/link';

interface DivisionColumnProps {
  columnTitle: string;
  teams: any[]; 
}

export default function DivisionColumn({ columnTitle, teams }: DivisionColumnProps) {

  return (
    <div className="w-72">
      <h2 className="text-white text-lg font-bold mb-4">{columnTitle}</h2>
      <div className='flex'>
        <div>
          {teams.map((team) => (

            <Link 
                href={`/teams/${team.name}`.toLowerCase()} 
                className="flex items-center bg-secondary_dark rounded-md px-5 py-2 mb-2 text-white w-72 transition-transform hover:scale-110"
                key={team.id} 
            >
              <Image
                src={logosMap.find((logo) => logo.id === team.id)?.logo}
                alt={team.full_name}
                className="w-8 h-8 mr-2"
              />
              {team.full_name}
            </Link>

          ))}
        </div>
      </div>
    </div>
  );
}
