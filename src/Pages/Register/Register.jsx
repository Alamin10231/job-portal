// Register.jsx
import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottie from "../../assets/Register.json";
import Authcontext from "../../Context/Authcontext";
import LoginGoogle from "../../Login/LoginGoogle";
import { useNavigate } from "react-router-dom";
// import Authcontext from "../../Context/Authcontext";

const Register = () => {
  // const { createuser } = useContext(Authcontext);
  const { register } = useContext(Authcontext);
  const navigate = useNavigate();
  const handleregister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Email & Password:", email, password);

    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!regex.test(password)) {
      alert(
        "Password must be at least 6 characters, include one uppercase letter and one number."
      );
      return;
    }

    register(email, password)
      .then((res) => {
        console.log(res.user);
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
          <Lottie className="ml-4" animationData={registerLottie} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleregister} className="card-body">
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
              <button className="btn btn-primary">Register</button>
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

export default Register;
