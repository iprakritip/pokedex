import React from 'react';

interface PokeInfoBtnProps {
  label: string;
  onClick: () => void;
}

const PokeInfoBtn = ({label, onClick}: PokeInfoBtnProps) => {
  return (
    <button
      className='w-full flex justify-center items-center font-semibold text-sm gap-2 bg-slate-100 border py-2 border-slate-100 rounded-md'
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PokeInfoBtn;
