import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import avatar from "../../assets/imeges/avatar.png";
import style from "./UserProfile.module.css";
import ProfileData from "./ProfileData";
import ProfileFormData from "./ProfileFormData";

const UserProfile = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveEditProfileData(formData).then(() => {
      setEditMode(false);
    });
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
        {!props.isOwner ? (
          <input type={"file"} on onChange={onMainPhotoSelected} />
        ) : null}
      </div>
      {editMode ? (
        <ProfileFormData
          initialValues={props.profile}
          profile={props.profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          profile={props.profile}
          isOwner={props.isOwner}
          status={props.status}
          updateStatus={props.updateStatus}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
    </div>
  );
};

export default UserProfile;
