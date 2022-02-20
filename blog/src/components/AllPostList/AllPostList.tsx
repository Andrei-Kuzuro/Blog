import { useCallback, useEffect, useState } from "react";
import { Post } from "../Post/Post";
import styles from "./AllPostList.module.css";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../redux/store";
import { addPosts } from "../redux/actions/postActions";
import { IPostCard } from "../redux/reducers/postReducers";

const LIMIT = 5;

export const AllPostList = () => {
  const posts = useSelector((state: IState) => state.postReducers.posts);

  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${offset}`
    )
      .then((response) => response.json())
      .then((result: any) => {
        dispatch(addPosts(result.results));
      });
  }, [offset]);

  const loadMore = useCallback(() => {
    setOffset(posts.length);
  }, [posts]);

  return (
    <div className={styles.postList}>
      {posts.map((item: IPostCard) => {
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
