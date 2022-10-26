const SEARCH_USER = "SEARCH-USER";
const DELETE_USER = "DELETE-USER";
const UDATE_SEARCH_USER_NAME = "UDATE-SEARCH-USER-NAME";

const usersReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USER:
      const newUsers = state.data.filter(
        (user) => user.name === state.searchUserName
      );
      state.data = newUsers;
      state.searchUserName = "";
      return state;
    case DELETE_USER:
      state.data.pop();
      return state;
    case UDATE_SEARCH_USER_NAME:
      state.searchUserName = action.text;
      return state;
    default:
      return state;
  }
};
export default usersReducer;
