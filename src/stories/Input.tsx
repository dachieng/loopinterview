import React from "react";

import { Icon, type IconifyIcon } from "@iconify/react";

import "./input.css";

interface Props {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: "text" | "password";
  label: string;
  placeholder: string;
  icon?: IconifyIcon;
  name: string;
  onPasswordChange?: () => void;
}

export const Input: React.FC<Props> = ({
  value,
  name,
  type,
  label,
  onChange,
  placeholder,
  icon,
  onPasswordChange,
  ...props
}) => {
  return (
    <div className='input-container'>
      <label>{label}</label>
      <input
        className='input'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        {...props}
      />
      {icon ? (
        <Icon icon={icon} className='icon' onClick={onPasswordChange} />
      ) : null}
    </div>
  );
};
