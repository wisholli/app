import style from "./Post.module.css";
import Post from "./Post/Post";
import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/postsReducer";

const Posts = (props) => {
  let posts = props.store.getState().posts;

  let postElemets = posts.data.map((post) => <Post message={post.message} />);

  let newPost = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={style.content}>
      <h1 className={style.title}>Posts</h1>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPost}
          value={posts.newPostText}
          className={style.textarea}
        />
        <button onClick={addPost} className={style.button}>
          Add post
        </button>
        <div className={style.post}>{postElemets}</div>
      </div>
    </div>
  );
};

export default Posts;
