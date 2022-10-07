import style from './Message.module.css'
import Users from './Users/Users'

const Message = (props) => {
    let info = props.items.map(info => <Users name={info.name} link={info.link}/>)
    return (
            <div className={style.menu}>
                <h1 className={style.title}>Menu</h1>
                {info}
            </div>
    );
}

export default Message