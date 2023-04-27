import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "../stories/Button";

interface Props {}

const Layout: React.FC<Props> = () => {
  return (
    <>
      <div>
        <Button label='Hello' />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
