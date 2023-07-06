import React, { ChangeEvent } from 'react';
import Input from './Input';
import SVG from './SVG';

interface SearchProps {
  changeSearchInput: (input: string) => void;
}

const Search = ({changeSearchInput}: SearchProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeSearchInput(e.target.value);
  };
  return (
    <div className='flex w-full relative mt-8 mb-4 justify-between'>
      <Input
        placeholder='Search for Pokemon'
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
      />
      <div className='absolute top-[25%]  right-[0.5%] '>
        <SVG />
      </div>
    </div>
  );
};

export default Search;
