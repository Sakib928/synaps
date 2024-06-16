import { Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";

import TutorDashboard from "../Pages/Dashboard/TutorDashboard/TutorDashboard";
import StudentDashboard from "../Pages/Dashboard/StudentDashboard/StudentDashboard";
import { IoMenu } from "react-icons/io5";

const Dashboard = () => {
  const userRole = useRole();
  console.log("checking user role : ", userRole);
  return (
    // <div className="drawer lg:drawer-open">
    //   <input
    //     id="my-drawer-2"
    //     type="checkbox"
    //     className="drawer-toggle border-2 border-red-500"
    //   />
    //   <div className="drawer-content flex-col">
    //     {/* Page content here */}
    //     <div className="flex-none lg:hidden">
    //       <label
    //         htmlFor="my-drawer-2"
    //         className="btn btn-primary drawer-button  lg:hidden"
    //       >
    //         <IoMenu />
    //       </label>
    //     </div>
    //     <Outlet />
    //   </div>
    //   <div className="drawer-side">
    //     <div>
    //       <label
    //         htmlFor="my-drawer-2"
    //         aria-label="close sidebar"
    //         className="drawer-overlay"
    //       ></label>
    //       {userRole === "admin" && <AdminDashboard />}
    //       {userRole === "tutor" && <TutorDashboard />}
    //       {userRole === "student" && <StudentDashboard />}
    //     </div>
    //   </div>
    // </div>
    <div className="drawer lg:drawer-open text-left">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-start">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button  lg:hidden"
        >
          <IoMenu />
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content"> */}
        {/* Sidebar content here */}
        {/* <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul> */}

        {userRole === "admin" && <AdminDashboard />}
        {userRole === "tutor" && <TutorDashboard />}
        {userRole === "student" && <StudentDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;
