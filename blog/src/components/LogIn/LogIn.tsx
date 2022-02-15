import { useState } from "react";
import { useLocation } from "react-router-dom";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import styles from "./LogIn.module.css";

export const LogIn = () => {
  const location = useLocation();

  const [isLogged, setIsLogged] = useState(location.pathname.includes("login"));

  const changeForm = (form: boolean) => {
    setIsLogged(form);
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <p
          className={
            isLogged
              ? styles.login__after__active
              : styles.login__after__notactive
          }
          onClick={() => changeForm(true)}
        >
          Login
        </p>
        <p
          className={
            isLogged
              ? styles.registration__notactive
              : styles.registration__active
          }
          onClick={() => changeForm(false)}
        >
          Registration
        </p>
      </div>
      {isLogged ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};

// styles.login__after;
