import styles from "./Input.module.css";

interface IInput {
  type: string;
}

export const Input = ({ type }: IInput) => {
  return <input className={styles.input} type={type} />;
};
