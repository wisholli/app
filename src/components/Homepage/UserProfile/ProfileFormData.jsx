import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Input, Textarea } from "../../common/FormsControls/FormsControls";

const ProfileFormData = ({ handleSubmit, profile, error, goToEditMode }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <b>Full name: </b>
        <Field
          component={Input}
          name={"fullName"}
          placeholder={"Enter your full name"}
          validate={[required]}
        />
      </div>
      <div>
        <b>About me: </b>
        <Field
          component={Textarea}
          name={"aboutMe"}
          placeholder={"Enter some information about you"}
          validate={[required]}
        />
      </div>
      <div>
        <b>Find job</b>
        <Field component={Input} name={"lookingForAJob"} type={"checkbox"} />
      </div>
      <div>
        <b>Skills: </b>
        <Field
          component={Input}
          name={"lookingForAJobDescription"}
          placeholder={"Enter description for job which your find"}
          validate={[required]}
        />
      </div>
      {Object.keys(profile.contacts).map((key) => {
        return (
          <div key={key}>
            <b>{key}: </b>
            <Field
              component={Input}
              name={"contacts." + key}
              placeholder={key}
            />
          </div>
        );
      })}
      {error ? <div>{error}</div> : null}
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "editProfileData" })(ProfileFormData);
