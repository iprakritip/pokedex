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
        <MenuItem label='Pokedex' border='border-green-500' bg='bg-green-500' />
        <MenuItem label='Moves' border='border-pink-500' bg='bg-pink-500' />
        <MenuItem label='Abilities' border='border-blue-500' bg='bg-blue-500' />
        <MenuItem label='Items' border='border-yellow-500' bg='bg-yellow-500' />
        <MenuItem label='Locations'  border='border-purple-500' bg='bg-purple-500' />
        <MenuItem label='Type Effects' border='border-rose-950' bg='bg-rose-950' />
      </div>
    </div>
  );
};

export default Menu;
