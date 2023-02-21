import { API } from '../../helpers';

const getStories = async () => {
  try {
    const res = await API.get({ url: 'stories' });
    return res;
  } catch (error) {
    return error;
  }
};

export default { getStories };
