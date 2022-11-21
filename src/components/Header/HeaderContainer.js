import React from "react";
import Header from "./Header";
import { setAuthUserData } from "../../redux/authReducer";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.auth().then((data) => {
      if (data.resultCode === 0) {
        let id = data.data.id;
        let email = data.data.email;
        let login = data.data.login;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
