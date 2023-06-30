import React from 'react';
import {DATA} from '../api/hooks';
import Pokemon from './Pokemon';
import LoadBtn from './LoadBtn';

interface PokemonsProps {
  data:DATA[];
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
      className={`pokemons flex flex-col w-full items-center pt-6 min-h-screen `}
    >

      <div
        className={`grid auto-rows-fr w-full ${
          displayInfo
            ? 'pr-[25rem] gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
            : ' gap-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2'
        }`}
      >
        {data.map((pokemon) => {
          // console.log(pokemon);
          
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
