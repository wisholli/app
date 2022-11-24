import React from "react";
import Users from "./Users/Users";
import style from "./Users/Users.module.css";

const FindUsersPage = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div style={{ maxWidth: "1340px", overflowX: "scroll" }}>
      <div>
        {pages.map((p) => (
          <span
            className={props.currentPage === p && style.selectedPage}
            onClick={() => props.onpageChange(p)}
          >
            {p + " "}
          </span>
        ))}
      </div>
      <div>
        {props.users.map((user) => (
          <Users
            id={user.id}
            photo={user.photos.small}
            followed={user.followed}
            name={user.name}
            status={user.status}
            followingInProgress={props.followingInProgress}
            onFollow={() => {
              props.onFollow(user.id);
            }}
            onUnFollow={() => {
              props.onUnFollow(user.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FindUsersPage;
