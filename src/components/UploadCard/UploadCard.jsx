import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const UploadCard = ({ session }) => {
  const { user } = useAuth();
  const { title, _id } = session;
  const handleUpload = () => {
    console.log("upload for session", _id);
    document.getElementById("my_modal_5").showModal();
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const material = {
      title: data.title,
      sessionId: _id,
      tutorEmail: user.email,
    };
    console.log(material);
  };
  return (
    <div className="relative flex flex-col max-w-2xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x bg-slate-400 dark:divide-gray-300 rounded-xl">
      <div className="p-3 space-y-1">
        <h3 className="text-3xl font-semibold">Course Name : {title}</h3>
      </div>
      <div className="flex items-center gap-3 p-3">
        <div className="space-y-1">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleUpload}
              className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-violet-600 text-gray-50"
            >
              upload materials
            </button>
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box space-y-4">
          <h3 className="font-bold text-lg">
            Upload materials for this session
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="label">
              <span className="label-text">Title of the material</span>
            </div>
            <input
              {...register("title")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs mb-4"
            />
            <div className="label">
              <span className="label-text">Study Session Id</span>
            </div>
            <input
              type="text"
              placeholder="image"
              value={`${_id}`}
              readOnly
              className="input w-full max-w-xs input-bordered mb-4"
            />
            <div className="label">
              <span className="label-text">Tutor Email</span>
            </div>
            <input
              type="text"
              placeholder="image"
              value={`${user.email}`}
              className="input w-full max-w-xs input-bordered mb-4"
            />
            <div className="label">
              <span className="label-text">Choose Image File</span>
            </div>
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-primary w-full max-w-xs mb-4"
            />
            <div className="label">
              <span className="label-text">Drive Link of the material</span>
            </div>
            <input
              {...register("driveLink")}
              type="text"
              placeholder="image"
              className="input w-full max-w-xs input-bordered mb-4"
            />
            <br />
            <button
              type="submit"
              className="btn btn-primary mt-6 w-full max-w-xs"
            >
              upload
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

export default UploadCard;
