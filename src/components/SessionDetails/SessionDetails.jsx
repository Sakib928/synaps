import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import toast from "react-hot-toast";

const SessionDetails = () => {
  const { payment, setPayment } = useAuth();
  const { user } = useAuth();
  const userRole = useRole();
  const navigate = useNavigate();
  const id = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: session = {} } = useQuery({
    queryKey: ["sessionDetails", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/singleSession/${id.id}`);
      setPayment(res?.data?.fee);
      return res.data;
    },
  });
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${session?._id}`);
      return res.data;
    },
  });
  // console.log(reviews);
  // console.log(session._id);
  const handleBookNow = async () => {
    if (payment === 0) {
      const payment = {
        studentEmail: user?.email,
        sessionId: id.id,
        title: session?.title,
        tutor: session?.tutor,
        tutorEmail: session?.tutorEmail,
        description: session?.description,
        regiStart: session?.regiStart,
        regiEnd: session?.regiEnd,
        classStart: session?.classStart,
        classEnd: session?.classEnd,
        duration: session?.duration,
      };
      const res = await axiosSecure.post("/bookedSessions", payment);
      console.log("payment saved", res.data);
      if (res.data?.insertedId) {
        toast.success("payment successful");
      }
    } else {
      navigate(`/payment/${session?._id}`);
    }
  };

  return (
    <div>
      <div className="max-w-4xl p-6 overflow-hidden rounded-lg shadow bg-slate-400 dark:text-gray-800 mx-auto">
        <article className="">
          <div>
            <h2 className="text-xl font-bold">{session?.title}</h2>
            <p className="mt-4 dark:text-gray-600 max-w-lg">
              {session?.description}
            </p>
          </div>
          <div className="items-center mt-8 space-x-4">
            <div>
              <h3 className="text-sm font-medium">
                Tutor Name : {session?.tutor}
              </h3>
              <h3 className="text-sm font-medium">
                Registration Start : {session?.regiStart?.split("T")[0]}
              </h3>
              <h3 className="text-sm font-medium">
                Registration End : {session?.regiEnd?.split("T")[0]}
              </h3>
              <h3 className="text-sm font-medium">
                Class Start : {session?.classStart?.split("T")[0]}
              </h3>
              <h3 className="text-sm font-medium">
                Class End : {session?.classEnd?.split("T")[0]}
              </h3>
              <h3 className="text-sm font-medium">
                Session Duration {session?.duration}
              </h3>
              <h3 className="text-sm font-medium">
                Registration fee : ${session?.fee}
              </h3>
            </div>
          </div>

          <button
            onClick={handleBookNow}
            className="btn btn-primary mt-4 "
            disabled={userRole !== "student"}
          >
            Book Now
          </button>
        </article>
      </div>

      {/* reviews section */}
      <section className="my-8">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
          <h1 className="text-4xl font-semibold leading-none text-center">
            What our students are saying about us
          </h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
          {reviews?.map((review) => {
            return (
              <div
                key={review._id}
                className="flex flex-col items-center mx-12 lg:mx-0"
              >
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="px-6 py-1 text-lg italic">{review.review}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
                <p>{review.studentEmail}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SessionDetails;
