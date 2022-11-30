import {  userProfileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  data: [
    { id: 1, message: "Hi" },
    { id: 2, message: "I like it" },
    { id: 3, message: "Bad food" },
    { id: 4, message: "Good staf" },
    { id: 5, message: "50/50" },
  ],
  newPostText: "",
  profile: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let text = state.newPostText;
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: 6,
            message: text,
          },
        ],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.text };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPost = () => ({
  type: ADD_POST,
});
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserProfileTC = (id) => {
  return (dispatch) => {
    userProfileAPI.getUserProfile(id).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
export default postsReducer;
