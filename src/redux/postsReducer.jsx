const ADD_POST = "ADD-POST";

let initialState = {
  data: [
    { id: 1, message: "Hi" },
    { id: 2, message: "I like it" },
    { id: 3, message: "Bad food" },
    { id: 4, message: "Good staf" },
    { id: 5, message: "50/50" },
  ],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let text = action.newPostText;
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: 6,
            message: text,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export const addPost = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export default postsReducer;
