import { useEffect } from "react";
import Banner from "../../components/Header/Banner";
import axios from "axios";
import SessionCard from "./SessionCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { sessions, setSessions } = useAuth();
  useEffect(() => {
    axios.get("sessions.json").then((res) => {
      setSessions(res.data);
      // console.log(res.data);
    });
  }, [setSessions]);

  return (
    <div className="my-4">
      <Banner />
      <SectionTitle heading={"hello"} subheading={"there"}></SectionTitle>
      <div className="grid grid-cols-3 mx-auto gap-4">
        {sessions.map((session) => {
          return <SessionCard key={session.id} session={session}></SessionCard>;
        })}
      </div>
    </div>
  );
};

export default Home;
