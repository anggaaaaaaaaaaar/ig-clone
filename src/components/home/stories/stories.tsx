import React, { useEffect, useState } from 'react';
import { StoriesService } from '../../../service';
import Bubble from './bubble';

const userStory = {
  id: 'sdnaj',
  user: {
    username: 'pompom',
    profile_picture: 'https://picsum.photos/200',
    id: '194146115',
    full_name: 'Pom Bensin',
  },
  stories: [
    { type: 'image', url: '' },
    { type: 'video', url: '' },
  ],
  is_seen: 'false',
};

const stories = () => {
  const [stories, setStories] = useState<Array<object>>([]);

  useEffect(() => {
    StoriesService.getStories()
      .then((res) => {
        setStories(res.data);
      })
      .catch((err) => {
        console.log('Errr ', err);
      });
  }, []);

  return (
    <div className="flex overflow-x-auto space-x-3 p-3">
      <Bubble item={userStory} isUser />
      {stories?.map((res: any) => (
        <Bubble key={res.id} item={res} />
      ))}
    </div>
  );
};

export default stories;
