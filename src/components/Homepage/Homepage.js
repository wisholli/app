// import style from './Homepage.module.css'
import Posts from "./Posts/Posts";
import React from "react";

const Homepage = (props) => {
  return (
    <div>
      <div className="About">
        <Posts
          items={props.items}
          addPost={props.addPost}
          newPostText={props.newPostText}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  );
};

export default Homepage;
