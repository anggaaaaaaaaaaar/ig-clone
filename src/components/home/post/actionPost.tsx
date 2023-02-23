import { message, Space } from 'antd';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { BiMessageRounded } from 'react-icons/bi';
import { BsBookmark, BsBookmarkFill, BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import { MenuType } from '../../_shared/navbar';

type IconMenuType = {
  item: MenuType;
  onClick?: () => void;
  isClick?: boolean;
  classClick?: string;
};

const ActionPost: React.FC = () => {
  const [like, setLike] = useState<boolean>(false);
  const [isBookmark, setBookmark] = useState<boolean>(false);

  const likeButton = {
    title: 'like',
    iconNotClick: BsHeart,
    iconClick: BsFillHeartFill,
  };

  const bookmarkButton = {
    title: 'bookmark',
    iconClick: BsBookmarkFill,
    iconNotClick: BsBookmark,
  };

  const onClickSave = () => {
    if (!isBookmark) {
      message.success('Success saved post');
      setBookmark(true);
      return;
    }
    setBookmark(false);
  };

  const ButtonIcon: FunctionComponent<IconMenuType> = useCallback(
    ({ item, onClick, isClick, classClick }) => {
      return (
        <div className="cursor-pointer">
          {isClick ? (
            <item.iconClick
              onClick={onClick}
              size={20}
              className={`animate-heartBeat ${classClick}`}
            />
          ) : (
            <item.iconNotClick
              onClick={onClick}
              size={20}
              className="hover:text-gray-500 animate-heartBeat"
            />
          )}
        </div>
      );
    },
    []
  );

  return (
    <div className="flex h-[36px] items-center justify-between">
      <Space size="middle">
        <ButtonIcon
          item={likeButton}
          onClick={() => setLike(!like)}
          isClick={like}
          classClick="text-red-600"
        />

        <BiMessageRounded
          size={20}
          className="hover:text-gray-500 cursor-pointer animate-heartBeat"
        />
        <FiSend size={20} className="hover:text-gray-500 cursor-pointer animate-heartBeat" />
      </Space>
      <ButtonIcon item={bookmarkButton} onClick={onClickSave} isClick={isBookmark} />
    </div>
  );
};

export default ActionPost;
