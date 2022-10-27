import { GET_POSTS_URL } from './urls';

const getAllPosts = async () => {
  try {
    const response = await fetch(GET_POSTS_URL);
    return await response.json();
  } catch (err) {
    return err;
  }
};

export default getAllPosts;
