import style from './Menu.module.css'
import Dishes from './Dishes/Dishes';

const Menu = (props) => {
    let info = props.items.map(info => <Dishes name={info.name} link={info.link}/>)
    return (
            <div className={style.menu}>
                <h1 className={style.title}>Menu</h1>
                {info}
            </div>
    );
}

export default Menu