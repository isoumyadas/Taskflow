import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AuthWrapper = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (!authStatus && authentication) {
      navigate("/login");
    } else if (authStatus && authentication) {
      navigate("/dashboard");
    }

    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Auth Loading...</h1> : <>{children}</>;
};

export default AuthWrapper;
