import style from './Message.module.css'
import Users from './Users/Users'
import React from 'react';

const Message = (props) => {
    let info = props.items.map(info => <Users name={info.name} link={info.link}/>)

    let newUser = React.createRef();
    
    let addNewUser = () => {
        let text = newUser.current.value;

        props.addNewUser(text)
        newUser.current.value = '';
    }

    return (
            <div className={style.menu}>
                <h1 className={style.title}>Message</h1>   
                <textarea ref={newUser} className={style.textarea}></textarea>
                <button onClick={addNewUser} className={style.button}>Add user</button>
                {info}
            </div>
    );
}

export default Message