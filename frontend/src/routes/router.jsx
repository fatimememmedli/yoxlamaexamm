import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
  ]);
  


  export default router