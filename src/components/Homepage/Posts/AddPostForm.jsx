import React from "react";
import { Field, reduxForm } from "redux-form";

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          name={"newPostText"}
          placeholder={"Write post"}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "addPost" })(AddPostForm);
