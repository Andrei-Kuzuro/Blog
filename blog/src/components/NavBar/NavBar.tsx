import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

interface IProps {
  closeNavBar: () => void;
}

export const NavBar = ({ closeNavBar }: IProps) => {
  return (
    <div className={styles.navBar}>
      <div>
        <img
          className={styles.closeNavBar}
          src="./images/close-burger.svg"
          alt="close-burger"
          onClick={closeNavBar}
        />
      </div>
      <div className={styles.navLink}>
        <NavLink to="/login" exact className={styles.login}>
          Login
        </NavLink>
        <NavLink to="/registration" exact className={styles.login}>
          Registration
        </NavLink>
        <NavLink to="/" exact className={styles.login}>
          AllPostList
        </NavLink>
      </div>
    </div>
  );
};
