import React from "react";
import { connect } from "react-redux";
import Homepage from "./Homepage";
import { setUserProfileTC } from "../../redux/postsReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class HomepageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.setUserProfileTC(userId);
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

export default connect(mapStateToProps, { setUserProfileTC })(
  withRouter(HomepageContainer)
);
