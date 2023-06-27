import React from 'react';
import {DATA} from '../api/hooks';
import Pokemon from './Pokemon';

interface PokemonsProps {
  data: DATA;
  togglePokeInfo: () => void;
  displayInfo: boolean;
  changeSelectedPokemonId: (id: number) => void;
  increaseOffset: () => void;
}

const Pokemons = ({
  data,
  togglePokeInfo,
  displayInfo,
  changeSelectedPokemonId,
  increaseOffset,
}: PokemonsProps) => {
  return (
    <div
      className={`pokemons flex flex-col items-center gap-28 min-h-screen ${
        displayInfo ? 'mr-[25rem] w-max' : 'w-full'
      }`}
    >
      <div className={`flex flex-wrap gap-6 justify-between ${
        displayInfo ? 'mr-[25rem] w-[68vw]' : 'w-full'
      }`}>
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
            />
          );
        })}
      </div>
      <button
        className='bg-pink-600 border border-pink-600 text-white w-[14%] text-sm px-6 py-2 rounded-lg'
        onClick={increaseOffset}
      >
        Load more
      </button>
    </div>
  );
};

export default Pokemons;
