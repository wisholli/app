import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
//className='width-65 height-200 grid area-haeder bg-#ffffff spacing-x-50 spacing-y-20'
//<button className="styles.button">Click</button>
//imprort {BUtton } from 'mui'
{
  /* <Button color={'main'} ></Button> <Grid container></Grid> */
}

const Header = ({ login, logout, isAuth }) => {
  // const onLogoutClick = () => logout();
  return (
    <header className={style.header}>
      <img src="https://thumbs.dreamstime.com/b/plate-fork-spoon-logo-restaurant-menu-black-background-eps-plate-fork-spoon-logo-restaurant-menu-193129080.jpg" />

      <div className={style.loginBlock}>
        {isAuth ? (
          <div>
            <div>{login}</div>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
