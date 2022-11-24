import {
  sendMessage,
  updateNewMessageText,
  deleteUser,
  searchUser,
  updateSearchUserName,
} from "../../redux/messageReducer";
import Message from "./Mesage";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    message: state.message.messages,
    users: state.message.users,
    searchUserName: state.message.searchUserName,
    newMessageText: state.message.newMessageText,
    isAuth: state.auth.isAuth,
  };
};

const MesageContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageText,
  deleteUser,
  searchUser,
  updateSearchUserName,
})(Message);

export default MesageContainer;
