import { BsSendCheckFill } from "react-icons/bs";
import { MdFeedback } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MySessionCard = ({ session, handleResend }) => {
  const axiosSecure = useAxiosSecure();
  const { _id, status, title, description } = session;
  const { data: feedback = {} } = useQuery({
    queryKey: ["feedback", _id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/feedback/${_id}`);
      return res.data;
    },
  });
  //   console.log(feedback);
  const handleViewFeedback = () => {
    Swal.fire({
      title: "<strong>Your session has been rejected</strong>",
      icon: "info",
      html: `
          <p><strong>reason</strong> : ${feedback?.reason}</p> <br>
          <p><strong>feedback</strong>: ${feedback?.feedback}</p>
        `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: `Okay
        `,
    });
  };
  return (
    <div className="max-w-2xl px-8 py-4 bg-slate-400 rounded-lg shadow-md mb-6">
      <div className="flex items-center justify-between">
        <a
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
          tabIndex="0"
          role="button"
        >
          {status}
        </a>
      </div>
      <div className="mt-2">
        <p
          className="text-xl font-bold text-gray-700 hover:underline"
          tabIndex="0"
          role="link"
        >
          {title}
        </p>
        <p className="mt-2">{description}</p>
      </div>
      {status === "rejected" && (
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => handleResend(_id)}
            className="btn btn-primary tooltip"
            data-tip="resend request"
          >
            <BsSendCheckFill />
          </button>
          <button
            onClick={() => handleViewFeedback()}
            className="btn btn-primary tooltip"
            data-tip="view feedback"
          >
            <MdFeedback />
          </button>
        </div>
      )}
    </div>
  );
};

export default MySessionCard;
