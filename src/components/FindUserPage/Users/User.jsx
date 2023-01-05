import React from "react";
import style from "./Users.module.css";
import avatar from "../../assets/imeges/avatar.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  const {
    id,
    photo,
    followed,
    name,
    followingInProgress,
    onFollow,
    onUnFollow,
  } = props;
  let follow = () => {
    onFollow();
  };

  let unFollow = () => {
    onUnFollow();
  };
  return (
    <div className={style.content} key={id}>
      <div>
        <NavLink to={"/" + id}>
          <img className={style.img} src={photo ? photo : avatar} />
        </NavLink>
      </div>
      <div>
        {followed ? (
          <button
            disabled={followingInProgress.some((id) => id === id)}
            onClick={unFollow}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === id)}
            onClick={follow}
          >
            Follow
          </button>
        )}
      </div>

      <div className={style.description}>{name}</div>
    </div>
  );
};

export default Users;
