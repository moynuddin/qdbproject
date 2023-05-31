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
    postList: (state, action) => {
      state.blogs = action.payload;
    },
    singlePost: (state, action) => {
      state.post = action.payload;
    },

    updatePost: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { postList, singlePost, updatePost } = postSlice.actions;

export default postSlice.reducer;
