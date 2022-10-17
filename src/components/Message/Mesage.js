import style from "./Message.module.css";
import Users from "./Users/Users";
import React from "react";

const Message = (props) => {
  console.log("props", props);
  let info = props.items.map((info) => (
    <Users name={info.name} link={info.link} />
  ));

  let newUser = React.createRef();

  let searchUser = () => {
    let text = newUser.current.value;

    props.searchUser(text);
    newUser.current.value = "";
  };

  let deleteUser = () => {
    props.deleteUser();
  };

  return (
    <div className={style.menu}>
      <h1 className={style.title}>Message</h1>
      <textarea ref={newUser} className={style.textarea}></textarea>
      <button onClick={searchUser} className={style.button}>
        Search user
      </button>
      <button onClick={deleteUser}>delete user</button>
      {info}
    </div>
  );
};

export default Message;
