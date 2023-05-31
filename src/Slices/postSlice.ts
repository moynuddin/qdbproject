import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  blogs: [],
  post: [],
  form: {},
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    PostList: (state, action) => {
      state.blogs = action.payload;
    },
    SinglePost: (state, action) => {
      state.post = action.payload;
    },

    deletePost: (state, action) => {
      return state.blogs.filter((item) => item.id !== action.payload);
    },

    updatePost: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { PostList, SinglePost, deletePost, updatePost } =
  postSlice.actions;

export default postSlice.reducer;
