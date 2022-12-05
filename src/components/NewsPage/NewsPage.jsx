import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  addNews,
  searchNews,
  deleteNews,
  updateAddNewsText,
  updateSearchNewsText,
} from "../../redux/newsReducer";
import News from "./News/News";

const mapStateToProps = (state) => {
  return {
    news: state.news.data,
    updateSearchNews: state.news.updateSearchNewsText,
    updateAddNews: state.news.updateAddNewsText,
    isAuth: state.auth.isAuth,
  };
};

const NewsPage = (props) => {
  let newsData = props.news;

  let news = newsData.map((news) => <News news={news.content} />);

  let addNews = () => {
    props.addNews();
  };

  let searchNews = () => {
    props.searchNews();
  };

  let deleteNews = () => {
    props.deleteNews();
  };

  let onNewsChange = (e) => {
    let text = e.target.value;
    props.updateSearchNewsText(text);
  };
  let onAddNewsTextChange = (e) => {
    let text = e.target.value;
    props.updateAddNewsText(text);
  };
  return (
    <div>
      <h1>News</h1>
      <div>
        <textarea onChange={onAddNewsTextChange} value={props.updateAddNews} />
        <button onClick={addNews}>Add news</button>
        <button onClick={deleteNews}>Delete news</button>

        <textarea onChange={onNewsChange} value={props.updateSearchNews} />

        <button onClick={searchNews}>Search news</button>

        {news}
      </div>
    </div>
  );
};

export default compose(
  connect(mapStateToProps, {
    addNews,
    searchNews,
    deleteNews,
    updateAddNewsText,
    updateSearchNewsText,
  }),
  withAuthRedirect
)(NewsPage);