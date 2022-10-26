import messageReducer from "./messageReducer";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEARCH_USER = "SEARCH-USER";
const DELETE_USER = "DELETE-USER";
const UDATE_SEARCH_USER_NAME = "UDATE-SEARCH-USER-NAME";
const SEARCH_MUSIC = "SEARCH-MUSIC";
const DELETE_MUSIC = "DELETE-MUSIC";
const UPDATE_SEARCH_MUSIC_NAME = "UPDATE-SEARCH-MUSIC-NAME";
const ADD_NEWS = "ADD-NEWS";
const SEARCH_NEWS = "SEARCH-NEWS";
const DELETE_NEWS = "DELETE-NEWS";
const UPDATE_SEARCH_NEWS = "UPDATE-SEARCH-NEWS";
const SEND_MESSAGE = "SEND-MESSAGE";
const UDATE_NEW_MESSAGE_TEXT = "UDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    posts: {
      data: [
        { id: 1, message: "Hi" },
        { id: 2, message: "I like it" },
        { id: 3, message: "Bad food" },
        { id: 4, message: "Good staf" },
        { id: 5, message: "50/50" },
      ],
      newPostText: "",
    },
    users: {
      data: [
        {
          id: 1,
          name: "Vitalii",
          img: "",
          link: "vitalii",
        },
        {
          id: 2,
          name: "Olga",
          img: "",
          link: "olga",
        },
        {
          id: 3,
          name: "Lera",
          img: "",
          link: "lera",
        },
      ],
      searchUserName: "",
    },
    message: {
      data: [
        {
          id: 1,
          message: "Hi",
        },
        {
          id: 2,
          message: "Have a nice day",
        },
        {
          id: 3,
          message: "Look at my dog",
        },
      ],
      newMessageText: "",
    },
    music: {
      data: [
        {
          id: 1,
          name: "Weekend - Bright lights",
        },
        {
          id: 2,
          name: "Ghost - Marry on a cross",
        },
        {
          id: 3,
          name: "Maneskin - Beggin",
        },
      ],
      searchMusicName: "",
    },
    news: {
      data: [
        {
          id: 1,
          // user: "ItGroup",
          content: "Article about react",
        },
        {
          id: 2,
          // user: "CookTogether",
          content: "How to cook borsh",
        },
        {
          id: 3,
          // user: "NewYorkTimes",
          content: "Breaking news",
        },
      ],
      searchNews: "",
    },
  },
  _callSubscriber() {
    console.log("State has changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.posts = postsReducer(this._state.posts, action);
    this._state.users = usersReducer(this._state.users, action);
    this._state.message = messageReducer(this._state.message, action);
    this._state.music = musicReducer(this._state.music, action);
    this._state.news = newsReducer(this._state.news, action);

    this._callSubscriber(this._state);
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text,
});
export const searchUserActionCreator = () => ({
  type: SEARCH_USER,
});
export const deleteUserActionCreator = () => ({
  type: DELETE_USER,
});
export const updateSearchUserNameActionCreator = (text) => ({
  type: UDATE_SEARCH_USER_NAME,
  text,
});
export const searchMusicActionCreator = () => ({
  type: SEARCH_MUSIC,
});
export const deleteMusicActionCreator = () => ({
  type: DELETE_MUSIC,
});
export const updateSearchMusicNameActionCreator = (text) => ({
  type: UPDATE_SEARCH_MUSIC_NAME,
  text,
});
export const addNewsActionCreator = () => ({
  type: ADD_NEWS,
});
export const searchNewsActionCreator = () => ({
  type: SEARCH_NEWS,
});
export const deleteNewsActionCreator = () => ({
  type: DELETE_NEWS,
});
export const updateSearchNewsActionCreator = (text) => ({
  type: UPDATE_SEARCH_NEWS,
  text,
});
export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageTextActionCreator = (text) => ({
  type: UDATE_NEW_MESSAGE_TEXT,
  text,
});

export default store;
window.store = store;
