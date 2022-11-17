import React from "react";
import style from "./Users.module.css";
import avatar from "../../assets/imeges/avatar.png";
import { NavLink } from "react-router-dom";

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
        <NavLink to={"/" + props.id}>
          <img
            className={style.img}
            src={props.photo != null ? props.photo : avatar}
          />
        </NavLink>
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
    </div>
  );
};

export default Users;
