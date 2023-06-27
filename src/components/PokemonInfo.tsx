import React, {useEffect} from 'react';
import {Link, useOutletContext} from 'react-router-dom';
import {useGetPokemonInfo} from '../api/hooks';
import PokeInfoBtn from './PokeInfoBtn';
import Type from './Type';

interface PokemonInfoProps {
  displayInfo: boolean;
  clickedPokemonId: number;
  closePokeInfo: () => void;
  increaseClickedId: () => void;
  decreaseClickedId: () => void;
}

const PokemonInfo = ({displayInfo,
  clickedPokemonId,
  closePokeInfo,
  increaseClickedId,
  decreaseClickedId,}:PokemonInfoProps) => {
  // const {
  //   displayInfo,
  //   clickedPokemonId,
  //   closePokeInfo,
  //   increaseClickedId,
  //   decreaseClickedId,
  // } = useOutletContext<{
  //   displayInfo: boolean;
  //   clickedPokemonId: number;
  //   closePokeInfo: () => void;
  //   increaseClickedId: () => void;
  //   decreaseClickedId: () => void;
  // }>();
  const {getPokemonInfo, data, error, loading} =
    useGetPokemonInfo(clickedPokemonId);
  useEffect(() => {
    getPokemonInfo({
      variables: {
        id: clickedPokemonId,
      },
    });
    // console.log(data, error, loading);
  }, [clickedPokemonId]);

  const pokemon = data?.pokemon_v2_pokemon[0];

  return (
    <div
      className={`h-[75vh] w-96 px-4 pb-4  bg-white shadow border rounded-lg fixed top-40  ${
        displayInfo ? 'right-0' : 'right-[-25rem]'
      } flex flex-col items-center gap-2 transition-position duration-400 z-20 ease-in-out`}
    >
      {loading ? (
        <div className='flex justify-center items-center h-full w-full text-gray-500'>
          loadinggggg.......
        </div>
      ) : (
        <div className='flex flex-col items-center gap-2'>
          <div className='w-full flex justify-end'>
            <Link to='/'>
              <button
                className='text-xs text-gray-500 underline'
                onClick={closePokeInfo}
              >{`close>>`}</button>
            </Link>
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
                <PokeInfoBtn label='Next' onClick={increaseClickedId} />
              ) : (
                <div className='flex gap-4 justify-between'>
                  <PokeInfoBtn label='Prev' onClick={decreaseClickedId} />
                  <PokeInfoBtn label='Next' onClick={increaseClickedId} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
