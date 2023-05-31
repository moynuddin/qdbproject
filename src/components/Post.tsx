import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./Post.module.css";
import { singlePost } from "../Slices/postSlice";
import { PostType } from "../../typings";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePost = (post: PostType) => {
    navigate(`/postdetails/${post.id}`);
    dispatch(singlePost(post));
  };

  return (
    <div data-testid="post-test">
      <div className={classes.postContainer} onClick={() => handlePost(post)}>
        <h1 className={classes.title}>{post?.title}</h1>
        <p className={classes.body}>{post?.body}</p>
      </div>
    </div>
  );
};

export default Post;
