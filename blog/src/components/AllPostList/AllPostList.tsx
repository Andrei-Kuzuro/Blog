import { useCallback, useEffect, useState } from "react";
import { IPostCard, Post } from "../Post/Post";
import styles from "./AllPostList.module.css";
import { Button } from "../Button/Button";

const LIMIT = 5;

export const AllPostList = () => {
  const [post, setPost] = useState<IPostCard[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${offset}`
    )
      .then((response) => response.json())
      .then((result: any) => {
        setPost([...post, ...result.results]);
      });
  }, [offset]);

  const loadMore = useCallback(() => {
    setOffset(post.length);
  }, [post]);

  return (
    <div className={styles.postList}>
      {post.map((item: IPostCard) => {
        return (
          <Post
            id={item.id}
            key={item.id}
            image={item.image}
            title={item.title}
            text={item.text}
            date={item.date}
          />
        );
      })}
      <Button text={"More"} onClick={loadMore} />
    </div>
  );
};
