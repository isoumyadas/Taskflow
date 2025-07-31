import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { logout } from "../features/authSlice";

const Logout = () => {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const logoutSession = await authService.logout();
      if (logoutSession) dispatch(logout());
    } catch (error) {
      throw new Error(
        `Error in LogoutBtn Component :: logoutHandler :: ${error.message}`
      );
    }
  };
  return (
    <button
      onClick={logoutHandler}
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
    >
      Logout
    </button>
  );
};

export default Logout;
