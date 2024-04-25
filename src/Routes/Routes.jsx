import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../components/Headers/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
  ]);

  export default router