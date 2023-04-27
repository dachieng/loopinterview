import React from "react";
import { useLocation } from "react-router-dom";

const HomeModule = () => {
  // extract tab from url
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab");

  return (
    <div>
      {tab === "home" ? <p>This is home</p> : null}{" "}
      {tab === "bookmarks" ? <p>This is bookmarks</p> : null}
    </div>
  );
};

export default HomeModule;
