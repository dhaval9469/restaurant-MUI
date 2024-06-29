import React from "react";
import Navebar from "./Navebar";
import Fotter from "./Fotter";

const Layout = ({ children }) => {
  return (
    <>
      <Navebar />
      <div>{children}</div>
      <Fotter />
    </>
  );
};

export default Layout;
