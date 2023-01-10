import React from "react";
import { useFormik } from "formik";

const ProfileFormData = ({ profile, saveEditProfileData }) => {
  const formik = useFormik({
    initialValues: {
      fullName: profile.fullName,
      aboutMe: profile.aboutMe,
      lookingForAJob: profile.lookingForAJob,
      lookingForAJobDescription: profile.lookingForAJobDescription,
      contacts: profile.contacts,
    },
    onSubmit: (profile) => {
      saveEditProfileData(profile);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Full Name: </label>
        <input
          name="fullName"
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
      </div>

      <div>
        <label>About Me: </label>
        <input
          name="aboutMe"
          onChange={formik.handleChange}
          value={formik.values.aboutMe}
        />
      </div>

      <div>
        <label>Looking for a job: </label>
        <input
          id="lookingForAJob"
          name="lookingForAJob"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.lookingForAJob}
        />
      </div>

      <div>
        <label>Skills: </label>
        <input
          name="lookingForAJobDescription"
          onChange={formik.handleChange}
          value={formik.values.lookingForAJobDescription}
        />
      </div>

      {Object.keys(profile.contacts).map((key) => {
        return (
          <div key={key}>
            <label>{key}</label>
            <input
              name={"contacts." + key}
              placeholder={key}
              onChange={formik.handleChange}
              value={formik.values.contacts[key]}
            />
          </div>
        );
      })}

      <button type="save">Save</button>
    </form>
  );
};

export default ProfileFormData;
