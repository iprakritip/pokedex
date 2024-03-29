import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useGetPokemonInfo} from '../api/hooks';
import Button from './Button';
import Image from './Image';
import PokeInfoSwitchBtn from './PokeInfoSwitchBtn';
import PokeInfoShimmer from './shimmers/PokeInfoShimmer';
import Type from './Type';

interface PokemonInfoProps {
  displayInfo: boolean;
  clickedPokemonId: number;
  closePokeInfo: () => void;
  increaseClickedId: () => void;
  decreaseClickedId: () => void;
  togglePokeInfo: () => void;
  changeSelectedPokemonId: (id: number) => void;
}

const PokemonInfo = ({
  changeSelectedPokemonId,
  displayInfo,
  clickedPokemonId,
  closePokeInfo,
  increaseClickedId,
  decreaseClickedId,
  togglePokeInfo,
}: PokemonInfoProps) => {
  const storedId = Number(localStorage.getItem('id'));
  if (storedId) {
    togglePokeInfo();
  }

  const {getPokemonInfo, data, error, loading} = useGetPokemonInfo(
    storedId ? storedId : clickedPokemonId
  );

  useEffect(() => {
    getPokemonInfo({
      variables: {
        id: clickedPokemonId,
      },
    });
  }, [clickedPokemonId]);

  const pokemon = data?.pokemon_v2_pokemon[0];
  const handleClick = () => {
    closePokeInfo();
    localStorage.removeItem('id');
    changeSelectedPokemonId(0);
  };

  return (
    <div
      className={`h-max w-96 px-4 pb-4  bg-white shadow border rounded-lg fixed top-40  ${
        displayInfo ? 'right-0 m-auto md:m-0 md:right-[5vw]' : 'right-[-25rem]'
      } flex flex-col items-center gap-2 transition-position duration-400 z-40 ease-in-out`}
    >
      {loading ? (
        <div className='flex justify-center items-center h-[28rem] w-full text-gray-500'>
          <PokeInfoShimmer />
        </div>
      ) : error ? (
        <div className='flex justify-center items-center h-[28rem] w-full text-gray-500'>
          Sorry, something went wrong.
        </div>
      ) : (
        <div className='flex flex-col items-center gap-2'>
          <div className='w-full flex justify-end h-4'>
            <Link to='/'>
              <Button
                label={`close>>`}
                onClick={handleClick}
                className='text-xs text-gray-500 underline'
              />
            </Link>
          </div>
          <div className='w-28 h-28'>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon?.id}.png`}
              alt={`${pokemon?.name}`}
            />
          </div>
          <p className='text-sm h-4  font-semibold text-gray-500'>
            #{pokemon?.id}
          </p>
          <p className='font-bold h-8 text-lg text-gray-800'>
            {pokemon?.name.toUpperCase()}
          </p>
          <div className='flex flex-wrap gap-4 h-8'>
            {pokemon?.pokemon_v2_pokemontypes.map((type: any) => {
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
            <div className='flex flex-col items-center gap-1 h-18'>
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
            <div className='flex gap-4 justify-center h-14'>
              <div className='flex flex-col items-center gap-1'>
                <p className='font-semibold text-sm'>HEIGHT</p>
                <p className='bg-slate-100 w-32 py-2 border text-sm border-slate-100 rounded-full text-center'>
                  {((pokemon?.height)*0.1).toFixed(1)} meters
                </p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <p className='font-semibold text-sm'>WEIGHT</p>
                <p className='bg-slate-100 w-32 py-2 border text-sm border-slate-100 rounded-full text-center'>
                  {((pokemon?.weight)*0.1).toFixed(1)} kgs
                </p>
              </div>
            </div>
            <PokeInfoSwitchBtn id={pokemon?.id} increaseClickedId={increaseClickedId} decreaseClickedId={decreaseClickedId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
