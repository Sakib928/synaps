// import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const CreateSession = () => {
  // const [startDate, setStartDate] = useState(new Date());
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
                className="w-full rounded-md input border-black input-bordered p-2"
              />
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Tutor Name
                </label>
                <input
                  id="lastname"
                  type="text"
                  value={user?.displayName}
                  readOnly
                  className="w-full rounded-md input border-black p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Price
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Price"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>
              <div className="col-span-full">
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Recipe Details</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24 bg-[#121212]"
                    placeholder="Recipe Details"
                  ></textarea>
                </label>
              </div>
            </div>
            <div className="form-control w-full my-6 col-span-2">
              <input type="file" className="file-input w-full bg-[#121212]" />
            </div>
          </fieldset>
          <button className="btn bg-[#121212]" type="submit">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreateSession;
