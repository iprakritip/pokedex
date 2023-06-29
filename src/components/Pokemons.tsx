import React from 'react';
import {DATA} from '../api/hooks';
import Pokemon from './Pokemon';
import LoadBtn from './LoadBtn';

interface PokemonsProps {
  data: DATA;
  togglePokeInfo: () => void;
  displayInfo: boolean;
  changeSelectedPokemonId: (id: number) => void;
  increaseOffset: () => void;
  decreaseOffset: () => void;
  clickedPokemonId: number;
  offset: number;
}

const Pokemons = ({
  data,
  togglePokeInfo,
  displayInfo,
  changeSelectedPokemonId,
  increaseOffset,
  decreaseOffset,
  clickedPokemonId,
  offset,
}: PokemonsProps) => {
  return (
    <div
      className={`pokemons flex flex-col items-center pt-6 min-h-screen  ${
        displayInfo ? 'mr-[25rem] w-max' : 'w-full'
      }`}
    >
     <div className='w-full flex gap-4 justify-center items-center'>
        <LoadBtn
          label='<'
          onClick={decreaseOffset}
          display={offset === 0 ? 'hidden' : 'block'}
        />
        <p className='text-gray-500 text-xs'>page {(offset / 50 + 1).toString()}</p>
        <LoadBtn
          label='>'
          onClick={increaseOffset}
          display={offset === 10250 ? 'hidden' : 'block'}
        />
      </div>
      <div
        className={`flex flex-wrap gap-6 justify-start ${
          displayInfo ? 'mr-[25rem] w-[68vw]' : 'w-full'
        }`}
      >
        {data.pokemon_v2_pokemon.map((pokemon) => {
          const types = pokemon.pokemon_v2_pokemontypes;
          return (
            <Pokemon
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              types={types}
              togglePokeInfo={togglePokeInfo}
              changeSelectedPokemonId={changeSelectedPokemonId}
              clickedPokemonId={clickedPokemonId}
              displayInfo={displayInfo}
            />
          );
        })}
      </div>
      <div className='w-full flex gap-4 justify-center items-center'>
        <LoadBtn
          label='<'
          onClick={decreaseOffset}
          display={offset === 0 ? 'hidden' : 'block'}
        />
        <p className='text-gray-500 text-xs'>page {(offset / 50 + 1).toString()}</p>
        <LoadBtn
          label='>'
          onClick={increaseOffset}
          display={offset === 10250 ? 'hidden' : 'block'}
        />
      </div>
    </div>
  );
};

export default Pokemons;
