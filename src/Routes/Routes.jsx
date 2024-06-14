import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";

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
    ],
  },
]);
