import React, {useState} from 'react';
import CharacterCard from './CharacterCard';
import CharacterInfo from './CharacterInfo';

const CharacterList = () => {
  const [toggleDetails, setToggleDetails] = useState<boolean>(false);
  return (
    <div className='flex'>
      <div className=' mt-[8rem] flex flex-wrap justify-between gap-10 w-full'>
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
        <CharacterCard setToggleDetails={setToggleDetails} />
      </div>
      <CharacterInfo toggleDetails={toggleDetails} />
    </div>
  );
};

export default CharacterList;
