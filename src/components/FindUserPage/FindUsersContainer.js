import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from "../../redux/findUsersReducer";
import FindUsersPage from "./FindUsersPageClassComponent";

const mapStateToProps = (state) => {
  return {
    users: state.findUsers.data,
    pageSize: state.findUsers.pageSize,
    totalUsersCount: state.findUsers.totalUsersCount,
    currentPage: state.findUsers.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindUsersPage);
