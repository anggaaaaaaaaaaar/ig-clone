import React, { FunctionComponent, useState } from 'react';
import ReactInstaStories from 'react-insta-stories';

type CardStoryType = {
  storyList: Array<object>;
  onAllStoriesEnd?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CardStory: FunctionComponent<CardStoryType> = ({ storyList, onAllStoriesEnd }) => {
  const [index, setIndex] = useState<number>(0);

  const onStoryEnd = (idx: number) => {
    if (index + 1 < storyList?.length) {
      setIndex(idx + 1);
    }
  };
  return (
    <ReactInstaStories
      loop
      preventDefault
      keyboardNavigation
      defaultInterval={5000}
      stories={storyList}
      currentIndex={index}
      onStoryEnd={onStoryEnd}
      onAllStoriesEnd={onAllStoriesEnd}
      //   onStoryStart={(s: any, st: any) => console.log('story started', s, st)}
      storyContainerStyles={{ borderRadius: 8, overflow: 'hidden' }}
      storyStyles={{ width: 720 }}
      width="inherit"
      height="inherit"
    />
  );
};

export default CardStory;
