import { userProfileAPI } from "../api/api";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

let initialState = {
  profile: null,
  status: "",
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const setUserProfileTC = (id) => async (dispatch) => {
  let response = await userProfileAPI.getUserProfile(id);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (id) => async (dispatch) => {
  let response = await userProfileAPI.getUserStatus(id);
  dispatch(setUserStatus(response.data));
};

export const updateUserStatusTC = (status) => async (dispatch) => {
  let response = await userProfileAPI.updateUserStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export default userProfileReducer;
