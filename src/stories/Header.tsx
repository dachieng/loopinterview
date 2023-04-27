import React from "react";

import { Button } from "./Button";
import "./header.css";

// type User = {
//   username: string;
// };

interface HeaderProps {
  user?: string;
  onLogin: () => void;
  onLogout: () => void;
}

export const Header = ({ user, onLogin, onLogout }: HeaderProps) => {
  return (
    <header>
      <div className='wrapper'>
        <div>
          <h1>Loop</h1>
        </div>
        <div>
          {user ? (
            <>
              <span className='welcome'>Welcome, {user}</span>
              <Button size='small' onClick={onLogout} label='Log out' />
            </>
          ) : (
            <>
              <Button size='small' onClick={onLogin} label='Log in' />
            </>
          )}
        </div>
      </div>
    </header>
  );
};
