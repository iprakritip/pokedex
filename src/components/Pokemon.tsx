import React from 'react';
import Type from '../components/Type';

interface PokemonProps {
  // toggleDetailsCard: () => void;
  id: number;
  name: string;
  types: {
    pokemon_v2_type: {
      id: number;
      name: string;
    };
  }[];
}

const Pokemon = ({
  // toggleDetailsCard,
  id,
  name,
  types,
}: PokemonProps) => {
  return (
    <div className='bg-white w-[18%] relative border rounded shadow flex flex-col gap-3 items-center py-8'>
      <div className='w-16 absolute top-[-20%]'>
        {/* <img
          src={img}
          alt={name}
        /> */}
      </div>
      <p className='text-xs  font-semibold text-gray-500'>#{id}</p>
      <p className='font-bold text-gray-800 text-sm'>{name.toUpperCase()}</p>
      <div className='flex flex-wrap gap-4'>
        {types.map((type) => {
          console.log(type);
          return (
            <Type
              key={type.pokemon_v2_type.id}
              typeName={type.pokemon_v2_type.name}
              typeId={type.pokemon_v2_type.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pokemon;
