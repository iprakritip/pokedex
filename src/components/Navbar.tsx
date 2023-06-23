import React from 'react';
import MenuIcon from './MenuIcon';

interface NavbarProps {
  accessMenu: () => void;
}

const Navbar = ({accessMenu}: NavbarProps) => {
  return (
    <div className='w-screen flex justify-between items-center'>
      <div className='w-48'>
        <img
          className='w-full'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'
          alt='poke-logo'
        />
      </div>
      <MenuIcon setToggleMenu={accessMenu} />
    </div>
  );
};

export default Navbar;
