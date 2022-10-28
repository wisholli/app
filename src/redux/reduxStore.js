import { combineReducers, legacy_createStore as createStore } from "redux";
import messageReducer from "./messageReducer";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  message: messageReducer,
  music: musicReducer,
  news: newsReducer,
});

let store = createStore(reducers);

export default store;
