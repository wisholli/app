import { Link, useLocation } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  const location = useLocation();
  return (
    <nav className={style.nav}>
      <div
        className={`${style.item} ${
          location.pathname === "/" ? style.active : null
        }`}
      >
        <Link to="/">Home page</Link>
      </div>
      <div
        className={`${style.item} ${
          location.pathname === "/menu" ? style.active : null
        }`}
      >
        <Link to="/message">Message</Link>
      </div>
    </nav>
  );
};

export default Nav;
