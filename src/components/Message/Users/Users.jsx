import style from "./Users.module.css";
import { Link } from "react-router-dom";

const Users = ({ name, link }) => {
  return (
    <div className="Dishes">
      <div className={style.item}>
        <Link to={link}>{name}</Link>
      </div>
    </div>
  );
};

export default Users;
