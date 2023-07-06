import React from 'react';
import Button from './Button';

interface MenuItemProps {
  label: string;
  border: string;
  bg:string;
  onClick:()=>void
}

const MenuItem = ({label, border, bg, onClick}: MenuItemProps) => {
  return (
    <Button className={`${bg} text-white w-36 py-3 border ${border} rounded flex justify-center align-center`}
    label={label} onClick={onClick} />
  );
};

export default MenuItem;
