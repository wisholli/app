import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "./UserProfile/UserProfile";
import {
  saveEditProfileDataTC,
  updateUserStatusTC,
  savePhoto,
  setUserProfileTC,
  getUserStatus,
} from "../../redux/userProfileReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Posts from "./Posts/Posts";

const Homepage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userProfile);
  const authData = useSelector((state) => state.auth);
  let { userId } = useParams();
  useEffect(() => {
    if (!userId) {
      userId = authData.userId;
    }
    dispatch(setUserProfileTC(userId));
    dispatch(getUserStatus(userId));
  }, []);
  const updateStatus = () => {
    dispatch(updateUserStatusTC());
  };
  const saveEditProfileData = () => {
    dispatch(saveEditProfileDataTC());
  };
  const saveUserPhoto = () => {
    dispatch(savePhoto());
  };
  return (
    <div>
      <div>
        <UserProfile
          isOwner={userId}
          profile={data.profile}
          status={data.status}
          updateStatus={updateStatus}
          savePhoto={saveUserPhoto}
          saveEditProfileData={saveEditProfileData}
        />
      </div>
      <div>
        <Posts />
      </div>
    </div>
  );
};

export default Homepage;
