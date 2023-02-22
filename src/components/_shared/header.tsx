import { Typography } from 'antd';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between px-5 py-2 h-[44px] bg-white z-50">
      <Typography.Text className="text-2xl italic">Instagram</Typography.Text>
      <div className="flex space-x-3 items-center">
        <MdOutlineNotificationsNone size={20} />
        <FiSend size={20} />
      </div>
    </div>
  );
};

export default Header;
