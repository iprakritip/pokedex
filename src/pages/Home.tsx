import React from 'react';
import CharacterList from './../components/CharacterList';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <div className='relative'>
      <Menu />
      <Navbar />

      <Search />
      <CharacterList />
    </div>
  );
};

export default Home;
