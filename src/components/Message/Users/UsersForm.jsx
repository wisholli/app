import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const UsersForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newUser"}
          placeholder={"Write user name"}
          validate={[required]}
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
