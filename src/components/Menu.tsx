import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <div className='h-screen w-[30vw] bg-white z-10 fixed flex flex-col gap-8 items-center'>
      <p className='w-full bg-green-500 h-[4rem] text-white text-xl font-semibold flex justify-between items-center px-6'>
        Menu
        <button className=''>✕</button>
      </p>
      <div className='flex flex-wrap justify-between gap-4 px-6'>
        <MenuItem label='Pokedex' color='green-500 ' />
        <MenuItem label='Moves' color='pink-500' />
        <MenuItem label='Abilities' color='blue-500 ' />
        <MenuItem label='Items' color='yellow-500 ' />
        <MenuItem label='Locations' color='purple-500 ' />
        <MenuItem label='Type Effects' color='rose-950 ' />
      </div>
    </div>
  );
};

export default Menu;
