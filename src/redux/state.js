import { rerenderEntireTree } from "../render";

export let state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 6,
    message: state.posts.newPostText,
  };

  state.posts.data.push(newPost);
  state.posts.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.posts.newPostText = newText;
  rerenderEntireTree(state);
};

export let searchUser = () => {
  const newUsers = state.users.data.filter(
    (user) => user.name === state.users.searchUserName
  );
  const newState = { ...state, users: { data: newUsers } };
  state.users.searchUserName = "";
  rerenderEntireTree(newState);
};

export let updateSearchUserName = (newName) => {
  state.users.searchUserName = newName;
  rerenderEntireTree(state);
};

export let deleteUser = () => {
  state.users.data.pop();

  rerenderEntireTree(state);
};

export let searchMusic = () => {
  const newMusic = state.music.data.filter(
    (musicName) => musicName.name === state.music.searchMusicName
  );
  const newState = { ...state, music: { data: newMusic } };
  state.music.searchMusicName = "";
  rerenderEntireTree(newState);
};

export let updateSearchMusicName = (newName) => {
  state.music.searchMusicName = newName;
  rerenderEntireTree(state);
};

export let deleteMusic = () => {
  state.music.data.pop();

  rerenderEntireTree(state);
};

// export let addProduct = (name) => {
//   let newProduct = {
//     id: 5,
//     name,
//     color: name,
//     status: true,
//   };

//   state.products.push(newProduct);

//   rerenderEntireTree(state);
// };

// export let addProduct2 = () => {
//   let newProduct = {
//     id: 6,
//     name: `Name#${state.products.length + 1}`,
//     color: "green",
//     status: true,
//   };
//   state.products.push(newProduct);

//   rerenderEntireTree(state);
// };

// export let deleteProduct = () => {
//   state.products.pop();

//   rerenderEntireTree(state);
// };
