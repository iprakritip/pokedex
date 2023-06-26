import React from 'react';
import {Link} from 'react-router-dom';
import Type from '../components/Type';

interface PokemonProps {
  togglePokeInfo: () => void;
  id: number;
  name: string;
  types: {
    pokemon_v2_type: {
      id: number;
      name: string;
    };
  }[];
  changeSelectedPokemonId:(id:number)=>void
}

const Pokemon = ({togglePokeInfo, id, name, types,changeSelectedPokemonId}: PokemonProps) => {
const handleClick=()=>{
  togglePokeInfo();
  changeSelectedPokemonId(id);
}
// const addDefaultSrc=(e: React.SyntheticEvent<HTMLImageElement, Event>)=>{
//   const target = e.currentTarget as HTMLImageElement;
//   target.src = 'https://static-00.iconduck.com/assets.00/blocked-icon-256x256-fxgkjvxb.png'
// }
  return (
    <Link to={`/${name}`} className='relative w-[15%] h-[15rem] pt-28'>
      <div onClick={handleClick}>
        <div className='absolute w-full bottom-[45%] z-10 flex justify-center'>
          <img
            src={`https://projectpokemon.org/images/normal-sprite/${name.replace(
              '-',
              '_'
            )}.gif`}
            alt={name}
            // onError={(e)=>this.addDefaultSrc(e)}
          />
        </div>
        <div className='bg-white w-full relative border rounded shadow flex flex-col gap-3 items-center pt-8 pb-8'>
          <p className='text-xs  font-semibold text-gray-500'>#{id}</p>
          <p className='font-bold text-gray-800 text-sm'>
            {name.toUpperCase()}
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            {types.map((type) => {
              return (
                <Type
                  key={type.pokemon_v2_type.id}
                  typeName={type.pokemon_v2_type.name}
                  typeId={type.pokemon_v2_type.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
