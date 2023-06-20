import React, {useState} from 'react';
import CharacterList from './../components/CharacterList';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Menu from '../components/Menu';

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <div className='relative'>
      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navbar setToggleMenu={setToggleMenu} />
      <Search />
      <CharacterList />
    </div>
  );
};

export default Home;
