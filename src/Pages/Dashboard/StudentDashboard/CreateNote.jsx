import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";

const CreateNote = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // console.log(data);
    const note = {
      ...data,
      userEmail: user?.email,
    };
    const res = await axiosSecure.post("/notes", note);
    if (res.data.insertedId) {
      toast.success("created note successfully");
      reset();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-8">
      <Toaster />
      <input
        type="email"
        value={user?.email}
        className="input input-bordered mb-8 w-full max-w-sm"
        disabled
      />
      <br />
      <input
        {...register("title")}
        type="text"
        placeholder="note title"
        className="input input-bordered mb-8  w-full max-w-sm"
      />
      <textarea
        {...register("note")}
        placeholder="Take a note"
        className="textarea textarea-bordered textarea-lg w-full max-w-sm"
      ></textarea>
      <button className="btn btn-primary w-full max-w-sm">Create a note</button>
    </form>
  );
};

export default CreateNote;
