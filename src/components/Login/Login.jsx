import React from "react";
import LoginForm from "./LoginForm";
import { login } from "../../redux/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth);
  const onLogin = (email, password, rememberMe, captcha) => {
    dispatch(login(email, password, rememberMe, captcha));
  };
  const onSubmit = (formData) => {
    let { email, password, rememberMe, captcha } = formData;
    onLogin(email, password, rememberMe, captcha);
  };
  if (data.isAuth) {
    return <Navigate to={`/${data.userId}`} />;
  }
  return (
    <div>
      <h3>Login</h3>
      <LoginForm onSubmit={onSubmit} captchaUrl={data.captchaUrl} />
    </div>
  );
};

export default Login;
