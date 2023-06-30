import React, {useEffect, useState} from 'react';
import {useOutletContext} from 'react-router-dom';
import {useGetAllPokemons} from '../api/hooks';
import useDebouncer from '../hooks/useDebouncer';
import Loader from './Loader';
import PokemonInfo from './PokemonInfo';
import Pokemons from './Pokemons';
import PokemonsLoader from './PokemonsLoader';

const PokemonList = () => {
  const {searchInput} = useOutletContext<{
    searchInput: string;
  }>();
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const [clickedPokemonId, setClickedPokemonId] = useState(
    Number(localStorage.getItem('id'))
  );
  const [offset, setOffset] = useState(0);

  const increaseOffset = () => {
    setOffset((prevValue) => prevValue + 60);
  };
  const decreaseOffset = () => {
    setOffset((prevValue) => prevValue - 60);
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
  // console.log(searchInput);

  const debouncedSearch = useDebouncer(searchInput, 500);
  // console.log('debounced', debouncedSearch);

  const getData = () => {
    const {data, error, loading, fetchMore} = useGetAllPokemons(
      offset,
      debouncedSearch
    );
    return {data, error, loading, fetchMore};
  };
  useEffect(() => {
    searchInput && setOffset(0);
  }, [searchInput]);

  const {data, error, loading, fetchMore} = getData();
  // console.log(data);
  if (loading) {
    // console.log('loading...');
    return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <PokemonsLoader />
      </div>
    );
  }
  if (error) return <div>error....</div>;

  return (
    <div className='pokemonlist flex w-screen mt-[9rem] px-4'>
      <Pokemons
        data={data}
        togglePokeInfo={togglePokeInfo}
        displayInfo={displayInfo}
        changeSelectedPokemonId={changeSelectedPokemonId}
        increaseOffset={increaseOffset}
        clickedPokemonId={clickedPokemonId}
        offset={offset}
        decreaseOffset={decreaseOffset}
        searchInput={searchInput}
      />
      <PokemonInfo
        displayInfo={displayInfo}
        clickedPokemonId={clickedPokemonId}
        closePokeInfo={closePokeInfo}
        increaseClickedId={increaseClickedId}
        decreaseClickedId={decreaseClickedId}
        togglePokeInfo={togglePokeInfo}
        changeSelectedPokemonId={changeSelectedPokemonId}
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
