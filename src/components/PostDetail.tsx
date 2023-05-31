import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { deletePost } from "../utility/api";
import { notification, Spin } from "antd";
import classes from "./PostDetail.module.css";
import { AxiosRequestConfig } from "axios";

const PostDetail = () => {
  const navigate = useNavigate();
  const [loader, setLoder] = useState(false);
  const { post } = useSelector((state) => state.posts);

  const openNotification = () => {
    notification.open({
      message: "Success",
      description: "Deleted successfully!",
    });
  };

  const handleEdit = (id: unknown) => {
    navigate(`/edit/${id}`);
    console.log(id);
  };

  const handleDelete = async (id: AxiosRequestConfig<unknown> | undefined) => {
    setLoder(true);
    const { status } = await deletePost(id);
    if (status === 200) {
      openNotification();
      navigate("/");
      setLoder(false);
    } else {
      setLoder(false);
    }
  };

  return (
    <>
      {loader ? (
        <div className={classes.spinner}>
          <Spin size="large" />
        </div>
      ) : (
        <div className={classes.postDetail}>
          <h1 className={classes.title}>{post?.title}</h1>
          <p className={classes.body}>{post?.body}</p>

          <div className={classes.btnWrapper}>
            <button
              className={` ${classes.btn} ${classes.edit}`}
              onClick={() => handleEdit(post?.id)}
            >
              edit
            </button>
            <button
              className={` ${classes.btn} ${classes.delete}`}
              onClick={() => handleDelete(post?.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetail;
