import { createSlice } from "@reduxjs/toolkit";

// 1st step create a initialState:

const initialState = {
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
