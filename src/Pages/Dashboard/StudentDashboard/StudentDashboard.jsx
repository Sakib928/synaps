import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li>
        <Link to={"/dashboard/bookedSessions"}>View Booked Sessions</Link>
      </li>
      <li>
        <Link to={"/dashboard/createNote"}>Create note</Link>
      </li>
      <li>
        <Link to={"/dashboard/manageNotes"}>Manage notes</Link>
      </li>
      <li>
        <Link to={"/dashboard/myCourseMaterials"}>View all materials</Link>
      </li>
      <li>
        <Link to={"/"}>HomePage</Link>
      </li>
    </ul>
  );
};

export default StudentDashboard;
