import React from 'react';
import {DATA} from '../api/hooks';
import Pokemon from './Pokemon';
import LoadBtn from './LoadBtn';

interface PokemonsProps {
  data:DATA[];
  togglePokeInfo: () => void;
  displayInfo: boolean;
  changeSelectedPokemonId: (id: number) => void;
  increaseOffset: () => void;
  decreaseOffset: () => void;
  clickedPokemonId: number;
  offset: number;
  searchInput: string;
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
  searchInput,
}: PokemonsProps) => {
  const totalPokemons = data.length;
  return (
    <div
      className={`pokemons flex flex-col w-full items-center pt-6 min-h-screen `}
    >
      {/* <div className='w-full flex gap-4 justify-center items-center'>
        <LoadBtn
          label='<'
          onClick={decreaseOffset}
          display={offset === 0 ? 'hidden' : 'block'}
        />
        <p
          className={`text-gray-500 text-xs ${
            totalPokemons < 60 ? 'hidden' : 'block'
          }`}
        >
          Page {(offset / 60 + 1).toString()}
        </p>
        <LoadBtn
          label='>'
          onClick={increaseOffset}
          display={
            offset === 10260
              ? 'hidden'
              : totalPokemons < 60
              ? 'hidden'
              : 'block'
          }
        />
      </div> */}
      {/* <p className='text-xs text-gray-500 mt-4'>
        Showing{' '}
        {searchInput
          ? totalPokemons
          : `(${offset + 1} - ${offset + 60}
        )`}{' '}
        of 10271 pokemons.
      </p> */}
      <div
        className={`grid auto-rows-fr w-full ${
          displayInfo
            ? 'pr-[25rem] gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'
            : ' gap-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2'
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
      {/* <div className='w-full flex gap-4 mt-10 justify-center items-center'>
        <LoadBtn
          label='<'
          onClick={decreaseOffset}
          display={offset === 0 ? 'hidden' : 'block'}
        />
        <p
          className={`text-gray-500 text-xs ${
            totalPokemons < 60 ? 'hidden' : 'block'
          }`}
        >
          Page {(offset / 60 + 1).toString()}
        </p>
        <LoadBtn
          label='>'
          onClick={increaseOffset}
          display={
            offset === 10260
              ? 'hidden'
              : totalPokemons < 60
              ? 'hidden'
              : 'block'
          }
        />
      </div> */}
    </div>
  );
};

export default Pokemons;
