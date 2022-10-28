const SEND_MESSAGE = "SEND-MESSAGE";
const UDATE_NEW_MESSAGE_TEXT = "UDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      };

      state.data.push(newMessage);
      state.newMessageText = "";
      return state;
    case UDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
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

export default messageReducer;
