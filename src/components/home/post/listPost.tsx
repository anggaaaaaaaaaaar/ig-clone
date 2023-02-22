import React, { useEffect, useState } from 'react';
import { PostService } from '../../../service';
import CardPost from './cardPost';

const ListPost = () => {
  const [postList, setPostList] = useState<Array<object>>([]);
  useEffect(() => {
    PostService.getPost()
      .then(({ record }) => {
        setPostList(record?.data);
      })
      .catch((err) => {
        console.log('error ', err);
      });
  }, []);

  console.log('post list ', postList);

  return (
    <div>
      {postList?.map((res, i) => (
        <CardPost key={i} item={res} />
      ))}
    </div>
  );
};

export default ListPost;
