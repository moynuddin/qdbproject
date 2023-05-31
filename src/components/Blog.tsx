import { useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../utility/api";

import Post from "./Post";
import classes from "./Blog.module.css";
import { postList } from "../Slices/postSlice";

const Blog = () => {
  const dispath = useDispatch();
  const errorHandler = useErrorBoundary();
  const { blogs: posts } = useSelector((state) => state.posts);
  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await getPosts();
        dispath(postList(data));
      } catch (error) {
        errorHandler(error);
        console.error(error);
      }
    };
    getPost();
  }, [dispath, errorHandler]);

  return (
    <div className={classes.blogWrapper}>
      <h1 className={classes.title}>Blog Post List</h1>

      {posts?.map((post: unknown) => (
        <Post key={post?.id} post={post} />
      ))}
    </div>
  );
};

export default Blog;
