import { Link } from "react-router-dom";

const TutorDashboard = () => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li>
        <Link to={"/dashboard/users"}>View All Users</Link>
      </li>
      <li>
        <Link to={"/dashboard/allSessions"}>View All Sessions</Link>
      </li>
      <li>
        <Link to={"/dashboard/allMaterials"}>View All Materials</Link>
      </li>
    </ul>
  );
};

export default TutorDashboard;
