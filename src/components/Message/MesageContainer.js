import React from "react";
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

const MesageContainer = (props) => {
  let state = props.store.getState();

  let searchUser = () => {
    props.store.dispatch(searchUserActionCreator());
  };

  let deleteUser = () => {
    props.store.dispatch(deleteUserActionCreator());
  };

  let userGhange = (text) => {
    props.store.dispatch(updateSearchUserNameActionCreator(text));
  };

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let messageGhange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Message
      searchUser={searchUser}
      deleteUser={deleteUser}
      userGhange={userGhange}
      sendMessage={sendMessage}
      messageGhange={messageGhange}
      message={state.message.data}
      users={state.users.data}
      searchUserName={state.users.searchUserName}
      newMessageText={state.message.newMessageText}
    />
  );
};

export default MesageContainer;
