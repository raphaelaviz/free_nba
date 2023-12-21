import React from 'react';

export interface SinglePlayerRowProps {
  fullName: string;
  heightFeet: number | null;
  heightInches: number | null;
  weightPounds: number | null;
  position: string;
}

export default function SinglePlayerRow({
  fullName,
  heightFeet,
  heightInches,
  weightPounds,
  position,
}: SinglePlayerRowProps) {
  const formattedHeight = heightFeet !== null && heightInches !== null ? `${heightFeet}'${heightInches}"` : '-';
  const formattedWeight = weightPounds !== null ? weightPounds.toString() : '-';
  const formattedPosition = position.trim() !== '' ? position : '-';

  return (
    
    <div className="flex relative p-1 px-3 items-center w-full bg-secondary_dark rounded-lg mt-1 text-sm">
      <div className="flex items-center text-white">{fullName}</div>
      <div className="flex">
        <span className='absolute bottom-1 left-[175px] '>{formattedHeight}</span>
        <span className='absolute bottom-1 left-[255px] '>{formattedWeight}</span>
        <span className='absolute bottom-1 left-[350px]'>{formattedPosition}</span>
      </div>
    </div>
  );
};
