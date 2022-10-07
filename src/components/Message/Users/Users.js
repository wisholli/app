import style from './Users.module.css'
import { Link } from 'react-router-dom';

const Users = (props) => {
    return(
    <div className='Dishes'>
        <div className={style.item}>
            <Link to={ props.link }>{ props.name }</Link>
        </div>
    </div>
    );
} 

export default Users