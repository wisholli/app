let rerenderEntireTree = () => {
  console.log("State has changed");
};

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

export const addPost = () => {
  let newPost = {
    id: 6,
    message: state.posts.newPostText,
  };

  state.posts.data.push(newPost);
  state.posts.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.posts.newPostText = newText;
  rerenderEntireTree(state);
};

export const searchUser = () => {
  const newUsers = state.users.data.filter(
    (user) => user.name === state.users.searchUserName
  );
  const newState = { ...state, users: { data: newUsers } };
  state.users.searchUserName = "";
  rerenderEntireTree(newState);
};

export const updateSearchUserName = (newName) => {
  state.users.searchUserName = newName;
  rerenderEntireTree(state);
};

export const deleteUser = () => {
  state.users.data.pop();

  rerenderEntireTree(state);
};

export const searchMusic = () => {
  const newMusic = state.music.data.filter(
    (musicName) => musicName.name === state.music.searchMusicName
  );
  const newState = { ...state, music: { data: newMusic } };
  state.music.searchMusicName = "";
  rerenderEntireTree(newState);
};

export const updateSearchMusicName = (newName) => {
  state.music.searchMusicName = newName;
  rerenderEntireTree(state);
};

export const deleteMusic = () => {
  state.music.data.pop();

  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
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
