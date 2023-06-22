import React, {useState} from 'react';
import CharacterCard from './CharacterCard';
import CharacterInfo from './CharacterInfo';

const CharacterList = () => {
  const [toggleDetails, setToggleDetails] = useState<boolean>(false);
  const toggleDetailsCard = () => {
    setToggleDetails(!toggleDetails);
  };
  const data = [
    {
      id: 1,
      name: 'bulbasaur',
      types: [
        {id: 1, name: 'Grass'},
        {id: 2, name: 'Poison'},
      ],
      img: 'https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-HD.png',
    },
    {
      id: 2,
      name: 'bulbasaur',
      type: [
        {id: 1, name: 'Grass'},
        {id: 2, name: 'Poison'},
      ],
      img: 'https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-HD.png',
    },
    {
      id: 3,
      name: 'bulbasaur',
      type: [
        {id: 1, name: 'Grass'},
        {id: 2, name: 'Poison'},
      ],
      img: 'https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-HD.png',
    },
    {
      id: 4,
      name: 'bulbasaur',
      type: [
        {id: 1, name: 'Grass'},
        {id: 2, name: 'Poison'},
      ],
      img: 'https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-HD.png',
    },
    {
      id: 5,
      name: 'bulbasaur',
      type: [
        {id: 1, name: 'Grass'},
        {id: 2, name: 'Poison'},
      ],
      img: 'https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-HD.png',
    },
    {
      id: 6,
      name: 'bulbasaur',
      type: [
        {id: 1, name: 'Grass'},
        {id: 2, name: 'Poison'},
      ],
      img: 'https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-HD.png',
    },
    {
      id: 7,
      name: 'bulbasaur',
      type: [
        {id: 1, name: 'Grass'},
        {id: 2, name: 'Poison'},
      ],
      img: 'https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-HD.png',
    },
  ];
  // const type = data.map((character) => {
  //   const typeNameArray: string[] = [];
  //   const types = character.types?.map((type) => {
  //     typeNameArray.push(type.name);
  //     return typeNameArray;
  //   });
  //  return types
  // });

  // console.log(type);
  

  return (
    <div className='flex'>
      <div
        className={`mt-32 ${
          toggleDetails ? 'mr-96' : ''
        } flex flex-wrap justify-between gap-10 w-full`}
      >
        {data.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              toggleDetailsCard={toggleDetailsCard}
              id={character.id}
              name={character.name}
              img={character.img}
            />
          );
        })}
        {/* <CharacterCard toggleDetailsCard={toggleDetailsCard} />
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
        <CharacterCard toggleDetailsCard={toggleDetailsCard} /> */}
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
