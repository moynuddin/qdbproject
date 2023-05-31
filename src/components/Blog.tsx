import { useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../utility/api";

import Post from "./Post";
import classes from "./Blog.module.css";
import { PostList } from "../Slices/postSlice";
type Props = {};

const Blog = (props: Props) => {
  const dispath = useDispatch();
  const errorHandler = useErrorBoundary();
  const { blogs: posts } = useSelector((state) => state.posts);
  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await getPosts();
        dispath(PostList(data));
      } catch (error) {
        errorHandler(error);
        console.error(error);
      }
    };
    getPost();
  }, [dispath, errorHandler]);

  console.log(posts);
  // console.log()
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
