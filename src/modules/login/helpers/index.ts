export const setUserToLocalStorage = (username: string, password: string) => {
  const user = { username, password };
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  const userString = localStorage.getItem("user");
  if (userString) {
    const user = JSON.parse(userString);
    return user;
  }
  return null;
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};
