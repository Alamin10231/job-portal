import Lottie from "lottie-react";
import React, { useContext } from "react";
import loginlottie from "../assets/Login.json";
import Authcontext from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginGoogle from "./LoginGoogle";

const Login = () => {
  const { signinUser } = useContext(Authcontext);
  const navigate = useNavigate();
  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Email & Password:", email, password);

    signinUser(email, password)
      .then((res) => {
        console.log(res.user.email);

        fetch("http://localhost:5000", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.error("Error:", error));
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie className="ml-4 w-96" animationData={loginlottie} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Login now!</h1>
          <form onSubmit={handlelogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div>
            <LoginGoogle></LoginGoogle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
