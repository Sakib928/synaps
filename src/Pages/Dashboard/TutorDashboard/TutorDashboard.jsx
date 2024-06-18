import { NavLink } from "react-router-dom";

const TutorDashboard = () => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li>
        <NavLink to={"/dashboard/createSession"}>Create Study Session</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/mySessions"}>My Sessions</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/uploadMaterials"}>Upload Materials</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/viewMaterials"}>View All Materials</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Homepage</NavLink>
      </li>
    </ul>
  );
};

export default TutorDashboard;
