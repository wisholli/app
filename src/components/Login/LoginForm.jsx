import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import styles from "../common/FormsControls/FormsControls.module.css";

const maxLength = maxLengthCreator(100);
const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Input}
          name={"email"}
          placeholder={"Email"}
          validate={[required, maxLength]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          validate={[required]}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />
        Remember me
      </div>
      {error ? <div className={styles.formSummaryError}>{error}</div> : null}

      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
