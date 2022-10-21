import style from "./Message.module.css";
import Users from "./Users/Users";
import React from "react";

const Message = (props) => {
  let info = props.items.map((info) => (
    <Users name={info.name} link={info.link} />
  ));

  let newUser = React.createRef();

  let searchUser = () => {
    props.dispatch({ type: "SEARCH-USER" });
  };

  let deleteUser = () => {
    props.dispatch({ type: "DELETE-USER" });
  };

  let onUserGhange = () => {
    let text = newUser.current.value;
    props.dispatch({ type: "UDATE-SEARCH-USER-NAME", newName: text });
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
      <button onClick={searchUser} className={style.button}>
        Search user
      </button>
      <button onClick={deleteUser}>delete user</button>
      {info}
    </div>
  );
};

export default Message;
