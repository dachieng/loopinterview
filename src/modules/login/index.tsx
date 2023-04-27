import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import eyeOffOutline from "@iconify/icons-mdi/eye-off-outline";
import eyeOutline from "@iconify/icons-mdi/eye-outline";

import { Input } from "../../stories/Input";
import { Button } from "../../stories/Button";

import type { ILogin } from "./interfaces";
import { useLogin } from "./hooks";

const LoginModule = () => {
  const [userCredentials, setUserCredentials] = useState<ILogin>({
    username: "",
    password: "",
  });
  const [tooglePassword, setTooglePassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const { handleLogin, error } = useLogin(navigate);

  const handleTooglePassword = () => {
    setTooglePassword((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleLogin(userCredentials);
  };

  return (
    <div className='form-container'>
      <div className='form'>
        <form onSubmit={handleSubmit} className='form-contents'>
          <h3 className='heading'>Sign In</h3>
          {error ? <h4 className='error-field'>* {error}</h4> : null}
          <Input
            label='Username'
            type='text'
            placeholder='Enter username'
            name='username'
            onChange={handleChange}
          />
          <Input
            label='Password'
            type={!tooglePassword ? "password" : "text"}
            placeholder='Enter password'
            name='password'
            icon={!tooglePassword ? eyeOffOutline : eyeOutline}
            onPasswordChange={handleTooglePassword}
            onChange={handleChange}
          />
          <Button
            label='Submit'
            size='medium'
            primary
            margin='1rem 0'
            type='submit'
          />
        </form>
      </div>
    </div>
  );
};

export default LoginModule;
