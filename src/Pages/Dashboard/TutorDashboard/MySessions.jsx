import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import MySessionCard from "../../../components/MySessionCard/MySessionCard";

const MySessions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: mySessions = [], refetch } = useQuery({
    queryKey: ["mySessions", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/mySessions?email=${user.email}`);
      return res.data;
    },
  });

  const handleResend = (_id) => {
    console.log("resend request for the id", _id);
    axiosSecure.patch(`/resend/${_id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        toast.success("request for approval sent");
        refetch();
      }
    });
  };

  return (
    <div>
      <Toaster />
      {mySessions.map((session) => {
        return (
          <MySessionCard
            key={session._id}
            session={session}
            handleResend={handleResend}
          ></MySessionCard>
        );
      })}
    </div>
  );
};

export default MySessions;
