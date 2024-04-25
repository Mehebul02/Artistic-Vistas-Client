import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../components/Headers/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register/>
      }
    ],
  },
]);

export default router;
