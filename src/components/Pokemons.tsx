import React from 'react';
import {API_DATA} from '../api/hooks';
import Pokemon from './Pokemon';

interface PokemonsProps {
  data: API_DATA[];
  togglePokeInfo: () => void;
  displayInfo: boolean;
  changeSelectedPokemonId: (id: number) => void;
  clickedPokemonId: number;
}

const Pokemons = ({
  data,
  togglePokeInfo,
  displayInfo,
  changeSelectedPokemonId,
  clickedPokemonId,
}: PokemonsProps) => {
  return (
    <div
      className={`pokemons  w-full  pt-6 min-h-screen `}
    >
      <div
        className={`grid auto-rows-fr w-full ${
          displayInfo
            ? 'md:pr-[25rem] gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
            : ' gap-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2'
        }`}
      >
        {data.length===0 && <p className='text-gray-500 text-sm mt-6'>No results found.</p>}
        {data.map((pokemon) => {

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
    </div>
  );
};

export default Pokemons;
