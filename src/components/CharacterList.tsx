import React, {useState} from 'react';
import CharacterCard from './CharacterCard';
import CharacterInfo from './CharacterInfo';

const CharacterList = () => {
  const [toggleDetails, setToggleDetails] = useState<boolean>(false);
  const toggleDetailsCard=()=>{
    setToggleDetails(!toggleDetails)
  }
  return (
    <div className='flex'>
      <div
        className={`mt-[8rem] ${
          toggleDetails ? 'mr-[25rem]' : ''
        } flex flex-wrap justify-between gap-10 w-full`}
      >
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
        <CharacterCard toggleDetailsCard={toggleDetailsCard} />
       
      </div>
      <CharacterInfo toggleDetails={toggleDetails} />
    </div>
  );
};

export default CharacterList;
