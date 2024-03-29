import {type} from 'os';
import React from 'react';

interface TypeProps {
  typeName: string;
  typeId: number;
}

const Type = ({typeName, typeId}: TypeProps) => {
  const className=`${typeName === 'grass' ? 'bg-grass border-grass':''} ${
    typeName === 'poison' ? 'bg-poison border-poison':''
  }
  ${typeName === 'fire' ? 'bg-fire border-fire ':''}
  ${typeName === 'water' ? 'bg-water border-water ':''}
  ${typeName === 'flying' ? 'bg-flying border-flying ':''} 
  ${typeName === 'bug' ? 'bg-bug border-bug ':''} 
  ${typeName === 'normal' ? 'bg-normal border-normal ':''} 
  ${typeName === 'ground' ? 'bg-ground border-ground ':''} 
  ${typeName === 'fairy' ?'bg-fairy border-fairy ':'first-letter:'} 
  ${typeName === 'fighting' ? 'bg-fighting border-fighting ':''} 
  ${typeName === 'psychic' ?'bg-psychic border-psychic ':''} 
  ${typeName === 'rock' ? 'bg-rock border-rock ':''} 
  ${typeName === 'steel' ? 'bg-steel border-steel ':''} 
  ${typeName === 'ice' ? 'bg-ice border-ice ':''} 
  ${typeName === 'dark' ? 'bg-dark border-dark ':''} 
  ${typeName === 'dragon' ? 'bg-dragon border-dragon ':''} 
  ${typeName === 'ghost' ?'bg-ghost border-ghost ':''}
  ${typeName === 'electric' ?' bg-electric border-electric':''}  
 `
  return (
    <button
      className={`${className}  px-3 py-2 border  rounded-md text-xs font-medium text-white`}
    >
      {typeName[0].toUpperCase()+typeName.slice(1)}
    </button>
  );
};

export default Type;
