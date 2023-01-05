import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  let data = useSelector((state) => state.auth);
  return data.isAuth ? children : <Navigate to={"/login"} />;
};
