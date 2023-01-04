import React from "react";
import Header from "./Header";
import { logout } from "../../redux/authReducer";
import { connect, useSelector } from "react-redux";

const HeaderFunctional = () => {
  const data = useSelector((state) => state.auth);
  console.log("data", data);
  return <div>hello</div>;
};

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
