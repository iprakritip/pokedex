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
        className='border w-full border-gray-300 h-10 rounded pl-4 pr-8 outline-none'
        onChange={(e) => changeSearchInput(e.target.value)}
      />
      <div className='absolute top-[25%]  right-[0.5%] '>
        <SVG />
      </div>
      
    </div>
  );
};

export default Search;
