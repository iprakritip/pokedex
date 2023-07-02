import React from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from './MenuIcon';
import Search from './Search';

interface NavbarProps {
  accessMenu: () => void;
  changeSearchInput: (input: string) => void;
}

const Navbar = ({accessMenu, changeSearchInput}: NavbarProps) => {
  return (
    <div className='w-screen bg-slate-100 fixed top-0 z-20 px-[10vw] md:px-[5vw]'>
      <div className='flex justify-between items-center'>
        <Link to='/'>
          <div
            className='w-40 cursor-pointer mt-1'
            onClick={() => changeSearchInput('')}
          >
            <img
              className='w-full'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'
              alt='poke-logo'
            />
          </div>
        </Link>
        <MenuIcon setToggleMenu={accessMenu} />
      </div>
      <Search changeSearchInput={changeSearchInput} />
    </div>
  );
};

export default Navbar;
