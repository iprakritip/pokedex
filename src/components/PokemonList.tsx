import React, {useEffect, useState} from 'react';
import {useGetAllPokemons} from '../api/hooks';
import PokemonInfo from './PokemonInfo';
import Pokemons from './Pokemons';

const PokemonList = () => {
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const [clickedPokemonId, setClickedPokemonId] = useState(0);
  const [offset, setOffset] = useState(0);

  const increaseOffset = () => {
    setOffset((prevValue) => prevValue + 24);
  };

  const togglePokeInfo = () => {
    setDisplayInfo(true);
  };
  const increaseClickedId = () => {
    setClickedPokemonId(clickedPokemonId + 1);
  };
  const decreaseClickedId = () => {
    setClickedPokemonId(clickedPokemonId - 1);
  };
  const closePokeInfo = () => {
    setDisplayInfo(false);
  };
  const changeSelectedPokemonId = (id: number) => {
    setClickedPokemonId(id);
  };

  const {data, error, loading, fetchMore} = useGetAllPokemons(offset);
  // const initData = data;

  // const pokemonData = [...data, data.pokemon_v2_pokemon];

  if (loading) return <div>loading...</div>;
  if (error) return <div>error....</div>;

  return (
    <div className='flex w-screen mt-6'>
      <Pokemons
        data={data}
        togglePokeInfo={togglePokeInfo}
        displayInfo={displayInfo}
        changeSelectedPokemonId={changeSelectedPokemonId}
        increaseOffset={increaseOffset}
      />
      <PokemonInfo
        displayInfo={displayInfo}
        clickedPokemonId={clickedPokemonId}
        closePokeInfo={closePokeInfo}
        increaseClickedId={increaseClickedId}
        decreaseClickedId={decreaseClickedId}
      />
    </div>
  );
};

export default PokemonList;
