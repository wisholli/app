import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://thumbs.dreamstime.com/b/plate-fork-spoon-logo-restaurant-menu-black-background-eps-plate-fork-spoon-logo-restaurant-menu-193129080.jpg" />

      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
