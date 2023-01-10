import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import avatar from "../../assets/imeges/avatar.png";
import style from "./UserProfile.module.css";
import ProfileData from "./ProfileData";
import ProfileFormData from "./ProfileFormData";

const UserProfile = (props) => {
  const {
    profile,
    isOwner,
    status,
    updateStatus,
    savePhoto,
    saveEditProfileData,
  } = props;
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  // const onSubmit = (formData) => {
  //   saveEditProfileData(formData).then(() => {
  //     setEditMode(false);
  //   });
  // };

  return (
    <div>
      <div>
        <img
          className={style.img}
          src={profile.photos.small != null ? profile.photos.small : avatar}
        />
      </div>
      <div>
        {!isOwner ? (
          <input type={"file"} on onChange={onMainPhotoSelected} />
        ) : null}
      </div>
      {editMode ? (
        <ProfileFormData
          profile={profile}
          saveEditProfileData={saveEditProfileData}
        />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          status={status}
          updateStatus={updateStatus}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
    </div>
  );
};

export default UserProfile;
