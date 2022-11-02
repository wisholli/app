import {
  deleteUserActionCreator,
  searchUserActionCreator,
  updateSearchUserNameActionCreator,
} from "../../redux/usersReducer";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/messageReducer";
import Message from "./Mesage";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    message: state.message.data,
    users: state.users.data,
    searchUserName: state.users.searchUserName,
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
