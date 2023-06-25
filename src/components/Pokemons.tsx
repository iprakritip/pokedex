import React from 'react';
import {DATA, POKEMON_DATA} from '../api/hooks';
import CharacterCard from './Pokemon';

const Pokemons = ({data}: DATA) => {
  console.log(data);
  return (
    <div>
      {data.pokemon_v2_pokemon.map((pokemon) => {
        return (
          // <div key={pokemon.id}>
          //   {pokemon.name}
          //   <div>
          //     {pokemon.pokemon_v2_pokemontypes.map(
          //       (type) => type.pokemon_v2_type.name
          //     )}
          //   </div>
          // </div>
          <div key={pokemon.id}>
            <CharacterCard name={pokemon.name} id={pokemon.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Pokemons;
