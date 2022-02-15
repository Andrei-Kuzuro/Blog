import styles from "./LoginForm.module.css";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const LoginForm = () => {
  const Confirm = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.login__form}>
        <form>
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
          <Button text={"Login"} onClick={Confirm} />
        </form>
      </div>
      <div className={styles.login__description}>
        <p>
          Forgot your password? <a>Reset password</a>
        </p>
      </div>
    </div>
  );
};
