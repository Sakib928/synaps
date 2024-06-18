import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import { useRef, useState } from "react";

const DashboardSessionCard = ({ session, refetch, idx }) => {
  const axiosSecure = useAxiosSecure();
  const { title, status, description, _id, tutorEmail } = session;
  const feeRef = useRef();
  const reasonRef = useRef();
  const feedBackRef = useRef();

  const [approveId, setApproveId] = useState("");
  const [rejectId, setRejectId] = useState("");

  const approve = () => {
    setApproveId(_id);
    console.log(approveId);
    document.getElementById(`${idx}`).showModal();
  };
  const reject = () => {
    setRejectId(_id);
    document.getElementById(`${idx + 100000}`).showModal();
  };

  const handleApprove = () => {
    console.log("this id session will be approved", approveId);
    const fee = feeRef.current.value;
    console.log(fee);
    axiosSecure.patch(`/approve/${approveId}`, { fee: fee }).then((res) => {
      if (res.data.modifiedCount) {
        toast.success("approved session");
        refetch();
      }
    });
  };

  const handleReject = () => {
    console.log("this id session will be rejected", rejectId);
    const feedback = {
      sessionId: rejectId,
      reason: reasonRef.current.value,
      feedback: feedBackRef.current.value,
      tutorEmail: tutorEmail,
    };
    axiosSecure.patch(`/reject/${rejectId}`, feedback).then((res) => {
      console.log(res.data);
      if (res.data.matchedCount) {
        toast.success("rejected session");
        refetch();
      }
    });
  };
  return (
    <div className="max-w-2xl px-8 py-4 bg-slate-300 mb-6 rounded-lg shadow-md ">
      <Toaster />
      <div className="flex items-center justify-between">
        <a
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded  hover:bg-gray-500"
          tabIndex="0"
          role="button"
        >
          {status}
        </a>
      </div>
      <div className="mt-2">
        <p
          className="text-xl font-bold  hover:underline"
          tabIndex="0"
          role="link"
        >
          {title}
        </p>
        <p className="mt-2  ">{description}</p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button onClick={approve} className="btn btn-primary">
          <TiTick />
          approve
        </button>
        <button
          onClick={reject}
          className="btn bg-red-500 hover:bg-red-400 text-white border-none"
        >
          <RxCross2 />
          reject
        </button>
      </div>
      {/* modal */}
      <dialog id={`${idx}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Registration fee</h3>
          <input
            ref={feeRef}
            type="number"
            placeholder="$"
            className="input input-bordered w-full max-w-xs"
          />
          <button
            onClick={handleApprove}
            className="btn bg-green-500 text-white font-semibold border-none"
          >
            approve
          </button>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog
        id={`${idx + 100000}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Reject this session ?</h3>
          <input
            ref={reasonRef}
            type="text"
            placeholder="Rejection Reason"
            className="input input-bordered w-full max-w-xs mb-4"
          />
          <div className="flex flex-col gap-4">
            <textarea
              ref={feedBackRef}
              className="textarea textarea-primary"
              placeholder="feedback"
            ></textarea>
            <button
              onClick={handleReject}
              className="btn bg-red-500 hover:bg-red-400 text-white font-semibold border-none"
            >
              feedback and reject
            </button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      ;
    </div>
  );
};

export default DashboardSessionCard;
