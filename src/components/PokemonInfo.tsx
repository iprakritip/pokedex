import React, {useEffect} from 'react';
import {useGetPokemonInfo} from '../api/hooks';
import PokeInfoBtn from './PokeInfoBtn';
import Type from './Type';

interface PokemonInfoProps {
  displayInfo: boolean;
  clickedPokemonId: number;
  closePokeInfo: () => void;
}

const PokemonInfo = ({
  displayInfo,
  clickedPokemonId,
  closePokeInfo,
}: PokemonInfoProps) => {
  const {getPokemonInfo, data, error, loading} =
    useGetPokemonInfo(clickedPokemonId);
  useEffect(() => {
    getPokemonInfo({
      variables: {
        id: clickedPokemonId,
      },
    });
    console.log(data, error, loading);
  }, [clickedPokemonId]);

  if (loading) return <div>loadinggggg.......</div>;

  const pokemon = data?.pokemon_v2_pokemon[0];

  return (
    <div
      className={`h-max w-96 px-4 pb-4 bg-white shadow border rounded-lg fixed right-0 ${
        displayInfo ? 'flex' : 'hidden'
      } flex-col items-center gap-2`}
    >
      <div className='w-full flex justify-end'>
        <button
          className='text-xs text-gray-500 underline'
          onClick={closePokeInfo}
        >{`close>>`}</button>
      </div>
      <div className='w-28'>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon?.id}.png`}
          alt='bulbasaur'
          className=''
        />
      </div>
      <p className='text-sm  font-semibold text-gray-500'>#{pokemon?.id}</p>
      <p className='font-bold text-lg text-gray-800'>
        {pokemon?.name.toUpperCase()}
      </p>
      <div className='flex flex-wrap gap-4'>
        {pokemon?.pokemon_v2_pokemontypes.map((type: any) => {
          console.log(type.pokemon_v2_type.name, type.pokemon_v2_type.id);
          return (
            <Type
              key={type.pokemon_v2_type.id}
              typeName={type.pokemon_v2_type.name}
              typeId={type.pokemon_v2_type.id}
            />
          );
        })}
      </div>
      <div className='flex flex-col gap-6 items-center'>
        <div className='flex flex-col items-center gap-1'>
          <p className='font-semibold text-sm'>
            {'Pokédex Entry'.toUpperCase()}
          </p>
          <p className='text-sm font-medium text-gray-800 text-center'>
            {
              pokemon?.pokemon_v2_pokemonspecy
                .pokemon_v2_pokemonspeciesflavortexts[0].flavor_text
            }
          </p>
        </div>
        <div className='flex gap-4 justify-center'>
          <div className='flex flex-col items-center gap-1'>
            <p className='font-semibold text-sm'>HEIGHT</p>
            <p className='bg-slate-100 w-32 py-2 border text-sm border-slate-100 rounded-full text-center'>
              {pokemon?.height} meters
            </p>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <p className='font-semibold text-sm'>WEIGHT</p>
            <p className='bg-slate-100 w-32 py-2 border text-sm border-slate-100 rounded-full text-center'>
              {pokemon?.weight} kgs
            </p>
          </div>
        </div>
        <div className='w-full'>
          {pokemon?.id === 1 ? (
            <PokeInfoBtn />
          ) : (
            <div className='flex gap-4 justify-between'>
              <PokeInfoBtn />
              <PokeInfoBtn />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
