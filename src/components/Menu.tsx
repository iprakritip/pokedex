import React, {Dispatch, SetStateAction} from 'react';
import MenuItem from './MenuItem';

interface MenuProps {
  toggleMenu: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({toggleMenu, setToggleMenu}: MenuProps) => {
  return (
    <div
      className={`h-screen w-[30vw] bg-white z-10 fixed ${
        toggleMenu ? 'top-0 left-0' : 'left-[-30%]'
      } transition-position duration-500 ease-in-out flex flex-col gap-8 items-center`}
    >
      <p className='w-full bg-green-500 h-[4rem] text-white text-xl font-semibold flex justify-between items-center px-6'>
        Menu
        <button className='' onClick={() => setToggleMenu(!toggleMenu)}>
          ✕
        </button>
      </p>
      <div className='flex flex-wrap justify-between gap-4 px-6'>
        <MenuItem label='Pokedex' color='green-500' borderColor='border-green-500' />
        <MenuItem label='Moves' color='pink-500' borderColor='border-pink-500' />
        <MenuItem label='Abilities' color='blue-500' borderColor='border-pink-500' />
        <MenuItem label='Items' color='yellow-500' borderColor='border-pink-500' />
        <MenuItem label='Locations' color='purple-500' borderColor='border-pink-500' />
        <MenuItem label='Type Effects' color='rose-950' borderColor='border-pink-500' />
      </div>
    </div>
  );
};

export default Menu;
