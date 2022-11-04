const SEND_MESSAGE = "SEND-MESSAGE";
const UDATE_NEW_MESSAGE_TEXT = "UDATE-NEW-MESSAGE-TEXT";
const SEARCH_USER = "SEARCH-USER";
const DELETE_USER = "DELETE-USER";
const UDATE_SEARCH_USER_NAME = "UDATE-SEARCH-USER-NAME";

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
  newMessageText: "",
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
  searchUserName: "",
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let text = state.newMessageText;

      return {
        ...state,
        messages: [...state.messages, { id: 4, message: text }],
        newMessageText: "",
      };
    case UDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.text };
    case SEARCH_USER:
      const newUsers = state.users.filter(
        (user) => user.name === state.searchUserName
      );
      return { ...state, users: [...newUsers], searchUserName: "" };
    case DELETE_USER:
      const deleteUser = [...state.users];
      deleteUser.pop();

      return { ...state, users: [...deleteUser] };
    case UDATE_SEARCH_USER_NAME:
      return { ...state, searchUserName: action.text };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageTextActionCreator = (text) => ({
  type: UDATE_NEW_MESSAGE_TEXT,
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

export default messageReducer;
