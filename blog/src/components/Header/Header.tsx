import styles from "./Header.module.css";
import { NavBar } from "../NavBar/NavBar";
import { useState } from "react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const closeNavBar = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.burger}
          src="./images/burger-menu.svg"
          alt="burger"
          onClick={() => setIsActive(!isActive)}
        />
        {isActive ? <NavBar closeNavBar={closeNavBar} /> : null}
      </div>
    </div>
  );
};
