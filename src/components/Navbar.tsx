import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from './MenuIcon';

interface NavbarProps {
  accessMenu: () => void;
}

const Navbar = ({accessMenu}: NavbarProps) => {
  return (
    <div className='w-screen flex justify-between items-center'>
      <Link to='/'>
      <div className='w-48 cursor-pointer'>
        <img
          className='w-full'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'
          alt='poke-logo'
        />
      </div>
      </Link>
      <MenuIcon setToggleMenu={accessMenu} />
    </div>
  );
};

export default Navbar;
