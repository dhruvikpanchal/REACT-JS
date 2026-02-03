import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/home.jsx";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import User from "./components/User.jsx";
import Github, { githubInfoLoader } from "./components/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="header" element={<Header />} />
      <Route path="about" element={<About />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="user" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
    </Route>,
  ),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
