import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Header } from "../stories/Header";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../modules/login/helpers";

interface Props {}

const Layout: React.FC<Props> = () => {
  const userObject = getUserFromLocalStorage();
  const navigate = useNavigate();

  console.log("u", userObject?.username);

  const handleLogout = () => {
    removeUserFromLocalStorage();
  };

  return (
    <>
      <div>
        <Header
          user={userObject?.username}
          onLogin={() => navigate("/login")}
          onLogout={handleLogout}
        />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
