import Banner from "../../components/Header/Banner";
import SessionCard from "./SessionCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../hooks/useAxiosPublic";

const Home = () => {
  const { data: sessions = [] } = useQuery({
    queryKey: ["sessions"],
    queryFn: async () => {
      const res = await axiosPublic.get("/sessions");
      return res.data;
    },
  });

  return (
    <div className="my-4">
      <Banner />
      <SectionTitle heading={"hello"} subheading={"there"}></SectionTitle>
      <div className="grid grid-cols-3 mx-auto gap-4">
        {sessions.map((session) => {
          return (
            <SessionCard key={session._id} session={session}></SessionCard>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
