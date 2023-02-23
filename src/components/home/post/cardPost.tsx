import React from 'react';
import { Typography } from 'antd';
import { FunctionComponent } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import ActionPost from './actionPost';
import Comment from './comment';
import LikedBy from './likedBy';

type CardType = {
  item: object | any;
};
const CardPost: FunctionComponent<CardType> = ({ item }) => {
  return (
    <div className="h-fit w-full">
      <div className="flex justify-between items-center p-2 space-x-2">
        <div className={`w-[36px] h-[36px] overflow-hidden rounded-full p-[3px]`}>
          <img
            src={item?.caption?.from?.profile_picture}
            alt={item?.caption?.from?.full_name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="felx flex-1 flex-row">
          <Typography.Paragraph className="text-xs">
            {item?.caption?.from?.full_name}
          </Typography.Paragraph>
          <Typography.Paragraph className="text-[10px]">{item?.location}</Typography.Paragraph>
        </div>
        <BsThreeDots className="cursor-pointer" />
      </div>
      <div className="w-auto h-[375px]">
        <img src={item?.images?.standard_resolution?.url} className="w-full h-full" />
      </div>
      <div className="px-3">
        <ActionPost />
        <LikedBy item={item?.caption?.likes} />
        <Typography.Paragraph className="text-[12px] space-x-1 line-clamp-2">
          <Typography.Text className="text-[12px] font-bold">
            {item?.caption?.from?.username}
          </Typography.Text>
          <Typography.Text className="text-[12px]">{item?.caption?.text}</Typography.Text>
        </Typography.Paragraph>
        <Comment item={item?.caption?.comments} />
      </div>
    </div>
  );
};

export default CardPost;
