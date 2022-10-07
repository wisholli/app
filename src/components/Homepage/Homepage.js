// import style from './Homepage.module.css'
import Posts from "./Posts/Posts";

const Homepage = (props) => {
    return (
        <div> 
          <div className='About'>
              <Posts items = {props.items} addPost = {props.addPost} />
          </div>
        </div>
    );
}

export default Homepage