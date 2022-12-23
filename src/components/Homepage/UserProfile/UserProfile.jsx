import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const UserProfile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src={props.profile.photos.small} alt="" />
      </div>
      <div>{props.profile.fullName}</div>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <div>{props.profile.aboutMe}</div>
      <div>
        {!props.profile.lookingForAJob ? "Find job: NO" : "Find job: YES"}
      </div>
    </div>
  );
};

export default UserProfile;
