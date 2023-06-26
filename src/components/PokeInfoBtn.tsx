import React from 'react';

const PokeInfoBtn = () => {
  return (
    <button className='w-full flex justify-center items-center font-semibold text-sm gap-2 bg-slate-100 border py-2 border-slate-100 rounded-md'>
      Ivysaur
      <img
        src='https://projectpokemon.org/images/normal-sprite/ivysaur.gif'
        alt='ivysaur'
        className='w-7'
      />
      <p className='font-semibold text-lg'>{`>`}</p>
    </button>
  );
};

export default PokeInfoBtn;
