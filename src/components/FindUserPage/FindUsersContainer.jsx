import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import {
  setCurrentPage,
  getUsers,
  followTC,
  unFollowTC,
} from "../../redux/findUsersReducer";
import {
  getCurrentPage,
  getFindUsers,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
} from "../../redux/Selectors/FindUserSelector";
import Preloader from "../common/Preloader/Preloader";
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
            totalItemsCount={this.props.totalUsersCount}
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
    users: getFindUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    followTC,
    unFollowTC,
  }),
  withAuthRedirect
)(UsersContainer);
