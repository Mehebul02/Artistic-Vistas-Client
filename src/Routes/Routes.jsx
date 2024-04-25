import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../components/Headers/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCraftItem from "../pages/AddCraftItem";
import PrivateRoute from "../privateroute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element:<Register/>,
      },
      {
        path:'/addCraft',
        element:<PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
      }
    ],
  },
]);

export default router;
