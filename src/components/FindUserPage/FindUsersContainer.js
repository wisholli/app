import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import {
  setCurrentPage,
  getUsers,
  followTC,
  unFollowTC,
} from "../../redux/findUsersReducer";
import Preloader from "../Preloader/Preloader";
import FindUsersPage from "./FindUsersPage";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onFollow = (id) => {
    this.props.followTC(id);
  };

  onUnFollow = (id) => {
    this.props.unFollowTC(id);
  };

  onpageChange = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsers(currentPage, this.props.pageSize);
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

let AuthRedirectComponent = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps, {
  setCurrentPage,
  getUsers,
  followTC,
  unFollowTC,
})(AuthRedirectComponent);
