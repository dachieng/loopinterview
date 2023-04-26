import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

interface Props {}

const App: React.FC<Props> = () => {
  return <RouterProvider router={router} />;
};

export default App;
