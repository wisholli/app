import { connect } from "react-redux";
import { addPost } from "../../../redux/postsReducer";
import Posts from "./Posts";
let mapStateToProps = (state) => {
  return {
    posts: state.posts.data,
  };
};

const PostsContainer = connect(mapStateToProps, { addPost })(Posts);

export default PostsContainer;
