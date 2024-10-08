import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ViewMaterialCard from "../../../components/ViewMaterialCard/ViewMaterialCard";
import { Toaster } from "react-hot-toast";

const ViewMaterials = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: allMaterials = [], refetch } = useQuery({
    queryKey: ["materials", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/materials?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <Toaster />
      {allMaterials.map((material) => {
        return (
          <ViewMaterialCard
            key={material._id}
            material={material}
            refetch={refetch}
          ></ViewMaterialCard>
        );
      })}
    </div>
  );
};

export default ViewMaterials;
