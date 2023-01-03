import React from "react";
import LoginForm from "./LoginForm";
import { login } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.userId,
  captchaUrl: state.auth.captchaUrl,
});

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Navigate to={`/${props.userId}`} />;
  }
  return (
    <div>
      <h3>Login</h3>
      <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

export default connect(mapStateToProps, { login })(Login);
