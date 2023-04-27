import React, { useEffect, useState } from "react";
import { Tabs } from "../stories/Tabs";
import { Tab } from "../stories/Tab";
import { useNavigate } from "react-router-dom";

type TabType = "home" | "bookmarks";

const Sidebar = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [tab, setTab] = useState<TabType>("home");

  const navigate = useNavigate();

  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index);
    setTab(index === 0 ? "home" : "bookmarks");
  };

  useEffect(() => {
    navigate(`/?tab=${tab}`, { replace: true });
  }, [tab, navigate]);

  return (
    <div className='sidebar'>
      <Tabs onTabChange={handleTabChange} selectedTabIndex={selectedTabIndex}>
        <Tab label='home' onClick={() => setTab("home")} />
        <Tab label='bookmarks' onClick={() => setTab("bookmarks")} />
      </Tabs>
    </div>
  );
};

export default Sidebar;
