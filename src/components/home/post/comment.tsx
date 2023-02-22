import { Typography } from 'antd';
import React, { FunctionComponent } from 'react';

type LikedByType = {
  item: object | any;
};

const Comment: FunctionComponent<LikedByType> = ({ item }) => {
  return (
    <div>
      {item?.count > 0 && (
        <Typography.Paragraph role="button" className="text-[12px] text-gray-400">
          View all {item?.count} comment
        </Typography.Paragraph>
      )}
    </div>
  );
};

export default Comment;
