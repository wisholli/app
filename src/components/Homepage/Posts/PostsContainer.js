import { connect } from "react-redux";
import { addPost, updateNewPostText } from "../../../redux/postsReducer";
import Posts from "./Posts";
let mapStateToProps = (state) => {
  return {
    posts: state.posts.data,
    newPostText: state.posts.newPostText,
  };
};

const PostsContainer = connect(mapStateToProps, { addPost, updateNewPostText })(
  Posts
);

export default PostsContainer;
