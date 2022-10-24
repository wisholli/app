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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 6,
        message: this._state.posts.newPostText,
      };

      this._state.posts.data.push(newPost);
      this._state.posts.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.posts.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "SEARCH-USER") {
      const newUsers = this._state.users.data.filter(
        (user) => user.name === this._state.users.searchUserName
      );
      this._state.users.data = newUsers;
      this._state.users.searchUserName = "";
      this._callSubscriber(this._state);
    } else if (action.type === "DELETE-USER") {
      this._state.users.data.pop();
      this._callSubscriber(this._state);
    } else if (action.type === "UDATE-SEARCH-USER-NAME") {
      this._state.users.searchUserName = action.newName;
      this._callSubscriber(this._state);
    } else if (action.type === "SEARCH-MUSIC") {
      console.log("here", action);
      const newMusic = this._state.music.data.filter(
        (musicName) => musicName.name === this._state.music.searchMusicName
      );
      /*     const newState = { ...this._state, music: { data: newMusic } }; */
      this._state.music.searchMusicName = "";
      this._state.music.data = newMusic;

      this._callSubscriber(this._state);
    } else if (action.type === "DELETE-MUSIC") {
      this._state.music.data.pop();
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-SEARCH-MUSIC-NAME") {
      this._state.music.searchMusicName = action.newName;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-NEWS") {
      let newNews = {
        id: 4,
        content: this._state.news.searchNews,
      };

      this._state.news.data.push(newNews);
      this._state.news.searchNews = "";
      this._callSubscriber(this._state);
    } else if (action.type === "SEARCH-NEWS") {
      const newNews = this._state.news.data.filter(
        (news) => news.content === this._state.news.searchNews
      );

      this._state.news.data = newNews;
      this._state.news.searchNews = "";

      this._callSubscriber(this._state);
    } else if (action.type === "DELETE-NEWS") {
      this._state.news.data.pop();
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-SEARCH-NEWS") {
      this._state.news.searchNews = action.newName;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
