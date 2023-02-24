/* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { StoriesService } from '../../../service';
import ButtonComponent from '../../_shared/button';
import Bubble from './bubble';
import CardStory from './cardStory';

const userStory = {
  id: 'sdnaj',
  user: {
    username: 'pompom',
    profile_picture: 'https://picsum.photos/id/73/200',
    id: '194146115',
    full_name: 'Pom Bensin',
  },
  stories: [
    { type: 'image', url: 'https://picsum.photos/id/73/200' },
    { type: 'image', url: 'https://picsum.photos/id/79/200' },
  ],
  is_seen: 'false',
};

interface StoryClickInterface {
  stories: Array<object>;
  isClick: boolean;
}

const stories = () => {
  const [stories, setStories] = useState<Array<object>>([]);
  const [storyClick, setStoryClicked] = useState<StoryClickInterface>({
    isClick: false,
    stories: [],
  });

  useEffect(() => {
    StoriesService.getStories()
      .then((res) => {
        setStories(res.data);
      })
      .catch(() => {});
  }, []);

  const onClickStory = (e: any) => {
    setStoryClicked({ stories: e.stories, isClick: true });
  };

  const onCloseStory = () => {
    setStoryClicked({ stories: [], isClick: false });
  };

  return (
    <div className="flex overflow-x-auto space-x-3 p-3">
      <Bubble item={userStory} isUser onClickStory={onClickStory} />
      {stories?.map((res: any) => (
        <Bubble key={res.id} item={res} onClickStory={onClickStory} />
      ))}
      <Modal
        open={storyClick.isClick}
        footer={null}
        centered
        closable={false}
        destroyOnClose
        bodyStyle={{ width: '100%', height: '100%' }}>
        <div className="relative">
          <ButtonComponent
            type="icon"
            icon={<MdClose size={20} />}
            className="absolute right-[-25px] top-[-20px] z-10"
            onClick={onCloseStory}
          />
          <CardStory storyList={storyClick.stories} onAllStoriesEnd={onCloseStory} />
        </div>
      </Modal>
    </div>
  );
};

export default stories;
