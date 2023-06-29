import React from 'react';

interface LoadBtnProps {
  label: string;
  onClick: () => void;
  display:string
}

const LoadBtn = ({label, onClick,display}:LoadBtnProps) => {
  return (
    <button
      className={`border ${display}  text-center  text-xs lg:text-sm h-6 w-6 rounded-full`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default LoadBtn;
