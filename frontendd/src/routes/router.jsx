import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/home/Home";
import Basket from "../pages/basket/Basket";
import AddPage from "../pages/addPage/AddPage";
import Detail from "../pages/Detail/Detail";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/basket",
      element: <Basket/>,
    },
    {
      path: "/add",
      element: <AddPage/>,
    },
    {
      path: "/products/:id",
      element: <Detail/>,
    },
  ]);
export default router  