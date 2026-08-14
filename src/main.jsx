import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NavBar from "./component/NavBar.jsx";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Profile from "./component/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><NavBar /><Home /></>
  },
  {
    path: "/about",
    element: <><NavBar /><About /></>
  },
  {
    path: "/profile",
    element: <><NavBar /><Profile /></>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <NavBar /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
