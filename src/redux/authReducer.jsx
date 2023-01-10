import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "app/auth/SET-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth, captchaUrl) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth, captchaUrl },
  };
};

export const setCaptchaUrl = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl },
  };
};

export const setAuthUserDataTC = () => async (dispatch) => {
  let response = await authAPI.auth();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserDataTC());
    }
    if (response.data.resultCode === 1) {
      // if (response.data.resultCode === 10) {
      //   dispatch(getCaptchaUrl());
      // }
      // let message =
      //   response.data.messages.length > 0
      //     ? response.data.messages[0]
      //     : "Email or login is wrong";
      dispatch(
        stopSubmit("login", {
          _error: response.data.messages[0],
        })
      );
    }
  };

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false, null));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(setCaptchaUrl(captchaUrl));
};

export default authReducer;
