import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import avatar from "../../assets/imeges/avatar.png";
import style from "./UserProfile.module.css";

const UserProfile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div>
        <img
          className={style.img}
          src={
            props.profile.photos.small != null
              ? props.profile.photos.small
              : avatar
          }
        />
      </div>
      <div>
        {props.isOwner ? (
          <input type={"file"} on onChange={onMainPhotoSelected} />
        ) : null}
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
