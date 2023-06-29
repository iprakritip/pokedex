import React, {useState} from 'react';
import PokemonList from '../components/PokemonList';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState('');
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
    <div className='relative bg-slate-100'>
      <Menu toggleMenu={toggleMenu} closeMenu={closeMenu} />
      <Navbar accessMenu={accessMenu} changeSearchInput={changeSearchInput}  />
      <Outlet context={{searchInput}} />
      <Footer />
    </div>
  );
};

export default Home;
