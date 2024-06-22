import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import FileSaver from "file-saver";
import { FaDownload } from "react-icons/fa";

const AllMaterials = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allMaterials = [], refetch } = useQuery({
    queryKey: ["allmaterials"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allMaterials");
      return res.data;
    },
  });
  // console.log(allMaterials);
  return (
    <div>
      <Toaster />
      {allMaterials.map((material) => {
        const handleDelete = async () => {
          const res = await axiosSecure.delete(`/materials/${material?._id}`);
          if (res.data.deletedCount) {
            toast.success("Deleted material successfully");
            refetch();
          }
        };
        const handleDownload = () => {
          FileSaver.saveAs(material?.image, "material.jpg");
        };
        return (
          <div
            key={material?._id}
            className="max-w-2xl px-8 py-4 bg-slate-400 rounded-lg shadow-md mt-4"
          >
            <div className="mt-2">
              <a
                href="#"
                className="text-xl font-bold text-gray-700 hover:underline"
                tabIndex="0"
                role="link"
              >
                Material Title : {material?.title}
              </a>
              <p className="mt-2 text-gray-600">
                Tutor Email : {material?.tutorEmail}
              </p>
              <p className="mt-2 text-gray-600">
                Session Id {material?.sessionId}
              </p>
              <p className="mt-2 text-gray-600 flex gap-2 place-items-center">
                image : {material?.image}{" "}
                <FaDownload
                  onClick={handleDownload}
                  className="cursor-pointer"
                />
              </p>
              <a href={material?.driveLink} className="hover:underline">
                <p className="mt-2 text-gray-600 ">
                  Drive Link :{" "}
                  <span className="cursor-pointer underline text-blue-800">
                    {material?.driveLink}
                  </span>
                </p>
              </a>
            </div>
            <button
              onClick={handleDelete}
              className="btn btn-error mt-4 btn-sm tooltip"
              data-tip="delete"
            >
              <MdDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllMaterials;
