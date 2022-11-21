import React from "react";
import { connect } from "react-redux";
import Homepage from "./Homepage";
import { setUserProfile } from "../../redux/postsReducer";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";

class HomepageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    usersAPI.getUserId(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <Homepage {...this.props} />;
  }
}

const mapStateToProps = (state) => ({ profile: state.posts.profile });

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(HomepageContainer)
);
