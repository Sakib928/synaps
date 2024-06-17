import { useNavigate } from "react-router-dom";
import useRole from "../hooks/useRole";

const StudentRoute = ({ children }) => {
  const navigate = useNavigate();
  const userRole = useRole();
  if (userRole === "student") {
    return children;
  }
  navigate("/");
};

export default StudentRoute;
