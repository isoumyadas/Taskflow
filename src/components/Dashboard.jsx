// Dashboard is the main page
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
import authService from "../appwrite/auth";
import { login, logout } from "../features/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.auth.userData);
  const authStatus = useSelector((state) => state.auth.status);

  console.log("AuthStatus:::", authStatus);

  console.log("selector::", selector);

  const [loader, setLoader] = useState(true);

  // const [name, setName] = useState();

  useEffect(() => {
    const userData = async () => {
      try {
        const data = await authService.getCurrentUser();

        if (data) {
          // setName(data);
          dispatch(login({ data }));
        } else {
          dispatch(logout());
        }
        console.log("selector in use::", authStatus);
      } catch (error) {
        throw new Error(
          `Error in authService useEffect Dashboard.jsx :: getCurrentUser => ${error.message}`
        );
      }
      setLoader(false);
    };

    userData();
  }, []);

  console.log("name:::", authStatus);
  return loader ? (
    <h1>Loading....</h1>
  ) : (
    <div>
      <h1>{`Welcome to Taskflow, ${selector?.data?.name} `}</h1>
    </div>
  );
};

export default Dashboard;
