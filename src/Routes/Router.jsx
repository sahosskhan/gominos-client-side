import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Register from "../CustomAuth/Register";
import Login from "../CustomAuth/Login";
import AddFood from "../Pages/AddFood";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children: [
     {
        path: "/",
        element: <Home/>,
        loader: () =>
          fetch(
            "http://localhost:5000/food-data-get"
          ),
     },
     {
      path: "/add-items",
      element: <AddFood/>,
     }

      ]
    },
    {
      path: "/register-account",
      element: <Register/>
    },
    {
      path: "/login-account",
      element: <Login/>,
      loader: () =>
        fetch(
          "http://localhost:5000/user-data-get"
        ),
    },
 
  ]);