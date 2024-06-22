import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SessionCard = ({ session }) => {
  const [regiStatus, setRegiStatus] = useState("");
  useEffect(() => {
    const currentDate = moment().format();
    if (session.regiEnd < currentDate) {
      setRegiStatus("Finished");
    } else if (session.regiStart > currentDate) {
      setRegiStatus("Upcoming");
    } else {
      setRegiStatus("Ongoing");
    }
  }, [session.regiStart, session.regiEnd]);

  return (
    <div className="w-full max-w-sm px-4 py-3 bg-slate-300 rounded-md shadow-md hover:scale-105 duration-200 mx-auto">
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">
          {regiStatus}
        </span>
      </div>
      <div>
        <h1 className="mt-2 text-lg font-semibold">{session.title}</h1>
        <p className="mt-2 text-sm ">{session.description}</p>
        <p className="font-semibold">Registration Fee : ${session.fee}</p>
      </div>
      <div>
        <div className="flex items-end justify-center place-items-end mt-4">
          <Link to={`/session/${session._id}`}>
            <button className="btn btn-primary">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
