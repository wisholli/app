import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import authReducer from "./authReducer";
import findUsersReducer from "./findUsersReducer";
import messageReducer from "./messageReducer";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";
import postsReducer from "./postsReducer";
import thunkMiddleware from "redux-thunk";
import userProfileReducer from "./userProfileReducer";

let reducers = combineReducers({
  posts: postsReducer,
  message: messageReducer,
  music: musicReducer,
  news: newsReducer,
  findUsers: findUsersReducer,
  auth: authReducer,
  userProfile: userProfileReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
