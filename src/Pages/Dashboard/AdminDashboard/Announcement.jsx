import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Announcement = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    const res = await axiosSecure.post("/announcements", data);
    if (res.data.insertedId) {
      toast.success("announcement made");
      reset();
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="my-8">
        <Toaster />
        <input
          {...register("title")}
          type="text"
          placeholder="announcement title"
          className="input input-bordered mb-8  w-full max-w-sm"
        />
        <textarea
          {...register("announcement")}
          placeholder="message..."
          className="textarea textarea-bordered textarea-lg w-full max-w-sm"
        ></textarea>
        <button type="submit" className="btn btn-primary w-full max-w-sm">
          Create an announcement
        </button>
      </form>
    </div>
  );
};

export default Announcement;
