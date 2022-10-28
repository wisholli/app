const SEARCH_USER = "SEARCH-USER";
const DELETE_USER = "DELETE-USER";
const UDATE_SEARCH_USER_NAME = "UDATE-SEARCH-USER-NAME";

let initialState = {
  data: [
    {
      id: 1,
      name: "Vitalii",
      img: "",
      link: "vitalii",
    },
    {
      id: 2,
      name: "Olga",
      img: "",
      link: "olga",
    },
    {
      id: 3,
      name: "Lera",
      img: "",
      link: "lera",
    },
  ],
  searchUserName: "",
};

const usersReducer = (state = initialState, action) => {
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

export const searchUserActionCreator = () => ({
  type: SEARCH_USER,
});
export const deleteUserActionCreator = () => ({
  type: DELETE_USER,
});
export const updateSearchUserNameActionCreator = (text) => ({
  type: UDATE_SEARCH_USER_NAME,
  text,
});

export default usersReducer;
