import React, {Dispatch, SetStateAction} from 'react';
import MenuIcon from './MenuIcon';

interface NavbarProps {
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({setToggleMenu}: NavbarProps) => {
  return (
    <div className='w-screen flex justify-between items-center'>
      <div className='w-[12rem]'>
        <img
          className='w-full'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'
          alt='poke-logo'
        />
      </div>
      <MenuIcon setToggleMenu={setToggleMenu} />
    </div>
  );
};

export default Navbar;
