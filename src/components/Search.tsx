import React from 'react';
import SVG from './SVG';

const Search = () => {
  return (
    <div className='flex w-screen justify-between relative mt-[2rem]'>
      <input
        type='text'
        placeholder='Search'
        className='w-[91%]  border border-gray-300 rounded px-4 outline-none'
      />

      <div className='absolute top-3 right-[7.5rem] '>
        <SVG />
      </div>
      <button className='bg-pink-600 text-white px-6 py-2 border text-lg rounded-lg'>
        Search
      </button>
    </div>
  );
};

export default Search;
