import React, {Dispatch, SetStateAction} from 'react';

interface MenuIconProps {
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
}

const MenuIcon = ({setToggleMenu}: MenuIconProps) => {
  const openMenu = () => {
    setToggleMenu((prevValue) => !prevValue);
  };

  return (
    <button className='flex flex-col gap-[1px]' onClick={openMenu}>
      <div className='w-[1.5rem] h-[1rem] border border-r-0 bg-gray-800 rounded-sm'></div>
      <div className='w-[1.5rem] h-[1rem] border border-r-0 bg-gray-800 rounded-sm'></div>
    </button>
  );
};

export default MenuIcon;
