import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateSession = () => {
  const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate);
  // console.log(new Date());
  const { user } = useAuth();
  return (
    <div>
      <Toaster />
      <SectionTitle heading={"Create a session"}></SectionTitle>
      <section className="p-6 text-center">
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  text-left">
            <div className="col-span-full sm:col-span-4">
              <label htmlFor="email" className="text-sm">
                Session Title
              </label>
              <input
                id="email"
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
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="input input-bordered border-2 border-black max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="regiEnd" className="text-sm">
                  Registration End
                </label>
                <br />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="input input-bordered w-full border-2 border-black max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="classStart" className="text-sm">
                  Class Start
                </label>
                <br />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="input input-bordered w-full border-2 border-black max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="classEnd" className="text-sm">
                  Tutor Email
                </label>
                <br />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="input input-bordered w-full border-2 border-black max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="duration" className="text-sm">
                  Session Duration
                </label>
                <input
                  id="duration"
                  type="text"
                  className="w-full rounded-md input border-2 border-black p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="tutoremail" className="text-sm">
                  Tutor Email
                </label>
                <input
                  id="tutoremail"
                  type="text"
                  value={user?.email}
                  readOnly
                  className="w-full rounded-md input border-2 border-black p-2"
                />
              </div>
            </div>
          </fieldset>
          <button className="btn btn-primary" type="submit">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreateSession;
