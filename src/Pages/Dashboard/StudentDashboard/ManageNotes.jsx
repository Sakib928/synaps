import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import NoteCard from "../../../components/NoteCard/NoteCard";
import { Toaster } from "react-hot-toast";

const ManageNotes = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userNotes = [], refetch } = useQuery({
    queryKey: ["manageNotes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/notes?email=${user?.email}`);
      return res.data;
    },
  });
  // console.log(userNotes);
  return (
    <div>
      <Toaster />
      {userNotes?.map((note) => {
        return (
          <NoteCard key={note._id} note={note} refetch={refetch}></NoteCard>
        );
      })}
    </div>
  );
};

export default ManageNotes;
