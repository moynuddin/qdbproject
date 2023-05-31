import { configureStore } from "@reduxjs/toolkit";

import postSlice from "./Slices/postSlice";
import userSlice from "./Slices/userSlice";
const store = configureStore({
  reducer: {
    posts: postSlice,
    user: userSlice,
  },
  devTools: true,
});

export default store;
