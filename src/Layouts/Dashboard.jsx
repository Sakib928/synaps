import { Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";

import TutorDashboard from "../Pages/Dashboard/TutorDashboard/TutorDashboard";
import StudentDashboard from "../Pages/Dashboard/StudentDashboard/StudentDashboard";

const Dashboard = () => {
  const userRole = useRole();
  console.log("checking user role : ", userRole);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content flex-col">
        {/* Page content here */}
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-2"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <div>
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {userRole === "admin" && <AdminDashboard />}
          {userRole === "tutor" && <TutorDashboard />}
          {userRole === "student" && <StudentDashboard />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
