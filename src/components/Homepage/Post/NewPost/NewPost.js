import style from './NewPost.module.css'

const NewPost = (props) => {
    return (
        <div className={style.content}>
            <img className={style.img} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png&f=1&nofb=1'/>
            <p className={style.description}>{ props.message }</p>
        </div>
    );
}

export default NewPost