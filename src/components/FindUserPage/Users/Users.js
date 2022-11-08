import React from "react";
import style from "./Users.module.css";
import avatar from "../../assets/imeges/avatar.png";

const Users = (props) => {
  let onFollow = () => {
    props.onFollow();
  };

  let onUnFollow = () => {
    props.onUnFollow();
  };
  return (
    <div className={style.content} key={props.id}>
      <div>
        <img
          className={style.img}
          src={props.photo != null ? props.photo : avatar}
        />
      </div>
      <div>
        {props.followed ? (
          <button onClick={onUnFollow}>Unfollow</button>
        ) : (
          <button onClick={onFollow}>Follow</button>
        )}
      </div>
      <div className={style.description}>{props.name}</div>
      <div className={style.description}>{props.status}</div>

      {/* <div className={style.description}>{props.location.country}</div>
      <div className={style.description}>{props.location.city}</div> */}
    </div>
  );
};

export default Users;
