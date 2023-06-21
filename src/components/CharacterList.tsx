import React from 'react';
import CharacterCard from './CharacterCard';
import CharacterInfo from './CharacterInfo';

const CharacterList = () => {
  return (
    <div className='flex'>
      <div className='mt-[8rem] flex flex-wrap justify-between gap-10 w-full'>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
      <CharacterInfo />
    </div>
  );
};

export default CharacterList;
