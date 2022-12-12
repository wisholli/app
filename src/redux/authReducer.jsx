import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};

export const setAuthUserDataTC = () => {
  return (dispatch) => {
    authAPI.auth().then((data) => {
      if (data.resultCode === 0) {
        let id = data.data.id;
        let email = data.data.email;
        let login = data.data.login;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserDataTC());
      } else {
        let message =
          data.messages.length > 0
            ? data.messages[0]
            : "Email or login is wrong";
        dispatch(
          stopSubmit("login", {
            _error: message,
          })
        );
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
