import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import UserProfile from "./UserProfile/UserProfile";

const Homepage = (props) => {
  return (
    <div>
      <div>
        <UserProfile
          isOwner={props.isOwner}
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          savePhoto={props.savePhoto}
        />
      </div>
      <div>
        <PostsContainer />
      </div>
    </div>
  );
};

export default Homepage;
