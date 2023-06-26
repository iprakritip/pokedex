import React, {useEffect} from 'react';
import {useGetPokemonInfo} from '../api/hooks';

interface PokemonInfoProps {
  displayInfo: boolean;
  id: string;
  name: string;
  img: string;
  description: string;
  height: string;
  weight: string;
  clickedPokemonId: number;
}

const PokemonInfo = ({
  displayInfo,
  id,
  name,
  img,
  description,
  height,
  weight,
  clickedPokemonId,
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
  console.log(pokemon);
  console.log(pokemon?.name);
  
  
  return (
    <div
      className={`h-max w-96 px-4 pb-4 bg-white shadow border rounded-lg fixed right-0 ${
        displayInfo ? 'flex' : 'hidden'
      } flex-col items-center pt-8 gap-2`}
    >
      <div className='w-40'>
        <img src={img} alt='bulbasaur' className='' />
      </div>
      <p className='text-sm  font-semibold text-gray-500'>#{pokemon?.id}</p>
      <p className='font-bold text-lg text-gray-800'>{pokemon?.name}</p>
      <div className='flex flex-wrap gap-4'>
        <p className='bg-grass px-3 py-2 border border-[#2DE4A0] rounded-md text-xs font-medium text-white'>
          Grass
        </p>
        <p className='bg-poison px-2 py-2 border border-[#A33EA1] rounded-md text-xs font-medium text-white'>
          Poison
        </p>
      </div>
      <div className='flex flex-col gap-6 items-center'>
        <div className='flex flex-col items-center gap-1'>
          <p className='font-semibold text-sm'>
            {'Pokédex Entry'.toUpperCase()}
          </p>
          <p className='text-sm font-medium text-gray-800 text-center'>
            {description}
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
        <button className='w-full flex justify-center items-center font-semibold text-sm gap-2 bg-slate-100 border py-2 border-slate-100 rounded-md'>
          Ivysaur
          <img
            src='https://projectpokemon.org/images/normal-sprite/ivysaur.gif'
            alt='ivysaur'
            className='w-7'
          />
          <p className='font-semibold text-lg'>{`>`}</p>
        </button>
      </div>
    </div>
  );
};

export default PokemonInfo;
