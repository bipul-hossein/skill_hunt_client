import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Home from "../components/Home/Home";
import Main from "../root/Main";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader: ()=>fetch("https://assignment10-server-bipul-hossein.vercel.app/products")
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/signup",
          element: <Signup/>,
        },
      ],
    },
  ]);
  
  export default routes;