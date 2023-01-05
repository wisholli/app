import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNews,
  searchNews,
  deleteNews,
  updateAddNewsText,
  updateSearchNewsText,
} from "../../redux/newsReducer";
import News from "./News/News";

const NewsPage = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.news);
  let news = data.data.map((news) => <News news={news.content} />);

  let addNewNews = () => {
    dispatch(addNews());
  };

  let searchOneNews = () => {
    dispatch(searchNews());
  };

  let deleteOneNews = () => {
    dispatch(deleteNews());
  };

  let onNewsChange = (e) => {
    dispatch(updateSearchNewsText(e.target.value));
  };
  let onAddNewsTextChange = (e) => {
    dispatch(updateAddNewsText(e.target.value));
  };
  return (
    <div>
      <h1>News</h1>
      <div>
        <textarea
          onChange={onAddNewsTextChange}
          value={data.updateAddNewsText}
        />
        <button onClick={addNewNews}>Add news</button>
        <button onClick={deleteOneNews}>Delete news</button>

        <textarea onChange={onNewsChange} value={data.updateSearchNewsText} />

        <button onClick={searchOneNews}>Search news</button>

        {news}
      </div>
    </div>
  );
};

export default NewsPage;
