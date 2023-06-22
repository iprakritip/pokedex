import React, {Dispatch, SetStateAction} from 'react';

interface CharacterCardProps {
  setToggleDetails: Dispatch<SetStateAction<boolean>>;
}

const CharacterCard = ({setToggleDetails}: CharacterCardProps) => {
  return (
    <div
      className='bg-white w-[12rem] relative border rounded shadow flex flex-col gap-3 items-center py-8'
      onClick={() => setToggleDetails((prevValue) => !prevValue)}
    >
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
        <button className='bg-grass px-3 py-2 border border-[#2DE4A0] rounded-md text-xs font-medium text-white'>
          Grass
        </button>
        <button className='bg-poison px-2 py-2 border border-[#A33EA1] rounded-md text-xs font-medium text-white'>
          Poison
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
