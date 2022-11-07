import axios from "axios";
import React from "react";
import Users from "./Users/Users";

const FindUsersPage = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  let onFollow = (id) => {
    props.follow(id);
  };

  let onUnFollow = (id) => {
    props.unfollow(id);
  };

  let users = props.users.map((user) => (
    <Users
      // avatarUrl={user.avatarUrl}
      photo={user.photos.small}
      followed={user.followed}
      name={user.name}
      // location={user.location}
      status={user.status}
      onFollow={() => onFollow(user.id)}
      onUnFollow={() => onUnFollow(user.id)}
    />
  ));

  if (props.users.length === 0) {
    return null;
  }

  return <div>{users}</div>;
};

export default FindUsersPage;
