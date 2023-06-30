import React, {useEffect, useState} from 'react';
import {useOutletContext} from 'react-router-dom';
import {useGetAllPokemons} from '../api/hooks';
import useDebouncer from '../hooks/useDebouncer';
import Loader from './Loader';
import PokemonInfo from './PokemonInfo';
import Pokemons from './Pokemons';
import PokemonsLoader from './PokemonsLoader';
import ReactPaginate from 'react-paginate';

const PokemonList = () => {
  const {searchInput} = useOutletContext<{
    searchInput: string;
  }>();
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const [clickedPokemonId, setClickedPokemonId] = useState(
    Number(localStorage.getItem('id'))
  );
  const [offset, setOffset] = useState(0);
  const [offsetHolder, setOffsetHolder] = useState(0);
  const itemsPerPage = 60;
  const endOffset = offset + itemsPerPage;

  const increaseOffset = () => {
    setOffset((prevValue) => prevValue + itemsPerPage);
    setOffsetHolder(offset + itemsPerPage);
  };
  const decreaseOffset = () => {
    setOffset((prevValue) => prevValue - itemsPerPage);
    setOffsetHolder(offset - itemsPerPage);
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
    console.log(offset, 'offset');

    const {data, error, loading, fetchMore} =
      useGetAllPokemons(debouncedSearch);
    return {data, error, loading, fetchMore};
  };

  useEffect(() => {
    searchInput !== ''
      ? setOffset(0)
      : offsetHolder > 0
      ? setOffset(offsetHolder)
      : setOffset(0);
  }, [searchInput]);
  const {data, error, loading, fetchMore} = getData();
  // console.log(data);

  const currentData = data?.pokemon_v2_pokemon.slice(offset, endOffset);
  const pageCount = Math.ceil(data?.pokemon_v2_pokemon.length / itemsPerPage);
  // console.log(pageCount);

  // console.log(data);
  const handlePageClick = (e: {selected: number}) => {
    const newOffset =
      (e.selected * itemsPerPage) % data.pokemon_v2_pokemon.length;
    console.log('selected', e.selected);
    console.log(newOffset, 'newoffset');
    setOffset(newOffset);
  };

  if (loading) {
    // console.log('loading...');
    return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <PokemonsLoader />
      </div>
    );
  }
  if (error) return <div>error....</div>;

  // console.log(currentData);

  return (
    <div className='pokemonlist flex flex-col w-screen mt-[9rem] px-4'>
      <div className='flex'>
        <Pokemons
          data={currentData}
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
