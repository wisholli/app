import { combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./authReducer";
import findUsersReducer from "./findUsersReducer";
import messageReducer from "./messageReducer";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";
import postsReducer from "./postsReducer";

let reducers = combineReducers({
  posts: postsReducer,
  message: messageReducer,
  music: musicReducer,
  news: newsReducer,
  findUsers: findUsersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
