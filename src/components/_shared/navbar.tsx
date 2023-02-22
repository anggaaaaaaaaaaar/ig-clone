import React, { FunctionComponent, useCallback, useState } from 'react';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import { FiPlusSquare } from 'react-icons/fi';
import { RxAvatar } from 'react-icons/rx';
import { RiMovieFill, RiMovieLine } from 'react-icons/ri';

type MenuType = {
  title: string;
  iconClick: React.ElementType;
  iconNotClick: React.ElementType;
};

type IconMenuType = {
  item: MenuType;
  onClick?: () => void;
};

const Navbar = () => {
  const [menuSelected, setMenuSelected] = useState('home');

  const menus: MenuType[] = [
    { title: 'home', iconClick: AiFillHome, iconNotClick: AiOutlineHome },
    { title: 'search', iconClick: BiSearch, iconNotClick: CiSearch },
    { title: 'post', iconClick: FiPlusSquare, iconNotClick: FiPlusSquare },
    { title: 'reels', iconClick: RiMovieFill, iconNotClick: RiMovieLine },
    { title: 'profile', iconClick: RxAvatar, iconNotClick: RxAvatar },
  ];

  const IconNavbar: FunctionComponent<IconMenuType> = useCallback(
    ({ item, onClick }) => {
      return item.title === menuSelected ? (
        <item.iconClick onClick={onClick} size={20} />
      ) : (
        <item.iconNotClick onClick={onClick} size={20} />
      );
    },
    [menuSelected]
  );

  return (
    <div className="flex justify-between px-5 py-2 h-[44px] bg-white">
      {menus.map((res, i) => (
        <IconNavbar key={i} item={res} onClick={() => setMenuSelected(res.title)} />
      ))}
    </div>
  );
};

export default Navbar;
