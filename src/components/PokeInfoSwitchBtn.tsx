import React from 'react';
import Button from './Button';

interface PokeInfoSwitchBtnProps {
  decreaseClickedId: () => void;
  increaseClickedId: () => void;
  id: number;
}

const PokeInfoSwitchBtn = ({
  decreaseClickedId,
  increaseClickedId,
  id,
}: PokeInfoSwitchBtnProps) => {
  return (
    <div className='w-full h-8'>
      {id === 1 ? (
        <Button
          label='Next'
          onClick={increaseClickedId}
          className='w-full flex justify-center items-center font-semibold text-sm gap-2 bg-slate-100 border py-2 border-slate-100 rounded-md'
        />
      ) :id === 1279 ? (
        <Button
          label='Prev'
          onClick={decreaseClickedId}
          className='w-full flex justify-center items-center font-semibold text-sm gap-2 bg-slate-100 border py-2 border-slate-100 rounded-md'
        />
      ) : (
        <div className='flex gap-4 justify-between'>
          <Button
            label='Prev'
            onClick={decreaseClickedId}
            className='w-full flex justify-center items-center font-semibold text-sm gap-2 bg-slate-100 border py-2 border-slate-100 rounded-md'
          />
          <Button
            label='Next'
            onClick={increaseClickedId}
            className='w-full flex justify-center items-center font-semibold text-sm gap-2 bg-slate-100 border py-2 border-slate-100 rounded-md'
          />
        </div>
      )}
    </div>
  );
};

export default PokeInfoSwitchBtn;
