import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../common/Pagination/Pagination";
import User from "./Users/User";
import {
  setCurrentPage,
  getUsers,
  followTC,
  unFollowTC,
} from "../../redux/findUsersReducer";
import { useEffect } from "react";

const FindUsersPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.findUsers);
  useEffect(() => {
    dispatch(getUsers(data.currentPage, data.pageSize));
  }, [data.currentPage]);
  const follow = (id) => {
    dispatch(followTC(id));
  };
  const unFollow = (id) => {
    dispatch(unFollowTC(id));
  };
  const getCurrentPage = (currentPage) => {
    dispatch(setCurrentPage(currentPage));
  };
  return (
    <div style={{ maxWidth: "1340px", overflowX: "scroll" }}>
      <div>
        <Pagination
          totalItemsCount={data.totalUsersCount}
          pageSize={data.pageSize}
          setCurrentPage={getCurrentPage}
        />
      </div>
      <div>
        {data.data.map((user) => (
          <User
            id={user.id}
            photo={user.photos.small}
            followed={user.followed}
            name={user.name}
            followingInProgress={data.followingInProgress}
            onFollow={() => {
              follow(user.id);
            }}
            onUnFollow={() => {
              unFollow(user.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FindUsersPage;
