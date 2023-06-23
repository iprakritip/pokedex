import React from 'react';

interface MenuItemProps {
  label: string;
  border: string;
  bg:string
}

const MenuItem = ({label, border, bg}: MenuItemProps) => {
  return (
    <p
      className={`${bg} text-white w-36 py-3 border ${border} rounded flex justify-center align-center`}
    >
      {label}
    </p>
  );
};

export default MenuItem;
