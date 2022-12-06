const SEND_MESSAGE = "SEND-MESSAGE";
const SEARCH_USER = "SEARCH-USER";
const DELETE_USER = "DELETE-USER";

let initialState = {
  messages: [
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
  users: [
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
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let text = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: text }],
      };
    case SEARCH_USER:
      const newUsers = state.users.filter(
        (user) => user.name === action.newUser
      );
      return { ...state, users: [...newUsers] };
    case DELETE_USER:
      const deleteUser = [...state.users];
      deleteUser.pop();
      return { ...state, users: [...deleteUser] };
    default:
      return state;
  }
};

export const sendMessage = (newMessageText) => ({
  type: SEND_MESSAGE,
  newMessageText,
});

export const searchUser = (newUser) => ({
  type: SEARCH_USER,
  newUser,
});
export const deleteUser = () => ({
  type: DELETE_USER,
});

export default messageReducer;
