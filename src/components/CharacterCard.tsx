import React from 'react';

const CharacterCard = () => {
  return (
    <div className='bg-white w-[12rem] relative border rounded shadow flex flex-col gap-3 items-center py-8'>
      <div className='w-[4rem] absolute top-[-20%]'>
        <img
          src='https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-HD.png'
          alt='bulbasaur'
          className=''
        />
      </div>
      <p className='text-xs  font-semibold text-gray-500'>#001</p>
      <p className='font-bold text-gray-800'>Bulbusaur</p>
      <div className='flex flex-wrap gap-4'>
        <p className='bg-grass px-3 py-2 border border-[#2DE4A0] rounded-md text-xs font-medium text-white'>
          Grass
        </p>
        <p className='bg-poison px-2 py-2 border border-[#A33EA1] rounded-md text-xs font-medium text-white'>
          Poison
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
