import { useNavigate } from "react-router-dom";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
  const userRole = useRole();
  const navigate = useNavigate();
  if (userRole === "admin") {
    return children;
  }
  navigate("/");
};

export default AdminRoute;
