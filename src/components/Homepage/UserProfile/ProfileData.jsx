import React from "react";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileData = (props) => {
  const Contact = ({ contactTitle, contactValue }) => {
    return (
      <div>
        <b>{contactTitle} </b>
        {contactValue}
      </div>
    );
  };
  return (
    <div>
      {!props.isOwner ? (
        <button onClick={props.goToEditMode}>Edit profile </button>
      ) : null}
      <div>
        <b>Full name: </b>
        {props.profile.fullName}
      </div>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <div>
        <b>About me: </b>
        {props.profile.aboutMe}
      </div>
      <div>
        {!props.profile.lookingForAJob ? (
          <b>Find job: NO</b>
        ) : (
          <b>Find job: YES</b>
        )}
      </div>
      <div>
        {!props.profile.lookingForAJob ? null : (
          <div>
            <b>Skills: </b>
            {props.profile.lookingForAJobDescription}
          </div>
        )}
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={!props.profile.contacts[key] ? null : key}
              contactValue={
                !props.profile.contacts[key]
                  ? null
                  : props.profile.contacts[key]
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProfileData;
