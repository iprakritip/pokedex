import React from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import Type from '../components/Type';

interface PokemonProps {
  togglePokeInfo: () => void;
  id: number;
  name: string;
  types: {
    pokemon_v2_type: {
      id: number;
      name: string;
    };
  }[];
  changeSelectedPokemonId: (id: number) => void;
}

const Pokemon = ({
  togglePokeInfo,
  id,
  name,
  types,
  changeSelectedPokemonId,
}: PokemonProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    togglePokeInfo();
    changeSelectedPokemonId(id);
    setSearchParams(`/pokedex/${name}`);
  };

  return (
    <div
      onClick={handleClick}
      className='pokemon relative w-[15%] h-[15rem] pt-28 '
    >
      <div className='absolute w-full bottom-[45%] z-10 flex justify-center'>
        <img
          src={`https://projectpokemon.org/images/normal-sprite/${name.replace(
            '-',
            '_'
          )}.gif`}
          alt={name}
        />
      </div>
      <div className=' w-full bg-white relative border rounded shadow flex flex-col gap-3 items-center pt-8 pb-8'>
        <p className='text-xs  font-semibold text-gray-500'>#{id}</p>
        <p className='font-bold text-gray-800 text-sm'>{name.toUpperCase()}</p>
        <div className='flex flex-wrap gap-4 justify-center'>
          {types.map((type) => {
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
    </div>
  );
};

export default Pokemon;
