import React, {useEffect} from 'react';
import {Link, useNavigate, useSearchParams} from 'react-router-dom';
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
  clickedPokemonId: number | undefined;
  displayInfo: boolean;
}

const Pokemon = ({
  togglePokeInfo,
  id,
  name,
  types,
  changeSelectedPokemonId,
  clickedPokemonId,
  displayInfo,
}: PokemonProps) => {
  const [searchParams] = useSearchParams();
  searchParams.set('pokedex', `${name}`);
  const navigate = useNavigate();

  const handleClick = () => {
    togglePokeInfo();
    changeSelectedPokemonId(id);
    navigate(`?${searchParams.toString()}`);
  };

  // console.log(clickedPokemonId);

  useEffect(() => {
    localStorage.setItem('id', `${clickedPokemonId}`);
  }, [clickedPokemonId]);

  return (
    <div
      onClick={handleClick}
      className={`pokemon relative pt-28 h-full `}
    >
      <div className='absolute w-full bottom-[53%] z-10 flex justify-center'>
        <img
          src={`https://projectpokemon.org/images/normal-sprite/${name.replace(
            '-',
            '_'
          )}.gif`}
          alt={name}
        />
      </div>
      <div className=' w-full h-full bg-white relative border rounded shadow flex flex-col gap-3 items-center px-3 pt-10 pb-8'>
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
