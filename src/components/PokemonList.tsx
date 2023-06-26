import React, {useState} from 'react';
import {useGetAllPokemons} from '../api/hooks';
import PokemonInfo from './PokemonInfo';
import Pokemons from './Pokemons';

const PokemonList = () => {
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const [clickedPokemonId,setClickedPokemonId]= useState(0)
  const togglePokeInfo = () => {
    setDisplayInfo(true);
    // console.log(displayInfo);

  };
  const closePokeInfo=()=>{
    setDisplayInfo(false);
  }
  const changeSelectedPokemonId= (id:number)=>{
    setClickedPokemonId(id)
  }
 
  const {data, error, loading} = useGetAllPokemons();
  // console.log(data);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error....</div>;

  return (
    <div className='flex w-screen mt-6'>
      <Pokemons
        data={data}
        togglePokeInfo={togglePokeInfo}
        displayInfo={displayInfo}
        changeSelectedPokemonId={changeSelectedPokemonId}
      />
      <PokemonInfo
        displayInfo={displayInfo}
        clickedPokemonId={clickedPokemonId}
        closePokeInfo={closePokeInfo}
      />
    </div>
  );
};

export default PokemonList;
