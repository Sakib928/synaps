import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const BookedSessionDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // console.log(id);
  const { data: singleBookedSession = {} } = useQuery({
    queryKey: ["singlebookedsession"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/singleBookedSession/${id}`);
      return res.data;
    },
  });
  // console.log(singleBookedSession);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const review = {
      ...data,
      studentEmail: user?.email,
      sessionId: id,
    };
    const res = await axiosSecure.post("/reviews", review);
    if (res.data.insertedId) {
      toast.success("feedback given successfully");
      reset();
    }
  };
  return (
    <div>
      <Toaster />
      <div className="max-w-2xl px-8 py-4 bg-slate-400 rounded-lg shadow-md  mx-auto mb-8">
        <div className="mt-2">
          <a
            href="#"
            className="text-xl font-bold text-gray-700  hover:underline"
            tabIndex="0"
            role="link"
          >
            {singleBookedSession.title}
          </a>
          <p className="mt-2 text-gray-600 ">
            {singleBookedSession.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="items-center">
            <p>tutor : {singleBookedSession?.tutor}</p>
            <p>tutor email : {singleBookedSession?.tutorEmail}</p>
            <p>course duration : {singleBookedSession?.duration}</p>
            <p>class start : {singleBookedSession?.classStart?.slice(0, 10)}</p>
            <p>class end : {singleBookedSession?.classEnd?.slice(0, 10)}</p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 text-gray-800 mx-auto">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div>
              <input
                type="number"
                {...register("rating", { min: 0, max: 5 })}
                placeholder="rating (0-5)"
                className="input input-bordered"
              />
              {errors.rating && (
                <p className="text-red-500">input between 0-5</p>
              )}
            </div>
            <textarea
              {...register("review")}
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md resize-none text-gray-800 bg-gray-50"
              required
            ></textarea>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Send Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookedSessionDetails;
