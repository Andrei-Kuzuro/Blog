import { ACTIONS } from "../constants";

export interface IPostCard {
  id: number;
  image: string;
  title: string;
  text: string;
  date: number;
}

export interface IPostState {
  posts: IPostCard[];
}

const defaultState: IPostState = {
  posts: [],
};

export const postReducers = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_POST) {
    return {
      ...state,
      posts: action.posts,
    };
  }

  return state;
};
