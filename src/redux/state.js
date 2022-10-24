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
    // { type: 'ADD-POST' }
    if (action.type === ADD_POST) {
      let newPost = {
        id: 6,
        message: this._state.posts.newPostText,
      };

      this._state.posts.data.push(newPost);
      this._state.posts.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.posts.newPostText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === SEARCH_USER) {
      const newUsers = this._state.users.data.filter(
        (user) => user.name === this._state.users.searchUserName
      );
      this._state.users.data = newUsers;
      this._state.users.searchUserName = "";
      this._callSubscriber(this._state);
    } else if (action.type === DELETE_USER) {
      this._state.users.data.pop();
      this._callSubscriber(this._state);
    } else if (action.type === UDATE_SEARCH_USER_NAME) {
      this._state.users.searchUserName = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === SEARCH_MUSIC) {
      const newMusic = this._state.music.data.filter(
        (musicName) => musicName.name === this._state.music.searchMusicName
      );
      /*     const newState = { ...this._state, music: { data: newMusic } }; */
      this._state.music.searchMusicName = "";
      this._state.music.data = newMusic;

      this._callSubscriber(this._state);
    } else if (action.type === DELETE_MUSIC) {
      this._state.music.data.pop();
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_SEARCH_MUSIC_NAME) {
      this._state.music.searchMusicName = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_NEWS) {
      let newNews = {
        id: 4,
        content: this._state.news.searchNews,
      };

      this._state.news.data.push(newNews);
      this._state.news.searchNews = "";
      this._callSubscriber(this._state);
    } else if (action.type === SEARCH_NEWS) {
      const newNews = this._state.news.data.filter(
        (news) => news.content === this._state.news.searchNews
      );

      this._state.news.data = newNews;
      this._state.news.searchNews = "";

      this._callSubscriber(this._state);
    } else if (action.type === DELETE_NEWS) {
      this._state.news.data.pop();
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_SEARCH_NEWS) {
      this._state.news.searchNews = action.text;
      this._callSubscriber(this._state);
    }
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

export default store;
window.store = store;
