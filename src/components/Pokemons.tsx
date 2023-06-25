import React from 'react';
import {DATA} from '../api/hooks';
import Pokemon from './Pokemon';

interface PokemonsProps {
  data: DATA;
  togglePokeInfo: (id:number) => void;
  displayInfo:boolean
}

const Pokemons = ({data, togglePokeInfo,displayInfo}: PokemonsProps) => {
  // console.log(data.pokemon_v2_pokemon);
  return (
    <div className={`flex flex-wrap gap-6 justify-between ${displayInfo?'mr-96':''}`}>
      {data.pokemon_v2_pokemon.map((pokemon) => {
        const types = pokemon.pokemon_v2_pokemontypes;
        return (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            types={types}
            togglePokeInfo={togglePokeInfo}
          />
        );
      })}
    </div>
  );
};

export default Pokemons;
