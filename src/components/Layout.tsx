import React from "react";
import { Outlet } from "react-router-dom";

interface Props {}

const Layout: React.FC<Props> = () => {
  return (
    <>
      <div>Header Goes Here</div>
      <Outlet />
    </>
  );
};

export default Layout;
