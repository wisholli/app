import React from "react";

import Preloader from "../Preloader/Preloader";
import PostsContainer from "./Posts/PostsContainer";

const Homepage = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src={props.profile.photos.small} alt="" />
      </div>
      <div>{props.profile.fullName}</div>
      <div>{props.profile.aboutMe}</div>

      <div>
        {!props.profile.lookingForAJob ? "Find job: NO" : "Find job: YES"}
      </div>
      <div className="About">
        <PostsContainer />
      </div>
    </div>
  );
};

export default Homepage;
