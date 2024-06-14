import Lottie from "lottie-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from "../../assets/images/login_animation.json";
import { BiSolidHide } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Login = () => {
  const { login, googleLogin, githubLogin } = useAuth();
  const [passState, setPassState] = useState(false);
  const handleShowPass = () => {
    setPassState(!passState);
  };
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    login(data.email, data.password)
      .then(() => {
        toast.success("successfully logged in");
        setTimeout(() => {
          {
            location.state ? navigate(`${location.state}`) : navigate("/");
          }
        }, 2000);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div className="hero bg-base-200">
      <Toaster />
      <div className="hero-content flex-col lg:flex-row">
        <Lottie
          animationData={loginAnimation}
          className="h-[400px] md:h-[450px] w-[400px] md:w-[450px]"
        ></Lottie>
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col ">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="font-bold text-4xl text-center pt-4">Login </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    name="email"
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
                      {...register("password")}
                      type={passState ? "text" : "password"}
                      name="password"
                      className="input input-bordered"
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
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="mt-4 flex">
                  <p
                    onClick={googleLogin}
                    className="flex place-items-center gap-3 btn btn-ghost"
                  >
                    <FaGoogle></FaGoogle>Google
                  </p>
                  <p
                    onClick={githubLogin}
                    className="flex place-items-center gap-3 btn btn-ghost"
                  >
                    <FaGithub></FaGithub>Github
                  </p>
                </div>
              </form>
              <p className="p-4 -mt-10">
                New to this site ? Register{" "}
                <Link className="text-blue-600 underline" to="/register">
                  here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
