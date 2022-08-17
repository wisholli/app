import style from './Menu.module.css'
import Dishes from './Dishes/Dishes';

const Menu = (props) => {
    return (
            <div className={style.menu}>
                <h1 className={style.title}>Menu</h1>
                <Dishes />
            </div>
    );
}

export default Menu