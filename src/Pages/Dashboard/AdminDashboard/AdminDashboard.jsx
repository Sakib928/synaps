import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li>
        <NavLink to={"/dashboard/users"}>View All Users</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/allSessions"}>View All Sessions</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/allMaterials"}>View All Materials</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/announcement"}>Make an announcement</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>HomePage</NavLink>
      </li>
    </ul>
  );
};

export default AdminDashboard;
