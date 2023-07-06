import React from 'react';
import Button from './Button';
import MenuItem from './MenuItem';

interface MenuProps {
  toggleMenu: boolean;
  closeMenu: () => void;
}

const Menu = ({toggleMenu, closeMenu}: MenuProps) => {
  const handleClick=()=>{
    //do nothing
  }
  return (
    <div data-testid='menu'
      className={`h-screen w-[80vw] md:w-[30vw] bg-white z-30 fixed ${
        toggleMenu ? 'top-0 left-0' : 'left-[-90vw] md:left-[-50vw] top-0'
      } transition-position duration-500 ease-in-out flex flex-col gap-8 items-center`}
    >
      <p className='w-full bg-green-500 h-[4rem] text-white text-xl font-semibold flex justify-between items-center px-6'>
        Menu
        <Button className='' onClick={closeMenu} label='✕' />
      </p>
      <div className='flex flex-wrap justify-center md:justify-between gap-4 px-6 '>
        <MenuItem label='Pokedex' border='border-green-500' bg='bg-green-500' onClick={handleClick} />
        <MenuItem label='Moves' border='border-pink-500' bg='bg-pink-500' onClick={handleClick} />
        <MenuItem label='Abilities' border='border-blue-500' bg='bg-blue-500' onClick={handleClick} />
        <MenuItem label='Items' border='border-yellow-500' bg='bg-yellow-500' onClick={handleClick} />
        <MenuItem
          label='Locations'
          border='border-purple-500'
          bg='bg-purple-500'
          onClick={handleClick}
        />
        <MenuItem
          label='Type Effects'
          border='border-rose-950'
          bg='bg-rose-950'
          onClick={handleClick}
        />
      </div>
      <p className='text-sm text-green-500'>*The menu is under construction*</p>
    </div>
  );
};

export default Menu;
