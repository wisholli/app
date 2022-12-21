export const getFindUsers = (state) => {
  return state.findUsers.data;
};
export const getPageSize = (state) => {
  return state.findUsers.pageSize;
};
export const getTotalUsersCount = (state) => {
  return state.findUsers.totalUsersCount;
};
export const getCurrentPage = (state) => {
  return state.findUsers.currentPage;
};
export const getIsFetching = (state) => {
  return state.findUsers.isFetching;
};
export const getFollowingInProgress = (state) => {
  return state.findUsers.followingInProgress;
};
