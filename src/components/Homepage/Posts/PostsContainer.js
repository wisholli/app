import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/postsReducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <Posts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.posts.data}
      newPostText={state.posts.newPostText}
    />
  );
};
export default PostsContainer;
