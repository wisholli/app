import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE-IS-FOLLOWING-PROGRESS";

let initialState = {
  data: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const findUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        data: state.data.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        data: state.data.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, data: [...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOOGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const setTotalUsersCount = (count) => {
  return { type: SET_TOTAL_USERS_COUNT, count };
};
export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};
export const toggleFollowingProgress = (isFetching, userId) => {
  return { type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId };
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const followTC = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.follow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(id));
      }
      dispatch(toggleFollowingProgress(false, id));
    });
  };
};

export const unFollowTC = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.unFollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(id));
      }
      dispatch(toggleFollowingProgress(false, id));
    });
  };
};

export default findUsersReducer;
