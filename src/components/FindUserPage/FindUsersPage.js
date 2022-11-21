import axios from "axios";
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
            onFollow={() => {
              axios
                .post(
                  `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                  {},
                  {
                    withCredentials: true,
                    "API-KEY": "580f2e3b-568f-445f-bd45-be19ff491946",
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) {
                    props.onFollow(user.id);
                  }
                });
            }}
            onUnFollow={() => {
              axios
                .delete(
                  `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "580f2e3b-568f-445f-bd45-be19ff491946",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) {
                    props.onUnFollow(user.id);
                  }
                });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FindUsersPage;
