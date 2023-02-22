import { API } from '../../helpers';

const getPost = async () => {
  try {
    const res = await API.get({ url: 'post' });
    return res;
  } catch (error) {
    return error;
  }
};

export default { getPost };
