import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import SessionDetails from "../components/SessionDetails/SessionDetails";
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
import Payment from "../Pages/Payment/Payment";
import BookedSessionDetails from "../components/BookedSessionDetails/BookedSessionDetails";
import PrivateRoute from "./PrivateRoute";
import Announcement from "../Pages/Dashboard/AdminDashboard/Announcement";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import TutorRoute from "./TutorRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
      {
        path: "payment/:id",
        element: <Payment />,
      },
      {
        path: "bookedSession/:id",
        element: (
          <PrivateRoute>
            {" "}
            <BookedSessionDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      // admin routes
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
      {
        path: "allSessions",
        element: (
          <AdminRoute>
            <AllSessions />
          </AdminRoute>
        ),
      },
      {
        path: "allMaterials",
        element: (
          <AdminRoute>
            <AllMaterials />
          </AdminRoute>
        ),
      },
      {
        path: "announcement",
        element: (
          <AdminRoute>
            <Announcement />
          </AdminRoute>
        ),
      },
      // tutor routes
      {
        path: "createSession",
        element: (
          <TutorRoute>
            <CreateSession></CreateSession>
          </TutorRoute>
        ),
      },
      {
        path: "mySessions",
        element: (
          <TutorRoute>
            <MySessions />
          </TutorRoute>
        ),
      },
      {
        path: "uploadMaterials",
        element: (
          <TutorRoute>
            <UploadMaterials />
          </TutorRoute>
        ),
      },
      {
        path: "viewMaterials",
        element: (
          <TutorRoute>
            <ViewMaterials />
          </TutorRoute>
        ),
      },
      // student routes
      {
        path: "bookedSessions",
        element: (
          <PrivateRoute>
            <BookedSessions />
          </PrivateRoute>
        ),
      },

      {
        path: "createNote",
        element: (
          <PrivateRoute>
            <CreateNote />
          </PrivateRoute>
        ),
      },
      {
        path: "manageNotes",
        element: (
          <PrivateRoute>
            <ManageNotes />
          </PrivateRoute>
        ),
      },
      {
        path: "myCourseMaterials",
        element: (
          <PrivateRoute>
            <MyCourseMaterials />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
