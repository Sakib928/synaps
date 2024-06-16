import { Link } from "react-router-dom";

const TutorDashboard = () => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li>
        <Link to={"/dashboard/createSession"}>Create Study Session</Link>
      </li>
      <li>
        <Link to={"/dashboard/mySessions"}>My Sessions</Link>
      </li>
      <li>
        <Link to={"/dashboard/uploadMaterials"}>Upload Materials</Link>
      </li>
      <li>
        <Link to={"/dashboard/viewMaterials"}>View All Materials</Link>
      </li>
      <li>
        <Link to={"/"}>Homepage</Link>
      </li>
    </ul>
  );
};

export default TutorDashboard;
