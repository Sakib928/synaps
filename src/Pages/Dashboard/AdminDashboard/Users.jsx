import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import { useRef, useState } from "react";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const [showUsers, setShowUsers] = useState([]);
  const { refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      setShowUsers(res.data);
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
  const handleMakeStudent = (id) => {
    console.log("this id will be tutor from now on", id);
    axiosSecure.patch(`/student/${id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount) {
        toast.success("make student done");
        refetch();
      }
    });
  };

  const searchRef = useRef();

  const handleSearch = async () => {
    const search = searchRef.current.value;
    const res = await axiosSecure.get(`/searchUsers?search=${search}`);
    setShowUsers(res?.data);
  };
  return (
    <div>
      <Toaster />
      <div className="join my-12">
        <div>
          <div>
            <input
              ref={searchRef}
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
        <div onClick={handleSearch} className="indicator">
          <button className="btn join-item btn-primary">Search</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
            </tr>
          </thead>
          <tbody>
            {showUsers.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <div className="dropdown dropdown-bottom">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1 btn-primary"
                      >
                        Change
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <button onClick={() => handleMakeAdmin(user._id)}>
                            Make admin
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleMakeTutor(user._id)}>
                            Make tutor
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleMakeStudent(user._id)}>
                            Make student
                          </button>
                        </li>
                      </ul>
                    </div>
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
