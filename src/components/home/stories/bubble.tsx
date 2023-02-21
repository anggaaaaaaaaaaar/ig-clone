import { Typography } from 'antd';
import React, { FunctionComponent } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

type BubleType = {
  item: object | any;
  isUser?: boolean;
};
const Bubble: FunctionComponent<BubleType> = ({ item, isUser }) => {
  const bg =
    item?.is_seen === 'true' ? 'bg-gray-600' : 'bg-gradient-to-tr from-yellow-400 to-fuchsia-600';
  const user = isUser ? 'Your story' : item?.user.username;
  return (
    <div className="relative flex flex-col justify-center items-center w-[60px] h-[60px] ">
      <div className={`w-[50px] h-[50px] overflow-hidden rounded-full p-[3px] ${bg}`}>
        <img
          src="https://picsum.photos/200"
          alt={item?.user?.username}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      {isUser && <FaPlusCircle color="#5B51D8" className="absolute right-0 bottom-4 z-10" />}
      <Typography.Text className="text-[10px] line-clamp-1">{user}</Typography.Text>
    </div>
  );
};

export default Bubble;
