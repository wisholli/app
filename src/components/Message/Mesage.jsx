import style from "./Message.module.css";
import Users from "./Users/Users";
import React from "react";
import Messages from "./Messages/Messages";
import UsersForm from "./Users/UsersForm";
import SendMessageForm from "./Messages/SendMessageForm";

const Message = (props) => {
  let info = props.users.map((info) => (
    <Users key={info.id} name={info.name} link={info.link} />
  ));

  let message = props.message.map((message) => (
    <Messages message={message.message} />
  ));
  const onSubmitUser = (values) => {
    props.searchUser(values.newUser);
    // props.deleteUser();
  };
  const onSubmitMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };
  return (
    <div className={style.menu}>
      <h1 className={style.title}>Message</h1>
      <UsersForm onSubmit={onSubmitUser} />
      <SendMessageForm onSubmit={onSubmitMessage} />
      {info}
      {message}
    </div>
  );
};

export default Message;
