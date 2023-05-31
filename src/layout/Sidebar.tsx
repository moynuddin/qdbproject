import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getuser } from "../utility/api";

import classes from "./SideBar.module.css";
import userImage from "../assets/images/profile.jpg";
import qdb from "../assets/images/qdb-logo.png";
import { userProfile } from "../Slices/userSlice";
type Props = {};

const Sidebar = (props: Props) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);

  useEffect(() => {
    const user = async () => {
      const { data } = await getuser();
      dispatch(userProfile(data));
    };
    user();
  }, [dispatch]);
  return (
    <div data-testid="sidebar-render">
      <div className={classes.sidebar}>
        <div className={classes.brand}>
          <Link to="/">
            <img src={qdb} alt="logo" />
          </Link>
          <p className={classes.title}>QDB</p>
        </div>

        <div className={classes.profile}>
          <img src={userImage} alt="Profile" className={classes.img} />
          <p className={classes.greatings}>Hello</p>
          <p>{profile.name}</p>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
          <p>{profile.website}</p>
          <p></p>
        </div>
        <hr />
        <div className={classes.links}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/">Blogs</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
