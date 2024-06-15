import { Link } from "react-router-dom";

const SessionCard = ({ session }) => {
  // console.log(session);
  return (
    <div className="w-full max-w-sm px-4 py-3 bg-slate-300 rounded-md shadow-md hover:scale-105 duration-200 mx-auto">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light">Courses and MOOCs</span>
        <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">
          psychology
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold">
          AP® Psychology - Course 5: Health and Behavior
        </h1>
        <p className="mt-2 text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
          eligendi similique exercitationem optio libero vitae accusamus
          cupiditate laborum eos.
        </p>
      </div>

      <div>
        <div className="flex items-center mt-2 ">
          <span>Visit on:</span>
          <a
            className="mx-2  cursor-pointer  hover:underline"
            tabIndex="0"
            role="link"
          >
            edx.org
          </a>
          <span>or</span>
          <a
            className="mx-2  cursor-pointer  hover:underline"
            tabIndex="0"
            role="link"
          >
            classNamecentral.com
          </a>
        </div>

        <div className="flex items-center justify-center mt-4">
          <Link to={`/session/${session.id}`}>
            <button className="btn btn-primary">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
