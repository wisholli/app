import style from "./Message.module.css";
import Users from "./Users/Users";
import React from "react";
import Messages from "./Messages/Messages";
import UsersForm from "./Users/UsersForm";
import SendMessageForm from "./Messages/SendMessageForm";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, searchUser } from "../../redux/messageReducer";

const Message = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.message);
  console.log(data.users);

  const sendNewMessage = (value) => {
    dispatch(sendMessage(value));
  };

  const searchOneUser = (value) => {
    dispatch(searchUser(value));
  };

  let info = data.users.map((info) => (
    <Users key={info.id} name={info.name} link={info.link} />
  ));

  let message = data.messages.map((message) => (
    <Messages message={message.message} />
  ));
  const onSubmitUser = (values) => {
    searchOneUser(values.newUser);
  };
  const onSubmitMessage = (values) => {
    sendNewMessage(values.newMessageText);
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
