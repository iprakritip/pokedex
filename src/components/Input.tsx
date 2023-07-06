import React, { ChangeEvent } from 'react';

interface InputProps {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({placeholder, onChange}:InputProps) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className='border w-full text-gray-500 border-gray-300 h-10 rounded pl-4 pr-8 outline-none'
      onChange={onChange}
    />
  );
};

export default Input;
