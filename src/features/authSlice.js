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
      localStorage.setItem("authState", JSON.stringify(state));
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
      localStorage.removeItem("authState");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
