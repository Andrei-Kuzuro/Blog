import styles from "../LoginForm/LoginForm.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const RegistrationForm = () => {
  const Confirm = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.login__form}>
        <form>
          <div className={styles.login__form__item}>
            <label>
              User Name
              <Input type={"text"} />
            </label>
          </div>
          <div className={styles.login__form__item}>
            <label>
              Email
              <Input type={"email"} />
            </label>
          </div>
          <div className={styles.login__form__item}>
            <label>
              Password
              <Input type={"password"} />
            </label>
          </div>
          <div className={styles.login__form__item}>
            <label>
              Confirm Password
              <Input type={"password"} />
            </label>
          </div>
          <Button text={"Login"} onClick={Confirm} />
        </form>
      </div>
      <div className={styles.login__description}>
        <p>
          If you have account, you can <a href={"/login"}>login</a>
        </p>
      </div>
    </div>
  );
};
