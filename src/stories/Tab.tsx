import React from "react";

interface ITab {
  label: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Tab: React.FC<ITab> = ({ children, label, onClick }) => {
  return <div>{children}</div>;
};
