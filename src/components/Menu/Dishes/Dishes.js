import style from './Dishes.module.css'
import { Link } from 'react-router-dom';

const Dishes = (props) => {
    return(
    <div className='Dishes'>
        <div className={style.item}>
            <Link to={ props.link }>{ props.name }</Link>
        </div>
    </div>
    );
} 

export default Dishes