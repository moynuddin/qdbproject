import { Route, Routes } from "react-router-dom";

import Blog from "./components/Blog";
import Dashboard from "./components/Dashboard";
import Sidebar from "./layout/Sidebar";
import classes from "./App.module.css";
import PostDetail from "./components/PostDetail";
import UpdatePost from "./components/updatePost";
function App() {
  return (
    <>
      <div className={classes.wrapper} data-tesid="app-works">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/postdetails/:id" element={<PostDetail />} />
          <Route path="/edit/:id" element={<UpdatePost />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
