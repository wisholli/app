import style from "./Message.module.css";
import Users from "./Users/Users";
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
import Messages from "./Messages/Messages";

const Message = (props) => {
  let mess = props.store.getState().message;
  let users = props.store.getState().users;

  let info = users.data.map((info) => (
    <Users name={info.name} link={info.link} />
  ));

  let message = mess.data.map((message) => (
    <Messages message={message.message} />
  ));

  let newUser = React.createRef();

  let searchUser = () => {
    props.dispatch(searchUserActionCreator());
  };

  let deleteUser = () => {
    props.dispatch(deleteUserActionCreator());
  };

  let onUserGhange = () => {
    let text = newUser.current.value;
    props.dispatch(updateSearchUserNameActionCreator(text));
  };

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let onMessageGhange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={style.menu}>
      <h1 className={style.title}>Message</h1>
      <textarea
        onChange={onUserGhange}
        ref={newUser}
        value={users.searchUserName}
        className={style.textarea}
      ></textarea>
      <button onClick={searchUser} className={style.button}>
        Search user
      </button>
      <button onClick={deleteUser}>Delete user</button>
      <textarea
        onChange={onMessageGhange}
        value={mess.newMessageText}
        className={style.textarea}
      ></textarea>
      <button onClick={sendMessage}>Send message</button>
      {info}
      {message}
    </div>
  );
};

export default Message;
