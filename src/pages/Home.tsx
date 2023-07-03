import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import {Outlet} from 'react-router-dom';

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState('');
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const closeMenu = () => {
    setToggleMenu(false);
  };
  const accessMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const changeSearchInput = (input: string) => {
    setSearchInput(input);
  };

  return (
    <div className='relative bg-slate-100 flex flex-col items-center'>
      <div className={`modal bg-black opacity-20 h-full w-full absolute top-0 z-30 ${displayInfo?'block md:hidden':'hidden'}`}></div>
      <Menu toggleMenu={toggleMenu} closeMenu={closeMenu} />
      <Navbar accessMenu={accessMenu} changeSearchInput={changeSearchInput} />
      <Outlet context={{searchInput, displayInfo, setDisplayInfo}} />
      <Footer />
    </div>
  );
};

export default Home;
