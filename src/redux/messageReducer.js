const SEND_MESSAGE = "SEND-MESSAGE";
const UDATE_NEW_MESSAGE_TEXT = "UDATE-NEW-MESSAGE-TEXT";

const messageReducer = (state, action) => {
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

export default messageReducer;
