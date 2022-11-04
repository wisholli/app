const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  data: [
    { id: 1, message: "Hi" },
    { id: 2, message: "I like it" },
    { id: 3, message: "Bad food" },
    { id: 4, message: "Good staf" },
    { id: 5, message: "50/50" },
  ],
  newPostText: "",
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
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text,
});

export default postsReducer;
