import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  const onSubmit = (formData) => {
    console.log("formData", formData);
  };
  return (
    <div>
      <h3>Login</h3>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
