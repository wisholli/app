// import style from './Homepage.module.css'
import Post from "./Post/Post";

const Homepage = (props) => {
    return (
        <div> 
          <div className='About'>
              <Post items = {props.items} addPost = {props.addPost} />
          </div>
        </div>
    );
}

export default Homepage