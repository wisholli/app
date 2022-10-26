// import style from './Homepage.module.css'
import Posts from "./Posts/Posts";
import React from "react";

const Homepage = (props) => {
  return (
    <div>
      <div className="About">
        <Posts store={props.store} dispatch={props.dispatch} />
      </div>
    </div>
  );
};

export default Homepage;
