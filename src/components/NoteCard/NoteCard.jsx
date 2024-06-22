import { useForm } from "react-hook-form";
import { MdDelete, MdEditDocument } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const NoteCard = ({ note, refetch }) => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // console.log(data);
    const res = await axiosSecure.patch(`/notes/${note._id}`, data);
    if (res.data.modifiedCount) {
      toast.success("Note updated");
      refetch();
    }
  };
  const handleUpdate = () => {
    document.getElementById(note._id).showModal();
  };
  const handleDelete = async () => {
    const res = await axiosSecure.delete(`/notes/${note._id}`);
    if (res.data.deletedCount) {
      toast.success("note deleted successfully");
      refetch();
    }
  };
  return (
    <div>
      <div
        key={note._id}
        className="w-full max-w-sm px-4 py-3 bg-slate-400 rounded-md shadow-md  mt-6"
      >
        <div>
          <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
            {note?.title}
          </h1>
          <p className="mt-2 text-sm text-gray-600">{note?.note}</p>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleUpdate}
            className="btn btn-primary btn-sm tooltip"
            data-tip="update note"
          >
            <MdEditDocument />
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-error btn-sm text-white tooltip"
            data-tip="delete note"
          >
            <MdDelete />
          </button>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={note._id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("title")}
              type="text"
              placeholder="note title"
              className="input input-bordered mb-8  w-full max-w-sm"
            />
            <textarea
              {...register("note")}
              placeholder="your note"
              className="textarea textarea-bordered textarea-lg w-full max-w-sm"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              update note
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NoteCard;
