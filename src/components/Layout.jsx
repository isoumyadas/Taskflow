import React from "react";
import { Outlet } from "react-router";
import { Header, Footer, Login } from "../components/index";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
