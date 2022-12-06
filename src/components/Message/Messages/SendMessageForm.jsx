import React from "react";
import { Field, reduxForm } from "redux-form";

const SendMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageText"
          placeholder="Write message"
        />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "SendMessageForm" })(SendMessageForm);
