import { Typography } from 'antd';
import React, { FunctionComponent, useCallback } from 'react';
import { Format } from '../../../helper';

type LikedByType = {
  item: object | any;
};

type LikedFromType = {
  like: object | any;
  index?: number;
};

const LikedBy: FunctionComponent<LikedByType> = ({ item }) => {
  const isLikeBy = item?.from?.length > 0;
  const textLike = item?.count > 1 ? ' likes' : ' like';
  const countLike = isLikeBy ? item?.count - item?.from?.length : item?.count;

  const LikeFromProfile: FunctionComponent<LikedFromType> = useCallback(({ like }) => {
    return (
      <div className={`w-[15px] h-[15px] overflow-hidden rounded-full p-[3px`}>
        <img
          src={like?.profile_picture}
          alt={like?.username}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    );
  }, []);
  return (
    <div>
      {isLikeBy ? (
        <div className="flex space-x-2">
          <div className="relative flex">
            {item?.from?.map((res: any, i: number) => (
              <LikeFromProfile key={i} like={res} index={i} />
            ))}
          </div>

          <Typography.Paragraph className="text-[12px] line-clamp-1">
            Liked by{' '}
            <Typography.Text className="text-[12px] font-bold">
              {item?.from[0]?.username}
            </Typography.Text>{' '}
            and{' '}
            <Typography.Text className="text-[12px] font-bold">
              {Format.numberFormat(countLike)} others
            </Typography.Text>
          </Typography.Paragraph>
        </div>
      ) : (
        <Typography.Text className="text-[12px]">
          {Format.numberFormat(countLike) + textLike}
        </Typography.Text>
      )}
    </div>
  );
};

export default LikedBy;
