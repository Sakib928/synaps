import { useNavigate } from "react-router-dom";
import useRole from "../hooks/useRole";

const TutorRoute = ({ children }) => {
  const navigate = useNavigate();
  const userRole = useRole();
  if (userRole === "tutor") {
    return children;
  }
  navigate("/");
};

export default TutorRoute;
