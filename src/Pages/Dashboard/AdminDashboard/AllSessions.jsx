import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DashboardSessionCard from "../../../components/SessionDetails/DashboardSessionCard";

const AllSessions = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allSessions = [], refetch } = useQuery({
    queryKey: ["allsessions"],
    queryFn: async () => {
      const result = await axiosSecure.get("/sessions");
      return result.data;
    },
  });
  console.log(allSessions);
  return (
    <div>
      {allSessions.map((session, idx) => {
        return (
          <DashboardSessionCard
            key={session._id}
            session={session}
            refetch={refetch}
            idx={idx}
          ></DashboardSessionCard>
        );
      })}
    </div>
  );
};

export default AllSessions;
