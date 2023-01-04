import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { logout } from "../../redux/authReducer";
import { useDispatch, useSelector } from "react-redux";
//className='width-65 height-200 grid area-haeder bg-#ffffff spacing-x-50 spacing-y-20'
//<button className="styles.button">Click</button>
//imprort {BUtton } from 'mui'
{
  /* <Button color={'main'} ></Button> <Grid container></Grid> */
}

const Header = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth);
  const onLogoutClick = () => dispatch(logout());
  return (
    <header className={style.header}>
      <img src="https://thumbs.dreamstime.com/b/plate-fork-spoon-logo-restaurant-menu-black-background-eps-plate-fork-spoon-logo-restaurant-menu-193129080.jpg" />

      <div className={style.loginBlock}>
        {data.isAuth ? (
          <div>
            <div>{data.login}</div>
            <button onClick={onLogoutClick}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
