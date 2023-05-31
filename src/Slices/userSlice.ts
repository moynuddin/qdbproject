import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {},
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { userProfile } = UserSlice.actions;

export default UserSlice.reducer;
