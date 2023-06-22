import React from 'react';

const Search = () => {
  return (
    <div className='flex w-screen justify-between relative mt-[2rem]'>
      <input
        type='text'
        placeholder='Search'
        className='w-[91%]  border border-gray-300 rounded px-4 outline-none'
      />
      
      <div className='absolute top-3 right-[7.5rem] '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 30 30'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </div>
      <button className='bg-pink-600 text-white px-6 py-2 border text-lg rounded-lg'>
        Search
      </button>
    </div>
  );
};

export default Search;
