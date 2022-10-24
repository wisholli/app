import React from "react";
import News from "./News/News";

const NewsPage = (props) => {
  let news = props.items.map((news) => <News news={news.content} />);

  let newNews = React.createRef();

  let addNews = () => {
    props.dispatch({ type: "ADD-NEWS" });
  };

  let searchNews = () => {
    props.dispatch({ type: "SEARCH-NEWS" });
  };

  let deleteNews = () => {
    props.dispatch({ type: "DELETE-NEWS" });
  };

  let onNewsChange = () => {
    let text = newNews.current.value;
    props.dispatch({ type: "UPDATE-SEARCH-NEWS", newName: text });
  };
  return (
    <div>
      <h1>News</h1>
      <div>
        <textarea
          onChange={onNewsChange}
          ref={newNews}
          value={props.searchNews}
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
