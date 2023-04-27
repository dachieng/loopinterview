import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "../components/Layout";
import LoginPage from "../pages/login";
import HomePage from "../pages/home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='login' element={<LoginPage />} />
    </Route>
  )
);
