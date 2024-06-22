import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyCourseMaterials = () => {
  const { currentUserSessions } = useAuth();
  console.log(currentUserSessions);
  const axiosSecure = useAxiosSecure();
  const { data: myCourseMaterials = [] } = useQuery({
    queryKey: ["myCourseMaterials", currentUserSessions],
    queryFn: async () => {
      const res = await axiosSecure.post("/myCourseMaterials", {
        sessions: currentUserSessions,
      });
      return res.data;
    },
  });
  return (
    <div>
      <h1>here should be my course materials</h1>
    </div>
  );
};

export default MyCourseMaterials;
