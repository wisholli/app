import style from './Testimonial.module.css'
import Post from "./Post/Post";

const Testimonial = (props) => {

    let testimonialElemets = props.testimonials
.map( testimonial => <Post message={testimonial.message}/>);

    return (
        <div className={style.content}>
            <h1 className={style.title}>Testimonials</h1>
            <div>
                <textarea className={style.textarea}></textarea>
                <button className={style.button}>Add testimonials</button>
                <div className={style.post}>
                    {testimonialElemets}
                </div>
            </div>
        </div>
    );
}

export default Testimonial