import { useState } from "react";
import { ILogin } from "../interfaces";

import type { NavigateFunction } from "react-router-dom";

export const useLogin = (navigate: NavigateFunction) => {
  const [error, setError] = useState<string>("");

  const handleLogin = async (userCredentials: ILogin) => {
    try {
      const response = await fetch(
        "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer keyfXgn8PL6pB3x32",
          },
        }
      );
      const data = await response.json();

      console.log("user", data);

      const user = data.records.find(
        (record: { fields: { username: string; password: string } }) =>
          record.fields.username === userCredentials.username &&
          record.fields.password === userCredentials.password
      );

      if (user) {
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return { handleLogin, error };
};
