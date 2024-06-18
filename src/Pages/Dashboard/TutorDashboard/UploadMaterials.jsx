import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import UploadCard from "../../../components/UploadCard/UploadCard";

const UploadMaterials = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: approved = [] } = useQuery({
    queryKey: ["approved"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/approved?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      {approved.map((session) => {
        return <UploadCard key={session._id} session={session}></UploadCard>;
      })}
    </div>
  );
};

export default UploadMaterials;
