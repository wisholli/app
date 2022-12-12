import { setAuthUserDataTC } from "./authReducer";

const SET_INITIALIZED = "SET-INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(setAuthUserDataTC());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
