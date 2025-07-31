import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router";
import {
  Login,
  Logout,
  Register,
  Dashboard,
  AuthWrapper,
} from "./components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="/login"
        element={
          <AuthWrapper authentication={false}>
            <Login />
          </AuthWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <AuthWrapper authentication={false}>
            <Register />
          </AuthWrapper>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AuthWrapper authentication={true}>
            <Dashboard />
          </AuthWrapper>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
