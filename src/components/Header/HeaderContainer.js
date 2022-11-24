import React from "react";
import Header from "./Header";
import { setAuthUserDataTC } from "../../redux/authReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthUserDataTC();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserDataTC })(HeaderContainer);
