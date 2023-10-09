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
import InstractorPrivet from "./InstractorPrivet";
import FeaturePrivate from "./FeaturePrivate";

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
          <InstractorPrivet>
            <Instructor></Instructor>
          </InstractorPrivet>
        ),
        loader: () => fetch("/Person.json"),
      },
      {
        path: "/feature",
        element: (
          <FeaturePrivate>
            <Feature></Feature>
          </FeaturePrivate>
        ),
        loader: () => fetch("/feature.json"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <EventsDetails></EventsDetails>
          </PrivetRoute>
        ),
        loader: () => fetch("/data.json"),
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
