import React from 'react';

const PokemonsShimmer = () => {
  
    return (
     
        
        <div className='shimmer w-full pt-10 h-full bg-white  border rounded shadow flex flex-col gap-3 items-center px-3  pb-8'>
          <p className='text-xs  font-semibold bg-gray-200 h-3 w-6 border ronded-lg'></p>
          <p className='font-bold bg-gray-300 w-24 h-5  text-sm'></p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <button className='bg-gray-200 w-16 border rounded-lg border-gray-200 h-8'></button>
            <button className='bg-gray-200 w-16 border rounded-lg border-gray-200 h-8'></button>
          </div>
        </div>
    
    );
  }


export default PokemonsShimmer;
