import Lottie from "lottie-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from "../../assets/images/login_animation.json";
import { BiSolidHide } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { axiosPublic } from "../../hooks/useAxiosPublic";

const Login = () => {
  const { login, googleLogin, githubLogin } = useAuth();
  const [passState, setPassState] = useState(false);
  const handleShowPass = () => {
    setPassState(!passState);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    login(data?.email, data?.password)
      .then(() => {
        toast.success("successfully logged in");
        setTimeout(() => {
          {
            navigate(from, { replace: true });
          }
        }, 2000);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      console.log(res.user);
      const userInfo = {
        name: res.user?.displayName,
        email: res.user?.email,
        role: "student",
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      });
      toast.success("succesfully logged in");
    });
  };
  const handleGithubLogin = () => {
    githubLogin().then((res) => {
      // console.log("github check", res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        role: "student",
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      });
      toast.success("succesfully logged in");
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
                    onClick={handleGoogleLogin}
                    className="flex place-items-center gap-3 btn btn-ghost"
                  >
                    <FaGoogle></FaGoogle>Google
                  </p>
                  <p
                    onClick={handleGithubLogin}
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
