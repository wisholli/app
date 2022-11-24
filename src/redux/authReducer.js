import { usersAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isFetching: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => {
  return {
    type: SET_USER_DATA,
    data: { userId, email, login },
  };
};

export const setAuthUserDataTC = () => {
  return (dispatch) => {
    usersAPI.auth().then((data) => {
      if (data.resultCode === 0) {
        let id = data.data.id;
        let email = data.data.email;
        let login = data.data.login;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};

export default authReducer;
