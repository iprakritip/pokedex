import React from 'react';
import {POKEMON_TYPES} from '../api/hooks';

interface PokemonProps {
  // toggleDetailsCard: () => void;
  id: number;
  name: string;
  types?: {
    pokemon_v2_type: POKEMON_TYPES[];
  };
}

const Pokemon = ({
  // toggleDetailsCard,
  id,
  name,
  types,
}: PokemonProps) => {
  return (
    <div className='bg-white w-48 relative border rounded shadow flex flex-col gap-3 items-center py-8'>
      <div className='w-16 absolute top-[-20%]'>
        {/* <img
          src={img}
          alt={name}
        /> */}
      </div>
      <p className='text-xs  font-semibold text-gray-500'>#{id}</p>
      <p className='font-bold text-gray-800'>{name}</p>
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

export default Pokemon;
