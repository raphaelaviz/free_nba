import Image from 'next/image';
import React from 'react';

interface SingleTeamRowProps {
  team: {
    id: number;
    full_name: string;
    abbreviation: string;
    city: string;
  };
}

export default function SingleTeamRow({ team }: SingleTeamRowProps) {
  return (
    <div className="w-52 flex bg-green-500 p-4 mb-4" data-testid='team-row'>
      <Image src={''} alt={''}></Image>
      <h2 className="text-white text-lg font-bold">{team.full_name}</h2>
      
    </div>
  );
}
