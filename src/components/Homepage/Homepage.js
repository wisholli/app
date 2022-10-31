// import style from './Homepage.module.css'

import React from "react";
import PostsContainer from "./Posts/PostsContainer";

const Homepage = (props) => {
  return (
    <div>
      <div className="About">
        <PostsContainer store={props.store} />
      </div>
    </div>
  );
};

export default Homepage;
