import styles from "./Post.module.css";
import { useHistory } from "react-router-dom";

export interface IPostCard {
  id: number;
  image: string;
  title: string;
  text: string;
  date: number;
}

export const Post = ({ id, image, title, text, date }: IPostCard) => {
  const history = useHistory();

  return (
    <div className={styles.card} onClick={() => history.push("/post/" + id)}>
      <img className={styles.image} src={image} alt="" />
      <h4>{title}</h4>
      <p>{text}</p>
      <p className={styles.time}>{date}</p>
    </div>
  );
};
