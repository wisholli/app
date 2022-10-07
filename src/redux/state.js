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
  },
  users: {
    data: [
        {
          id: 1,
          name: "Vitalii",
          img: "",
          link: "vitalii"
        },
        {
          id: 2,
          name: "Olga",
          img: "",
          link: "olga"
        },
        {
          id: 3,
          name: "Lera",
          img: "",
          link: "lera"
        }
    ]
  }
};

export let addPost = (textPost) => {
    let newPost = {
        id: 6,
        message: textPost
    };

    state.posts.data.push(newPost);

    rerenderEntireTree(state);
}

export let addUser = (name) => {
  let newUser = {
    id: 4,
    name,
    img: "",
    link: name
  }

  state.users.data.push(newUser);

  rerenderEntireTree(state);
}