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
import UpdatePage from "../pages/UpdatePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://artistic-vistas-server.vercel.app/crafts"),
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
          fetch(`https://artistic-vistas-server.vercel.app/crafts/${params.id}`),
      },
      {
        path: "/myCraft",
        element: <PrivateRoute><MyCraftList /></PrivateRoute>
      },
      {
        path:'/allArt',
        element:<AllArtCraft/>
      },
      {
        path:'/update/:id',
        element:<UpdatePage/>,
        loader:({params})=>fetch(`https://artistic-vistas-server.vercel.app/crafts/${params.id}`)
      },
      // {
      //   path:'/subAll/:id',
      //   element:<SubcategoryAll/>,
      //   loader:({params})=>(`http://localhost:5000/subcategories/${params.id}`)
      // }
    ],
  },
]);

export default router;
