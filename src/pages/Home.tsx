import React from 'react';
import CharacterList from './../components/CharacterList'
import Navbar from '../components/Navbar';
import Search from '../components/Search';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <CharacterList />
    </div>
  );
};

export default Home;
