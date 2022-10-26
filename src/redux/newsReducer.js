const ADD_NEWS = "ADD-NEWS";
const SEARCH_NEWS = "SEARCH-NEWS";
const DELETE_NEWS = "DELETE-NEWS";
const UPDATE_SEARCH_NEWS = "UPDATE-SEARCH-NEWS";

const newsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEWS:
      let news = {
        id: 4,
        content: state.searchNews,
      };

      state.data.push(news);
      state.searchNews = "";
      return state;
    case SEARCH_NEWS:
      const newNews = state.data.filter(
        (news) => news.content === state.searchNews
      );

      state.data = newNews;
      state.searchNews = "";
      return state;
    case DELETE_NEWS:
      state.data.pop();
      return state;
    case UPDATE_SEARCH_NEWS:
      state.searchNews = action.text;
      return state;
    default:
      return state;
  }
};
export default newsReducer;
