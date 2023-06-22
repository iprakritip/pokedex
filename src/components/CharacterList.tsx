import React, {useState} from 'react';
import CharacterCard from './CharacterCard';
import CharacterInfo from './CharacterInfo';

const CharacterList = () => {
  const [toggleDetails, setToggleDetails] = useState<boolean>(false);
  const toggleDetailsCard = () => {
    setToggleDetails(!toggleDetails);
  };
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
      <CharacterInfo
        toggleDetails={toggleDetails}
        id='001'
        name='Bulbusaur'
        img='https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-HD.png'
        description='A strange seed was planted on its back at birth.The plant sprouts
        and grows with this POKéMON.'
        height='0.7'
        weight='6.9'
      />
    </div>
  );
};

export default CharacterList;
