import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./Users/User";

const FindUsersPage = (props) => {
  return (
    <div style={{ maxWidth: "1340px", overflowX: "scroll" }}>
      <div>
        <Pagination
          totalUsersCount={props.totalUsersCount}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          onpageChange={props.onpageChange}
        />
      </div>
      <div>
        {props.users.map((user) => (
          <User
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
