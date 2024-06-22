import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import FileSaver from "file-saver";
import { FaDownload } from "react-icons/fa";

const MyCourseMaterials = () => {
  const { currentUserSessions } = useAuth();
  console.log(currentUserSessions);
  const axiosSecure = useAxiosSecure();
  const { data: myCourseMaterials = [], isPending } = useQuery({
    queryKey: ["myCourseMaterials", currentUserSessions],
    queryFn: async () => {
      const res = await axiosSecure.post("/myCourseMaterials", {
        sessions: currentUserSessions,
      });
      return res.data;
    },
  });
  console.log(myCourseMaterials);
  if (isPending) {
    return (
      <div className="flex min-h-screen min-w-screen justify-center">
        <span className="loading loading-spinner text-info loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      {myCourseMaterials.map((material) => {
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
                Material title : {material?.title}
              </a>
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
              <p className="mt-2 text-gray-600 "></p>
            </div>

            <div className="flex items-center justify-between mt-4"></div>
          </div>
        );
      })}
    </div>
  );
};

export default MyCourseMaterials;
