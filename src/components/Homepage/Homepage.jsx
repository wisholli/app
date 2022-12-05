import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import UserProfile from "./UserProfile/UserProfile";

const Homepage = (props) => {
  return (
    <div>
      <div>
        <UserProfile
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
      <div>
        <PostsContainer />
      </div>
    </div>
  );
};

export default Homepage;
