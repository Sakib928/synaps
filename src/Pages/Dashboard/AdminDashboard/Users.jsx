import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { GrUserAdmin } from "react-icons/gr";
import { FaChalkboardTeacher } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  // console.log(users);
  const handleMakeAdmin = (id) => {
    console.log("this id will be admin from now on", id);
    axiosSecure.patch(`/admin/${id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount) {
        toast.success("make admin done");
        refetch();
      }
    });
  };
  const handleMakeTutor = (id) => {
    console.log("this id will be tutor from now on", id);
    axiosSecure.patch(`/tutor/${id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount) {
        toast.success("make tutor done");
        refetch();
      }
    });
  };
  return (
    <div>
      <Toaster />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => {
              return (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-ghost tooltip"
                    data-tip="make admin"
                  >
                    <GrUserAdmin />
                  </td>
                  <td
                    onClick={() => handleMakeTutor(user._id)}
                    className="btn btn-ghost tooltip"
                    data-tip="make tutor"
                  >
                    <FaChalkboardTeacher />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
