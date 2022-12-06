import style from "./Post.module.css";
import Post from "./Post/Post";
import React from "react";
import AddPostForm from "./AddPostForm";

const Posts = (props) => {
  let postElemets = props.posts.map((post) => <Post message={post.message} />);

  const onSubmit = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div className={style.content}>
      <h1 className={style.title}>Posts</h1>
      <AddPostForm onSubmit={onSubmit} />
      <div className={style.post}>{postElemets}</div>
    </div>
  );
};

export default Posts;
