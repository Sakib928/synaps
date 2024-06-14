import { Toaster } from "react-hot-toast";
import registerAnimation from "../../assets/images/register_animation.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [passState, setPassState] = useState(false);
  const handleShowPass = () => {
    setPassState(!passState);
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
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photourl"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password </span>
                  </label>
                  <div className="flex place-items-center">
                    <input
                      type={passState ? "text" : "password"}
                      name="password"
                      className="input input-bordered w-full"
                      required
                    />

                    <span className="mb-3" onClick={handleShowPass}>
                      {passState ? (
                        <BiSolidHide className="absolute right-10 text-lg" />
                      ) : (
                        <FaEye className="absolute right-10 text-lg" />
                      )}
                    </span>
                  </div>
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
