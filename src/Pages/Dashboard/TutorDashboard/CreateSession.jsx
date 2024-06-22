import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CreateSession = () => {
  const [regiStart, setRegiStart] = useState(new Date());
  const [regiEnd, setRegiEnd] = useState(new Date());
  const [classStart, setClassStart] = useState(new Date());
  const [classEnd, setClassEnd] = useState(new Date());
  // console.log(startDate);
  // console.log(new Date());
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const sessionData = {
      title: data.title,
      tutor: data.tutor,
      tutorEmail: data.tutorEmail,
      description: data.description,
      regiStart: regiStart,
      regiEnd: regiEnd,
      classStart: classStart,
      classEnd: classEnd,
      duration: data.duration,
      fee: 0,
      status: "pending",
    };
    console.log(sessionData);
    axiosSecure.post("/sessions", sessionData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("successfully added session");
        reset();
      }
    });
  };

  return (
    <div>
      <Toaster />
      <SectionTitle heading={"Create a session"}></SectionTitle>
      <section className="p-6 text-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  text-left">
            <div className="col-span-full sm:col-span-4">
              <label htmlFor="title" className="text-sm">
                Session Title
              </label>
              <input
                {...register("title")}
                required={true}
                id="title"
                type="text"
                placeholder="Session Title"
                className="w-full rounded-md input border-black border-2 input-bordered p-2"
              />
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="tutorname" className="text-sm">
                  Tutor Name
                </label>
                <input
                  {...register("tutor")}
                  required={true}
                  id="tutorname"
                  type="text"
                  value={user?.displayName}
                  readOnly
                  className="w-full rounded-md input border-2 border-black p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="tutoremail" className="text-sm">
                  Tutor Email
                </label>
                <input
                  {...register("tutorEmail")}
                  required={true}
                  id="tutoremail"
                  type="text"
                  value={user?.email}
                  readOnly
                  className="w-full rounded-md input border-2 border-black p-2"
                />
              </div>
              <div className="col-span-full">
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Session Description</span>
                  </div>
                  <textarea
                    {...register("description")}
                    className="textarea textarea-bordered h-24 input border-2 border-black"
                    placeholder="Session Description"
                  ></textarea>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="regiStart" className="text-sm">
                  Registration Start
                </label>
                <br />
                <DatePicker
                  selected={regiStart}
                  onChange={(date) => setRegiStart(date)}
                  className="input input-bordered border-2 border-black max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="regiEnd" className="text-sm">
                  Registration End
                </label>
                <br />
                <DatePicker
                  selected={regiEnd}
                  onChange={(date) => setRegiEnd(date)}
                  className="input input-bordered w-full border-2 border-black max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="classStart" className="text-sm">
                  Class Start
                </label>
                <br />
                <DatePicker
                  selected={classStart}
                  onChange={(date) => setClassStart(date)}
                  className="input input-bordered w-full border-2 border-black max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="classEnd" className="text-sm">
                  Class End
                </label>
                <br />
                <DatePicker
                  required={true}
                  selected={classEnd}
                  onChange={(date) => setClassEnd(date)}
                  className="input input-bordered w-full border-2 border-black max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="duration" className="text-sm">
                  Session Duration
                </label>
                <input
                  {...register("duration")}
                  required={true}
                  id="duration"
                  type="text"
                  className="w-full rounded-md input border-2 border-black p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="price" className="text-sm">
                  Registration Fee
                </label>
                <input
                  {...register("fee")}
                  required={true}
                  id="price"
                  type="text"
                  value="$0"
                  readOnly
                  className="w-full rounded-md input border-2 border-black p-2"
                />
              </div>
            </div>
          </fieldset>
          <button className="btn btn-primary" type="submit">
            Add Session
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreateSession;
