import {
  sendMessage,
  deleteUser,
  searchUser,
} from "../../redux/messageReducer";
import Message from "./Mesage";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    message: state.message.messages,
    users: state.message.users,
  };
};

export default compose(
  connect(mapStateToProps, {
    sendMessage,
    deleteUser,
    searchUser,
  }),
  withAuthRedirect
)(Message);
