import style from "./Post.module.css";
import Post from "./Post/Post";
import React from "react";

const Posts = (props) => {
  let postElemets = props.posts.map((post) => <Post message={post.message} />);

  let newPost = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={style.content}>
      <h1 className={style.title}>Posts</h1>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPost}
          value={props.newPostText}
          className={style.textarea}
        />
        <button onClick={onAddPost} className={style.button}>
          Add post
        </button>
        <div className={style.post}>{postElemets}</div>
      </div>
    </div>
  );
};

export default Posts;
