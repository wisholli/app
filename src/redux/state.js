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
  },
};

window.state = state;

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

export let searchUser = (name) => {
  const newUsers = state.users.data.filter((user) => user.name === name);
  const newState = { ...state, users: { data: newUsers } };
  rerenderEntireTree(newState);
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

export let deleteUser = () => {
  state.users.data.pop();

  rerenderEntireTree(state);
};
