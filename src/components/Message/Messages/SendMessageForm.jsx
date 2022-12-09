import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const SendMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageText"
          placeholder="Write message"
          validate={[required]}
        />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "SendMessageForm" })(SendMessageForm);
