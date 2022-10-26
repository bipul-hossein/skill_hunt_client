import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Home from "../components/Home/Home";
import Blog from "../components/pages/blog/Blog";
import Course from "../components/pages/course/Course";
import FAQ from "../components/pages/FAQ/FAQ";
import CourseDetails from "../components/shareFile/CourseDetails";
import Error from "../components/shareFile/Error";
import Main from "../root/Main";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: '/course',
        element: <Course></Course>
      },
      {
        path: '/course/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://assignment10-server-bipul-hossein.vercel.app/course/${params.id}`)
      },
      {
        path: '/fag',
        element: <FAQ />

      },
      {
        path: '/blog',
        element:<PrivateRoute><Blog /></PrivateRoute>

      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />
  }
]);

export default routes;