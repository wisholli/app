import React from "react";
import { useFormik } from "formik";

const validate = ({ email, password }) => {
  const errors = {};
  if (!email) {
    errors.email = "Required";
  }

  if (!password) {
    errors.password = "Required";
  }

  return errors;
};

const SignupForm = ({ onLogin }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: ({ email, password }) => {
      onLogin(email, password);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />

      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />

      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      {/* {formik.status.error ? <div>{error}</div> : null} */}

      <button type="login">Login</button>
    </form>
  );
};

export default SignupForm;
