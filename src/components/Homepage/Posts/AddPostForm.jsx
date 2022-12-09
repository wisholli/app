import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newPostText"}
          placeholder={"Write post"}
          validate={[required]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "addPost" })(AddPostForm);
