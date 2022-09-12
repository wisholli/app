import style from './Testimonial.module.css'
import Post from "./Post/Post";
import React from 'react';

const Testimonial = (props) => {

    let testimonialElemets = props.items
.map( testimonial => <Post message={testimonial.message}/>);

    let newTestimonial = React.createRef();

    let addTestimonial = () => {
        let text = newTestimonial.current.value;
        props.addTestimonial(text)
        newTestimonial.current.value = '';
    }

    return (
        <div className={style.content}>
            <h1 className={style.title}>Testimonials</h1>
            <div>
                <textarea ref={newTestimonial} className={style.textarea}></textarea>
                <button onClick={ addTestimonial } className={style.button}>Add testimonial</button>
                <div className={style.post}>
                    {testimonialElemets}
                </div>
            </div>
        </div>
    );
}

export default Testimonial