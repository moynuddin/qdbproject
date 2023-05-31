import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { notification, Spin } from "antd";
import { update } from "../utility/api";
import classes from "./UpdatePost.module.css";
import { updatePost } from "../Slices/postSlice";

const UpdatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    title: "",
    body: "",
  });
  const [loading, setLoading] = useState(false);
  const { post } = useSelector((state) => state.posts);

  const successNotification = () => {
    notification.open({
      message: "Success",
      description: "Record updated!",
    });
  };

  const handleUpdate = async (e: { preventDefault: () => void }) => {
    setLoading(true);
    e.preventDefault();
    dispatch(updatePost(inputValue));
    const { status } = await update(post.id);
    if (status === 200) {
      setLoading(false);
      successNotification();
      navigate("/");
    } else {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      {loading ? (
        <div className={classes.spinner}>
          <Spin size="large" />
        </div>
      ) : (
        <div className={classes.formWrapper}>
          <form onSubmit={handleUpdate}>
            <div className={classes.input}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                value={post.title}
                name="title"
                className={classes.formControl}
                onChange={handleChange}
              />
            </div>
            <div className={classes.input}>
              <label htmlFor="body">Body</label>
              <textarea
                rows="7"
                color="5"
                name="body"
                value={post.body}
                className={classes.inputForm}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className={classes.btn} type="submit">
              Update
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdatePost;
