import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./Post.module.css";
import { SinglePost, deletePost } from "../Slices/postSlice";
type Props = {
  post: unknown;
};

const Post = ({ post }: Props) => {
  const { blogs } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePost = (post) => {
    navigate(`/postdetails/${post.id}`);
    dispatch(SinglePost(post));
  };

  return (
    <div>
      <div className={classes.postContainer} onClick={() => handlePost(post)}>
        <h1 className={classes.title}>{post?.title}</h1>
        <p className={classes.body}>{post?.body}</p>
      </div>
    </div>
  );
};

export default Post;
