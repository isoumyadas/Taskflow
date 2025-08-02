import { createSlice } from "@reduxjs/toolkit";

// 1st step create a initialState:

const loadFromStorage = () => {
  const storedState = localStorage.getItem("authState");
  return storedState
    ? JSON.parse(storedState)
    : { status: false, userData: null };
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadFromStorage(),
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
