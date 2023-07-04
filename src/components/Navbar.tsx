import React from 'react';
import {Link} from 'react-router-dom';
import Image from './Image';
import MenuIcon from './MenuIcon';
import Search from './Search';
import Logo from '../img/poke-logo.png'

interface NavbarProps {
  accessMenu: () => void;
  changeSearchInput: (input: string) => void;
}

const Navbar = ({accessMenu, changeSearchInput}: NavbarProps) => {
  return (
    <div className='w-screen bg-slate-100 fixed top-0 z-20 px-[5vw] md:px-[5vw]'>
      <div className='flex justify-between items-center'>
        <Link to='/'>
          <div
            className='w-40 cursor-pointer mt-1'
            onClick={() => changeSearchInput('')}
          >
            <Image src={Logo} alt='poke-logo' />
          </div>
        </Link>
        <MenuIcon setToggleMenu={accessMenu} />
      </div>
      <Search changeSearchInput={changeSearchInput} />
    </div>
  );
};

export default Navbar;
