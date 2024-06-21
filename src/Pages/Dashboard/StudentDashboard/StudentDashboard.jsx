import { NavLink } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li>
        <NavLink to={"/dashboard/bookedSessions"}>View Booked Sessions</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/createNote"}>Create note</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/manageNotes"}>Manage notes</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/myCourseMaterials"}>
          View all materials
        </NavLink>
      </li>
      <li>
        <NavLink to={"/"}>HomePage</NavLink>
      </li>
    </ul>
  );
};

export default StudentDashboard;
