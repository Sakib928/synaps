import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userRole, setUserRole] = useState("student");
  useEffect(() => {
    axiosSecure.get(`/role?email=${user?.email}`).then((res) => {
      setUserRole(res?.data);
    });
  }, [axiosSecure, user?.email]);
  return userRole;
};

export default useRole;
