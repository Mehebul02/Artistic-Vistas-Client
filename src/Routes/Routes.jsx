import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../components/Headers/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCraftItem from "../pages/AddCraftItem";
import PrivateRoute from "../privateroute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import CraftDetails from "../pages/CraftDetails";
import MyCraftList from "../pages/MyCraftList";
import AllArtCraft from "../pages/AllArtCraft";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/crafts"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><CraftDetails /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/crafts/${params.id}`),
      },
      {
        path: "/myCraft",
        element: <PrivateRoute><MyCraftList /></PrivateRoute>
      },
      {
        path:'/allArt',
        element:<AllArtCraft/>
      }
    ],
  },
]);

export default router;
