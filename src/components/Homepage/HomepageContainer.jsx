import React from "react";
import { connect } from "react-redux";
import Homepage from "./Homepage";
import {
  setUserProfileTC,
  getUserStatus,
  updateUserStatusTC,
} from "../../redux/userProfileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class HomepageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 8203;
    }
    this.props.setUserProfileTC(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Homepage {...this.props} updateStatus={this.props.updateUserStatusTC} />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.userProfile.profile,
  status: state.userProfile.status,
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
  }),
  withRouter,
  withAuthRedirect
)(HomepageContainer);
