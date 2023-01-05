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
        <Link to="/">Profile</Link>
      </div>
      <div
        className={`${style.item} ${
          location.pathname === "/message" ? style.active : null
        }`}
      >
        <Link to="/message">Message</Link>
      </div>
      <div
        className={`${style.item} ${
          location.pathname === "/news" ? style.active : null
        }`}
      >
        <Link to="/news">News</Link>
      </div>
      <div
        className={`${style.item} ${
          location.pathname === "/music" ? style.active : null
        }`}
      >
        <Link to="/music">Music</Link>
      </div>
      <div
        className={`${style.item} ${
          location.pathname === "/settings" ? style.active : null
        }`}
      >
        <Link to="/settings">Settings</Link>
      </div>
      <div
        className={`${style.item} ${
          location.pathname === "/findusers" ? style.active : null
        }`}
      >
        <Link to="/findusers">Find user</Link>
      </div>
      <div
        className={`${style.item} ${
          location.pathname === "/login" ? style.active : null
        }`}
      >
        <Link to="/login"></Link>
      </div>
    </nav>
  );
};

export default Nav;
