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
import CreateSession from "../Pages/Dashboard/TutorDashboard/CreateSession";
import UploadMaterials from "../Pages/Dashboard/TutorDashboard/UploadMaterials";
import ViewMaterials from "../Pages/Dashboard/TutorDashboard/ViewMaterials";
import MySessions from "../Pages/Dashboard/TutorDashboard/MySessions";
import BookedSessions from "../Pages/Dashboard/StudentDashboard/BookedSessions";
import CreateNote from "../Pages/Dashboard/StudentDashboard/CreateNote";
import ManageNotes from "../Pages/Dashboard/StudentDashboard/ManageNotes";
import MyCourseMaterials from "../Pages/Dashboard/StudentDashboard/MyCourseMaterials";

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
      // admin routes
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
      // tutor routes
      {
        path: "createSession",
        element: <CreateSession />,
      },
      {
        path: "mySessions",
        element: <MySessions />,
      },
      {
        path: "uploadMaterials",
        element: <UploadMaterials />,
      },
      {
        path: "viewMaterials",
        element: <ViewMaterials />,
      },
      // student routes
      {
        path: "bookedSessions",
        element: <BookedSessions />,
      },
      {
        path: "createNote",
        element: <CreateNote />,
      },
      {
        path: "manageNotes",
        element: <ManageNotes />,
      },
      {
        path: "myCourseMaterials",
        element: <MyCourseMaterials />,
      },
    ],
  },
]);
