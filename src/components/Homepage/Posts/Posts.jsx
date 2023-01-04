import style from "./Post.module.css";
import Post from "./Post/Post";
import React from "react";
import AddPostForm from "./AddPostForm";
import { addPost } from "../../../redux/postsReducer";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.posts);

  let postElemets = data.data.map((post) => <Post message={post.message} />);

  const addNewPost = (newPost) => {
    dispatch(addPost(newPost));
  };

  const onSubmit = (values) => {
    addNewPost(values.newPostText);
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
