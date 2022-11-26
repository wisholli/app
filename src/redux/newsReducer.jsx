const ADD_NEWS = "ADD-NEWS";
const SEARCH_NEWS = "SEARCH-NEWS";
const DELETE_NEWS = "DELETE-NEWS";
const UPDATE_SEARCH_NEWS_TEXT = "UPDATE-SEARCH-NEWS-TEXT";
const UPDATE_ADD_NEWS_TEXT = "UPDATE-ADD-NEWS-TEXT";

let initialState = {
  data: [
    {
      id: 1,
      // user: "ItGroup",
      content: "Article about react",
    },
    {
      id: 2,
      // user: "CookTogether",
      content: "How to cook borsh",
    },
    {
      id: 3,
      // user: "NewYorkTimes",
      content: "Breaking news",
    },
  ],
  updateAddNewsText: "",
  updateSearchNewsText: "",
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      let text = state.updateAddNewsText;
      return {
        ...state,
        data: [...state.data, { id: 4, content: text }],
        updateAddNewsText: "",
      };
    case SEARCH_NEWS:
      const newNews = state.data.filter(
        (news) => news.content === state.updateSearchNewsText
      );
      return { ...state, data: [...newNews], updateSearchNewsText: "" };
    case DELETE_NEWS:
      const deleteNews = [...state.data];
      deleteNews.pop();
      return { ...state, data: [...deleteNews] };
    case UPDATE_SEARCH_NEWS_TEXT:
      return { ...state, updateSearchNewsText: action.text };
    case UPDATE_ADD_NEWS_TEXT:
      return { ...state, updateAddNewsText: action.text };
    default:
      return state;
  }
};

export const addNews = () => ({
  type: ADD_NEWS,
});
export const searchNews = () => ({
  type: SEARCH_NEWS,
});
export const deleteNews = () => ({
  type: DELETE_NEWS,
});
export const updateSearchNewsText = (text) => ({
  type: UPDATE_SEARCH_NEWS_TEXT,
  text,
});
export const updateAddNewsText = (text) => ({
  type: UPDATE_ADD_NEWS_TEXT,
  text,
});

export default newsReducer;
