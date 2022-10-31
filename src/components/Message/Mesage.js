import style from "./Message.module.css";
import Users from "./Users/Users";
import React from "react";
import Messages from "./Messages/Messages";

const Message = (props) => {
  let info = props.users.map((info) => (
    <Users name={info.name} link={info.link} />
  ));

  let message = props.message.map((message) => (
    <Messages message={message.message} />
  ));

  let newUser = React.createRef();

  let onSearchUser = () => {
    props.searchUser();
  };

  let onDeleteUser = () => {
    props.deleteUser();
  };

  let onUserGhange = () => {
    let text = newUser.current.value;
    props.userGhange(text);
  };

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageGhange = (e) => {
    let text = e.target.value;
    props.messageGhange(text);
  };

  return (
    <div className={style.menu}>
      <h1 className={style.title}>Message</h1>
      <textarea
        onChange={onUserGhange}
        ref={newUser}
        value={props.searchUserName}
        className={style.textarea}
      ></textarea>
      <button onClick={onSearchUser} className={style.button}>
        Search user
      </button>
      <button onClick={onDeleteUser}>Delete user</button>
      <textarea
        onChange={onMessageGhange}
        value={props.newMessageText}
        className={style.textarea}
      ></textarea>
      <button onClick={onSendMessage}>Send message</button>
      {info}
      {message}
    </div>
  );
};

export default Message;
