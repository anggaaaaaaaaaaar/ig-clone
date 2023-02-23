import { Typography } from 'antd';
import React, { FunctionComponent } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

type BubleType = {
  item: object | any;
  isUser?: boolean;
  onClickStory: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Bubble: FunctionComponent<BubleType> = ({ item, isUser, onClickStory }) => {
  const bg =
    item?.is_seen === 'true'
      ? 'bg-white border-[1px] border-gray-400'
      : 'bg-gradient-to-tr from-yellow-400 to-fuchsia-600';
  const user = isUser ? 'Your story' : item?.user.username;

  return (
    <div
      className="relative flex flex-col justify-center items-center w-[60px] h-[60px] md:w-[70px] md:h-[70px] "
      role="button"
      onClick={() => onClickStory(item)}>
      <div
        className={`w-[50px] h-[50px] md:w-[60px] md:h-[60px] overflow-hidden rounded-full p-[3px] ${bg}`}>
        <img
          src={item?.user?.profile_picture}
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
