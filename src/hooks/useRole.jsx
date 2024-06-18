// import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "./useAxiosPublic";

const useRole = () => {
  const { user } = useAuth();
  // const [userRole, setUserRole] = useState("student");
  // useEffect(() => {
  //   axiosPublic.get(`/role?email=${user?.email}`).then((res) => {
  //     setUserRole(res.data);
  //   });
  // }, [user?.email]);
  const { data: userRole = "student" } = useQuery({
    queryKey: ["userrole", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/role?email=${user?.email}`);
      return res?.data;
    },
  });
  return userRole;
};

export default useRole;
