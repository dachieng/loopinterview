import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Header } from "../stories/Header";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../modules/login/helpers";
import Sidebar from "./Sidebar";

interface Props {}

const Layout: React.FC<Props> = () => {
  const userObject = getUserFromLocalStorage();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserFromLocalStorage();
    window.location.reload();
  };

  useEffect(() => {
    if (!userObject) {
      navigate("/login");
    }
  }, [userObject?.username]);

  return (
    <>
      <Header
        user={userObject?.username}
        onLogin={() => navigate("/login")}
        onLogout={handleLogout}
      />
      <div className='main'>
        {userObject ? <Sidebar /> : null}
        <div className='main-content'>
          {" "}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
