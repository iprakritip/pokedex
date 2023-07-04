import React from 'react';

const PokeInfoShimmer = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='w-full flex justify-end h-4'>
        <button className='text-xs text-gray-500 underline'>{`close>>`}</button>
      </div>
      <div className='w-28 h-28'>
        
      </div>
      <p className='text-sm h-4  font-semibold bg-gray-400 w-8'></p>
      <p className='font-bold h-6  text-lg bg-gray-300 w-32'></p>
      <div className='flex flex-wrap gap-4 h-8'>
        <button className='bg-gray-200 w-16 border rounded-lg border-gray-200 h-8'></button>
        <button className='bg-gray-200 w-16 border rounded-lg border-gray-200 h-8'></button>
      </div>
      <div className='flex flex-col gap-6 items-center'>
        <div className='flex flex-col items-center gap-1 h-18'>
          <p className='font-semibold text-sm h-6 w-36 bg-gray-100 border border-gray-100 rounded-full'>
            
          </p>
          <p className='text-sm font-medium bg-gray-200 border border-gray-200 rounded-lg text-center h-12 w-[21rem]'>
            
          </p>
        </div>
        <div className='flex gap-4 justify-center h-14'>
          <div className='flex flex-col items-center gap-1'>
            <p className='font-semibold text-sm'>HEIGHT</p>
            <p className='bg-slate-100 w-32 py-4 border text-sm border-slate-100 rounded-full text-center'>
              
            </p>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <p className='font-semibold text-sm'>WEIGHT</p>
            <p className='bg-slate-100 w-32 py-4 border text-sm border-slate-100 rounded-full text-center'>
             
            </p>
          </div>
        </div>
        <div className='w-full h-8 flex gap-4'>
          <button className='py-5 w-[10rem] bg-slate-100 border border-slate-100 rounded-md'></button>
          <button className='py-5 w-[10rem] bg-slate-100 border border-slate-100 rounded-md' ></button>
        </div>
      </div>
    </div>
  );
};

export default PokeInfoShimmer;
