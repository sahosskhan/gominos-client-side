import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Register from "../CustomAuth/Register";
import Login from "../CustomAuth/Login";

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