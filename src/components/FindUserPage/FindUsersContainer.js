import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/findUsersReducer";
import FindUsersPage from "./FindUsersPage";

const mapStateToProps = (state) => {
  return { users: state.findUsers.data };
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindUsersPage);
