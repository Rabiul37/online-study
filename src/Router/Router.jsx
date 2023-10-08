import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import EventsDetails from "../Pages/EventsDetails";
import Register from "../Pages/Register";
import PrivetRoute from "./PrivetRoute";
import Instructor from "../Pages/Instructor";
import Feature from "../Pages/Feature";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructor",
        element: (
          <PrivetRoute>
            <Instructor></Instructor>
          </PrivetRoute>
        ),
        loader: () => fetch("../../public/Person.json"),
      },
      {
        path: "/feature",
        element: (
          <PrivetRoute>
            <Feature></Feature>
          </PrivetRoute>
        ),
        loader: () => fetch("../../public/feature.json"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <EventsDetails></EventsDetails>
          </PrivetRoute>
        ),
        loader: () => fetch("../../public/data.json"),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
