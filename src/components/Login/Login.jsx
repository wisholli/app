import React from "react";
import SignupForm from "./LoginForm";
import { login } from "../../redux/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth);
  const onLogin = (email, password) => {
    dispatch(login(email, password));
  };
  if (data.isAuth) {
    return <Navigate to={`/${data.userId}`} />;
  }
  return (
    <div>
      <h3>Login</h3>
      <SignupForm onLogin={onLogin} />
    </div>
  );
};

export default Login;
