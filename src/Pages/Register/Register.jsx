import toast, { Toaster } from "react-hot-toast";
import registerAnimation from "../../assets/images/register_animation.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser } = useAuth();
  const [passState, setPassState] = useState(false);
  const handleShowPass = () => {
    setPassState(!passState);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(() => {
        toast.success("Successfully registered");
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <Toaster />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie
          animationData={registerAnimation}
          className="h-[400px] md:h-[450px] w-[400px] md:w-[450px]"
        ></Lottie>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="font-bold text-4xl text-center pt-4">Register</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-600">This field is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-600">This field is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password </span>
                  </label>
                  <div className="flex place-items-center">
                    <input
                      {...register("password", { required: true })}
                      type={passState ? "text" : "password"}
                      name="password"
                      className="input input-bordered w-full"
                      required
                    />
                    {errors.password && (
                      <p className="text-red-600">This field is required</p>
                    )}
                    <span className="mb-3" onClick={handleShowPass}>
                      {passState ? (
                        <BiSolidHide className="absolute right-10 text-lg" />
                      ) : (
                        <FaEye className="absolute right-10 text-lg" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="form-control mt-4">
                  <select
                    {...register("role", { required: true })}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      Select your role
                    </option>
                    <option>Student</option>
                    <option>Tutor</option>
                    <option>Admin</option>
                  </select>
                  {errors.role && (
                    <p className="text-red-600">This field is required</p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
              <p className="p-4">
                Already Have an account ? Login{" "}
                <Link className="text-blue-600 underline" to="/login">
                  Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
