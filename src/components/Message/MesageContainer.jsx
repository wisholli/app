import {
  sendMessage,
  updateNewMessageText,
  deleteUser,
  searchUser,
  updateSearchUserName,
} from "../../redux/messageReducer";
import Message from "./Mesage";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    message: state.message.messages,
    users: state.message.users,
    searchUserName: state.message.searchUserName,
    newMessageText: state.message.newMessageText,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    sendMessage,
    updateNewMessageText,
    deleteUser,
    searchUser,
    updateSearchUserName,
  }),
  withAuthRedirect
)(Message);
