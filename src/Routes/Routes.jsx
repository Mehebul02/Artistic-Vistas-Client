import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Roots from "../layout/Roots";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children:[
        {
          
        }
      ]
    },
  ]);

  export default router