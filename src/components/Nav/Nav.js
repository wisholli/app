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
        <Link to="/menu">Menu</Link>
      </div>
      <div
        className={`${style.item} ${
          location.pathname === "/reservation" ? style.active : null
        }`}
      >
        <Link to="/reservation">Reservation</Link>
      </div>
      <div
        className={`${style.item} ${
          location.pathname === "/history" ? style.active : null
        }`}
      >
        <Link to="/history">History</Link>
      </div>
      <div
        className={`${style.item} ${
          location.pathname === "/testimonial" ? style.active : null
        }`}
      >
        <Link to="/testimonial">Testimonial</Link>
      </div>
    </nav>
  );
};

export default Nav;
