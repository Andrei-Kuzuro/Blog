import { ACTIONS } from "../constants";
import { IPostState } from "../reducers/postReducers";

export const addPosts = (posts: IPostState) => {
  return {
    type: ACTIONS.ADD_POST,
    posts: posts,
  };
};
