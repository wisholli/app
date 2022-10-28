import messageReducer from "./messageReducer";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

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
    console.log("sdf", observer);
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

export default store;
window.store = store;
