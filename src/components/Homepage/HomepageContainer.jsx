import React from "react";
import { connect } from "react-redux";
import Homepage from "./Homepage";
import {
  setUserProfileTC,
  getUserStatus,
  updateUserStatusTC,
  savePhoto,
} from "../../redux/userProfileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class HomepageContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }

    this.props.setUserProfileTC(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    {
      this.props.router.params.userId = !prevProps
        ? this.refreshProfile()
        : null;
    }
  }

  render() {
    return (
      <Homepage
        {...this.props}
        updateStatus={this.props.updateUserStatusTC}
        savePhoto={this.props.savePhoto}
        isOwner={!this.props.router.params.userId}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.userProfile.profile,
  status: state.userProfile.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, {
    setUserProfileTC,
    getUserStatus,
    updateUserStatusTC,
    savePhoto,
  }),
  withRouter,
  withAuthRedirect
)(HomepageContainer);
