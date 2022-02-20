import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Post } from "../Post/Post";
import styles from "./FullPost.module.css";

export const FullPost = () => {
  const params: any = useParams();

  const [fullPost, setFullPost] = useState<any>();

  useEffect(() => {
    fetch("https://studapi.teachmeskills.by/blog/posts/" + params.id)
      .then((response) => response.json())
      .then((result) => {
        setFullPost(result);
      });
  }, []);

  return (
    <div className={styles.container}>
      {fullPost ? (
        <Post
          id={fullPost.id}
          image={fullPost.image}
          title={fullPost.title}
          text={fullPost.text}
          date={fullPost.date}
        />
      ) : null}
    </div>
  );
};
