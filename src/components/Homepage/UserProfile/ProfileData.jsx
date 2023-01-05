import React from "react";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileData = ({
  profile,
  isOwner,
  status,
  updateStatus,
  goToEditMode,
}) => {
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
      {!isOwner ? <button onClick={goToEditMode}>Edit profile </button> : null}
      <div>
        <b>Full name: </b>
        {profile.fullName}
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div>
        <b>About me: </b>
        {profile.aboutMe}
      </div>
      <div>
        {!profile.lookingForAJob ? <b>Find job: NO</b> : <b>Find job: YES</b>}
      </div>
      <div>
        {!profile.lookingForAJob ? null : (
          <div>
            <b>Skills: </b>
            {profile.lookingForAJobDescription}
          </div>
        )}
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={!profile.contacts[key] ? null : key}
              contactValue={
                !profile.contacts[key] ? null : profile.contacts[key]
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProfileData;
