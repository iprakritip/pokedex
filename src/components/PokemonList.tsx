import React, {useState} from 'react';
import {useOutletContext} from 'react-router-dom';
import {useGetAllPokemons} from '../api/hooks';
import useDebouncer from '../hooks/useDebouncer';
import PokemonInfo from './PokemonInfo';
import Pokemons from './Pokemons';

const PokemonList = () => {
  const {searchInput} = useOutletContext<{
    searchInput: string;
  }>();
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const [clickedPokemonId, setClickedPokemonId] = useState(Number(localStorage.getItem('id')));
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
  const debouncedSearch = useDebouncer(searchInput, 500);

  const getData = () => {
    const {data, error, loading, fetchMore} = useGetAllPokemons(
      offset,
      debouncedSearch
    );
    return {data, error, loading, fetchMore};
  };

  const {data, error, loading, fetchMore} = getData();


  if (loading) return <div>loading...</div>;
  if (error) return <div>error....</div>;

  return (
    <div className='pokemonlist flex w-screen mt-40 px-4'>
      <Pokemons
        data={data}
        togglePokeInfo={togglePokeInfo}
        displayInfo={displayInfo}
        changeSelectedPokemonId={changeSelectedPokemonId}
        increaseOffset={increaseOffset}
        clickedPokemonId={clickedPokemonId}
      />
      <PokemonInfo
        displayInfo={displayInfo}
        clickedPokemonId={clickedPokemonId}
        closePokeInfo={closePokeInfo}
        increaseClickedId={increaseClickedId}
        decreaseClickedId={decreaseClickedId}
        togglePokeInfo={togglePokeInfo}
      />
      {/* <Outlet
        context={{
          displayInfo,
          clickedPokemonId,
          closePokeInfo,
          increaseClickedId,
          decreaseClickedId,
        }}
      /> */}
    </div>
  );
};

export default PokemonList;
