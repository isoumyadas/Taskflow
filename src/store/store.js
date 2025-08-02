import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";

// used custom middleware for auth checking (to avoid the flicker when refreshing)
const localStorageMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    // Save only after login/logout actions
    if (action.type === "auth/login" || action.type === "auth/logout") {
      const authState = getState().auth;
      if (action.type === "auth/logout") {
        localStorage.removeItem("authState");
      } else {
        localStorage.setItem("authState", JSON.stringify(authState));
      }
    }
    return result;
  };

const store = configureStore({
  reducer: { auth: authSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
