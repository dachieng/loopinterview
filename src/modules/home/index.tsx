import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { fetchMaps } from "./hooks/fetchMaps";

const HomeModule = () => {
  const [maps, setMaps] = useState([]);
  // extract tab from url
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab");

  // map data
  useEffect(() => {
    fetchMaps().then((data) => {
      setMaps(data.records);
    });
  }, []);

  return (
    <div>
      {tab === "home" ? <p>This is home</p> : null}{" "}
      {tab === "bookmarks" ? <p>This is bookmarks</p> : null}
    </div>
  );
};

export default HomeModule;
