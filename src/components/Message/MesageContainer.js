import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
  deleteUserActionCreator,
  searchUserActionCreator,
  updateSearchUserNameActionCreator,
} from "../../redux/messageReducer";
import Message from "./Mesage";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    message: state.message.messages,
    users: state.message.users,
    searchUserName: state.message.searchUserName,
    newMessageText: state.message.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    searchUser: () => {
      dispatch(searchUserActionCreator());
    },
    deleteUser: () => {
      dispatch(deleteUserActionCreator());
    },
    userGhange: (text) => {
      dispatch(updateSearchUserNameActionCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    messageGhange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const MesageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MesageContainer;
