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
        id='001'
        name='Bulbusaur'
        img='https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-HD.png'
        description='A strange seed was planted on its back at birth.The plant sprouts
        and grows with this POKéMON.'
        height='0.7'
        weight='6.9'
        clickedPokemonId={clickedPokemonId}
      />
    </div>
  );
};

export default PokemonList;
