import style from './Testimonial.module.css'
import Post from "./Post/Post";

const Testimonial = () => {
    return (
        <div className={style.content}>
            <h1 className={style.title}>Testimonials</h1>
            <div>
                <textarea className={style.textarea}></textarea>
                <button className={style.button}>Add testimonials</button>
                <div className={style.post}>
                    <Post message='Good food'/>
                    <Post message='I like it'/>
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
}

export default Testimonial