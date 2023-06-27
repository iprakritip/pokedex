import React, {useState} from 'react';
import PokemonList from '../components/PokemonList';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const closeMenu = () => {
    setToggleMenu(false);
  };
  const accessMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className='relative'>
      <Menu toggleMenu={toggleMenu} closeMenu={closeMenu} />
      <Navbar accessMenu={accessMenu} />
      <PokemonList />
      <Footer />
    </div>
  );
};

export default Home;
