import style from './Dishes.module.css'
import { Link } from 'react-router-dom';

const Dishes = (props) => {
    return(
    <div className='Dishes'>
        <div className={style.item}>
            <Link to='borsh'>Borsh</Link>
        </div>
        <div className={style.item}>
            <Link to='salat'>Salat</Link>
        </div>
        <div className={style.item}> 
            <Link to='pasta'>Pasta</Link>
        </div>
    </div>
    );
} 

export default Dishes