import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const BookedSessions = () => {
  const { setCurrentUserSessions } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: bookedSessions = [] } = useQuery({
    queryKey: ["bookedSessions", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookedSessions?email=${user?.email}`);
      const userSessions = res?.data?.map((item) => item?.sessionId);
      setCurrentUserSessions(userSessions);
      return res.data;
    },
  });
  // console.log(bookedSessions);
  return (
    <div>
      {bookedSessions.map((session) => {
        return (
          <div
            key={session._id}
            className="max-w-2xl px-8 py-4 bg-slate-400 rounded-lg shadow-md mt-4"
          >
            <div className="mt-2">
              <a
                href="#"
                className="text-xl font-bold hover:underline"
                tabIndex="0"
                role="link"
              >
                {session.title}
              </a>
              <p className="mt-2">{session.description}</p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <Link to={`/bookedSession/${session._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookedSessions;
