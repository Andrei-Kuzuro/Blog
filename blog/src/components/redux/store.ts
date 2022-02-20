import { IPostState, postReducers } from "./reducers/postReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";

export interface IState {
  postReducers: IPostState;
}

export const store = createStore(
  combineReducers({ postReducers }),
  composeWithDevTools()
);
