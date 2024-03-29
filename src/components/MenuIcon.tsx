import React, {Dispatch, SetStateAction} from 'react';

interface MenuIconProps {
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
}

const MenuIcon = ({setToggleMenu}: MenuIconProps) => {
  const openMenu = () => {
    setToggleMenu((prevValue) => !prevValue);
  };

  return (
    <button className='flex flex-col gap-[0.5px]' onClick={openMenu} data-testid='menu-icon'>
      <div className='w-6 h-3.5 border border-r-0 bg-gray-600 rounded-sm'></div>
      <div className='w-6 h-3.5 border border-r-0 bg-gray-600 rounded-sm'></div>
    </button>
  );
};

export default MenuIcon;
