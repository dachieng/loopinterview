import React, { useEffect } from "react";
import { getUserFromLocalStorage } from "../login/helpers";
import { redirect, useNavigate } from "react-router-dom";

const HomeModule = () => {
  const user = getUserFromLocalStorage();
  const navigate = useNavigate();

  console.log("jd", user);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return <div>index</div>;
};

export default HomeModule;
