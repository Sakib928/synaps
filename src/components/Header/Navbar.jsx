import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/images/logo.svg";
import toast, { Toaster } from "react-hot-toast";
import useRole from "../../hooks/useRole";

const Navbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const userRole = useRole();
  const handleLogout = () => {
    logout().then(() => {
      toast.success("logged out successfully");
    });
  };
  let primaryDashboardLink = "";
  if (userRole === "admin") {
    primaryDashboardLink = "/dashboard/users";
  } else if (userRole === "tutor") {
    primaryDashboardLink = "/dashboard/createSession";
  } else {
    primaryDashboardLink = "/dashboard/bookedSessions";
  }
  const navLinks = (
    <>
      {user && (
        <li>
          <Link to={primaryDashboardLink}>Dashboard</Link>
        </li>
      )}
      {!user && (
        <>
          <li>
            <Link to={"login"}>Login</Link>
          </li>
          <li>
            <Link to={"register"}>Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <Toaster />
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a
            onClick={() => navigate("/")}
            className="text-2xl font-bold flex place-items-center"
          >
            {" "}
            <img src={logo} alt="" /> Synapse
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full ring-2 ring-offset-4ring-violet-600"
                  src={user?.photoURL}
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <p>Username : {user?.displayName}</p>
                </li>
                <li onClick={handleLogout}>
                  <a className="font-bold text-red-500">Log Out</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
