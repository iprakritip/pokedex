import React from 'react';
import {DATA} from '../api/hooks';
import Pokemon from './Pokemon';

const Pokemons = ({data}: DATA) => {
  // console.log(data.pokemon_v2_pokemon);
  return (
    <div className='flex gap-8 flex-wrap justify-between'>
      {data.pokemon_v2_pokemon.map((pokemon) => {
        //  const types = pokemon.pokemon_v2_pokemontypes.pokemon_v2_type.name;
       const types = pokemon.pokemon_v2_pokemontypes;
        return (
          <Pokemon key={pokemon.id} name={pokemon.name} id={pokemon.id} types={types} />
        );
      })}
    </div>
  );
};

export default Pokemons;
