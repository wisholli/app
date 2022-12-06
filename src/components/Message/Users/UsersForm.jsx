import React from "react";
import { Field, reduxForm } from "redux-form";

const UsersForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name={"newUser"}
          placeholder={"Write user name"}
        />
      </div>
      <div>
        <button>Search user</button>
      </div>
      {/* <div>
        <button>Delete user</button>
      </div> */}
    </form>
  );
};

export default reduxForm({ form: "UsersForm" })(UsersForm);
