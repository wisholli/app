import style from './Post.module.css'
import NewPost from "./NewPost/NewPost";
import React from 'react';

const Post = (props) => {

    let postElemets = props.items
.map( post => <NewPost message={post.message}/>);

    let newPost = React.createRef();

    let addPost = () => {
        let text = newPost.current.value;
        props.addPost(text)
        newPost.current.value = '';
    }

    return (
        <div className={style.content}>
            <h1 className={style.title}>Posts</h1>
            <div>
                <textarea ref={newPost} className={style.textarea}></textarea>
                <button onClick={ addPost } className={style.button}>Add post</button>
                <div className={style.post}>
                    {postElemets}
                </div>
            </div>
        </div>
    );
}

export default Post