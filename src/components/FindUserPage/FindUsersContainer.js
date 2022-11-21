import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  toggleFollowingProgress,
} from "../../redux/findUsersReducer";
import Preloader from "../Preloader/Preloader";
import FindUsersPage from "./FindUsersPage";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onFollow = (id) => {
    this.props.follow(id);
  };

  onUnFollow = (id) => {
    this.props.unfollow(id);
  };
  toggleFollowingProgress = (followingInProgress, id) => {
    this.props.toggleFollowingProgress(followingInProgress, id);
  };

  onpageChange = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <FindUsersPage
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            isFetching={this.props.isFetching}
            followingInProgress={this.props.followingInProgress}
            onFollow={(id) => this.onFollow(id)}
            onUnFollow={(id) => this.onUnFollow(id)}
            onpageChange={(currentPage) => this.onpageChange(currentPage)}
            toggleFollowingProgress={(followingInProgress, id) =>
              this.toggleFollowingProgress(followingInProgress, id)
            }
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.findUsers.data,
    pageSize: state.findUsers.pageSize,
    totalUsersCount: state.findUsers.totalUsersCount,
    currentPage: state.findUsers.currentPage,
    isFetching: state.findUsers.isFetching,
    followingInProgress: state.findUsers.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(UsersContainer);
