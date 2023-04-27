import React from "react";

import "./tabs.css";

interface ITabs {
  children: any;
  selectedTabIndex: number;
  onTabChange: (index: number) => void;
}

export const Tabs: React.FC<ITabs> = ({
  children,
  selectedTabIndex,
  onTabChange,
}) => {
  const handleTabClick = (index: number) => {
    onTabChange(index);
  };

  return (
    <div className='tab-container'>
      {React.Children.map(children, (child, index) => (
        <p key={index}>
          <button
            className={`tab-button ${
              selectedTabIndex === index ? "active" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </button>
        </p>
      ))}

      <div>{React.Children.toArray(children)[selectedTabIndex]}</div>
    </div>
  );
};
