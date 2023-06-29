import React from 'react';
import SVG from './SVG';

interface SearchProps {
  changeSearchInput: (input: string) => void;
}

const Search = ({changeSearchInput}: SearchProps) => {
  return (
    <div className='flex w-full relative mt-8 mb-4 justify-between'>
      <input
        type='text'
        placeholder='Search'
        className='w-[90%] text-gray-500 border border-gray-300 rounded px-4 outline-none'
        onChange={(e) => changeSearchInput(e.target.value)}
      />

      <div className='absolute top-[25%] right-[22%] md:right-[14%] lg:right-[10.5%] '>
        <SVG />
      </div>
      <button className='bg-pink-600 text-white px-6 py-2 border text-lg rounded-lg'>
        Search
      </button>
    </div>
  );
};

export default Search;
