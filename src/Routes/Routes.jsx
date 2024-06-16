import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import SessionDetails from "../components/SessionDetails/SessionDetails";
import PrivateRoute from "./PrivateRoute";
import Users from "../Pages/Dashboard/AdminDashboard/Users";
import AllSessions from "../Pages/Dashboard/AdminDashboard/AllSessions";
import AllMaterials from "../Pages/Dashboard/AdminDashboard/AllMaterials";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>Something went wrong</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "session/:id",
        element: (
          <PrivateRoute>
            <SessionDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <h1>Something went wrong</h1>,
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "allSessions",
        element: <AllSessions />,
      },
      {
        path: "allMaterials",
        element: <AllMaterials />,
      },
    ],
  },
]);
