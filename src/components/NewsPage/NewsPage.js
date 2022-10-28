import React from "react";
import {
  addNewsActionCreator,
  searchNewsActionCreator,
  deleteNewsActionCreator,
  updateSearchNewsActionCreator,
} from "../../redux/newsReducer";
import News from "./News/News";

const NewsPage = (props) => {
  let newsData = props.store.getState().news;

  let news = newsData.data.map((news) => <News news={news.content} />);

  let newNews = React.createRef();

  let addNews = () => {
    props.dispatch(addNewsActionCreator());
  };

  let searchNews = () => {
    props.dispatch(searchNewsActionCreator());
  };

  let deleteNews = () => {
    props.dispatch(deleteNewsActionCreator());
  };

  let onNewsChange = () => {
    let text = newNews.current.value;
    props.dispatch(updateSearchNewsActionCreator(text));
  };
  return (
    <div>
      <h1>News</h1>
      <div>
        <textarea
          onChange={onNewsChange}
          ref={newNews}
          value={newsData.searchNews}
        />
        <button onClick={addNews}>Add news</button>
        <button onClick={searchNews}>Search news</button>
        <button onClick={deleteNews}>Delete news</button>
        {news}
      </div>
    </div>
  );
};

export default NewsPage;
