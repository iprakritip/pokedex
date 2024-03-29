import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {useOutletContext} from 'react-router-dom';
import {useGetAllPokemons} from '../api/hooks';
import useDebouncer from '../hooks/useDebouncer';
import PokemonInfo from './PokemonInfo';
import Pokemons from './Pokemons';
import ReactPaginate from 'react-paginate';
import PokemonsShimmer from './shimmers/PokemonsShimmer';

const PokemonList = () => {
  const {searchInput, displayInfo, setDisplayInfo} = useOutletContext<{
    searchInput: string;
    displayInfo: boolean;
    setDisplayInfo: Dispatch<SetStateAction<boolean>>;
  }>();

  const [clickedPokemonId, setClickedPokemonId] = useState(
    Number(localStorage.getItem('id'))
  );
  const [offset, setOffset] = useState(0);
  const itemsPerPage = 60;
  const endOffset = offset + itemsPerPage;
  const [offsetHolder, setOffsetHolder] = useState(0);

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
    const {data, error, loading, fetchMore} =
      useGetAllPokemons(debouncedSearch);
    return {data, error, loading, fetchMore};
  };

  const {data, error, loading} = getData();

  const currentData = data?.pokemon_v2_pokemon.slice(offset, endOffset);
  const pageCount = Math.ceil(data?.pokemon_v2_pokemon.length / itemsPerPage);

  const handlePageClick = (e: {selected: number}) => {
    const newOffset =
      (e.selected * itemsPerPage) % data.pokemon_v2_pokemon.length;
    setOffset(newOffset);
    setOffsetHolder(newOffset);
  };

  useEffect(() => {
    searchInput !== ''
      ? setOffset(0)
      : offsetHolder > 0
      ? setOffset(offsetHolder)
      : setOffset(0);
  }, [searchInput]);

  if (loading) {
    const shimmers = [];
    const offset = 60;
    for (let i = 0; i < offset; i++) {
      shimmers.push(<PokemonsShimmer />);
    }
    return (
      <div className='loading  w-full mt-[15rem] px-[5vw] pt-6 min-h-screen grid auto-rows-fr gap-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2'>
        {shimmers}
      </div>
    );
  }
  if (error)
    return (
      <div className='loading  w-full mt-[15rem] px-[5vw] pt-6 min-h-screen grid auto-rows-fr gap-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2'>
        error....
      </div>
    );

  return (
    <div className='pokemonlist flex flex-col w-screen mt-[9rem] px-[5vw]'>
      <div className='flex'>
        <Pokemons
          data={currentData}
          togglePokeInfo={togglePokeInfo}
          displayInfo={displayInfo}
          changeSelectedPokemonId={changeSelectedPokemonId}
          clickedPokemonId={clickedPokemonId}
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
      </div>
      <div className='mt-8'>
        <ReactPaginate
          breakLabel='...'
          nextLabel='next >'
          onPageChange={(e) => handlePageClick(e)}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel='< previous'
          renderOnZeroPageCount={null}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default PokemonList;
