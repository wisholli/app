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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State has changed");
  },
  addPost() {
    let newPost = {
      id: 6,
      message: this._state.posts.newPostText,
    };

    this._state.posts.data.push(newPost);
    this._state.posts.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.posts.newPostText = newText;
    this._callSubscriber(this._state);
  },
  searchUser() {
    const newUsers = this._state.users.data.filter(
      (user) => user.name === this._state.users.searchUserName
    );
    const newState = { ...this._state, users: { data: newUsers } };
    this._state.users.searchUserName = "";
    this._callSubscriber(newState);
  },
  updateSearchUserName(newName) {
    this._state.users.searchUserName = newName;
    this._callSubscriber(this._state);
  },
  deleteUser() {
    this._state.users.data.pop();

    this._callSubscriber(this._state);
  },
  searchMusic() {
    const newMusic = this._state.music.data.filter(
      (musicName) => musicName.name === this._state.music.searchMusicName
    );
    const newState = { ...this._state, music: { data: newMusic } };
    this._state.music.searchMusicName = "";
    this._callSubscriber(newState);
  },
  updateSearchMusicName(newName) {
    this._state.music.searchMusicName = newName;
    this._callSubscriber(this._state);
  },
  deleteMusic() {
    this._state.music.data.pop();

    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
