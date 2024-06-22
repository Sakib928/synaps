import Banner from "../../components/Header/Banner";
import SessionCard from "./SessionCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import { useState } from "react";
import Tutors from "./Tutors";

const Home = () => {
  const [homeSessions, setHomeSessions] = useState([]);
  const [seeMoreStatus, setSeeMoreStatus] = useState(false);
  const { data: sessions = [] } = useQuery({
    queryKey: ["sessions"],
    queryFn: async () => {
      const res = await axiosPublic.get("/homeSessions");
      setHomeSessions(res.data.slice(0, 6));
      return res.data;
    },
  });
  // console.log(homeSessions);

  const handleSeeMore = () => {
    setHomeSessions(sessions);
    setSeeMoreStatus(true);
  };

  const handleSeeLess = () => {
    setHomeSessions(sessions.slice(0, 6));
    setSeeMoreStatus(false);
  };

  return (
    <div className="my-4">
      <Banner />
      <SectionTitle
        heading={"Our Featured Sessions"}
        subheading={
          "Choose your favourite study session from variety of courses"
        }
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
        {homeSessions.map((session) => {
          return (
            <SessionCard key={session._id} session={session}></SessionCard>
          );
        })}
      </div>
      <div className="text-center">
        {!seeMoreStatus && (
          <button onClick={handleSeeMore} className="btn btn-outline mt-6">
            See More
          </button>
        )}
        {seeMoreStatus && (
          <button onClick={handleSeeLess} className="btn btn-outline mt-6">
            See Less
          </button>
        )}
      </div>
      <SectionTitle heading={"Meet our tutors"}></SectionTitle>
      <Tutors />
    </div>
  );
};

export default Home;
