import React from 'react';

interface MenuItemProps {
  label: string;
  color: string;
  borderColor: string;
}

const MenuItem = ({label, color, borderColor}: MenuItemProps) => {
  return (
    <p
      className={`bg-${color} text-white w-[9rem] py-[0.7rem] border ${borderColor} rounded flex justify-center align-center`}
    >
      {label}
    </p>
  );
};

export default MenuItem;
