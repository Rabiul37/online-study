import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Components/Navber";
import { FcGoogle } from "react-icons/Fc";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/Bs";
import Swal from "sweetalert2";
const Login = () => {
  const { googleLogIn, logIn } = useContext(AuthContext);
  const [loginSuccess, setLoginSuccess] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLoginForm = (e) => {
    setLoginError("");
    setLoginSuccess("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        setLoginSuccess("successful login");
        navigate(location?.state ? location.state : "/");
        Swal.fire("Good job!", "Login is successfull!", "success");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError("Wrong E-mail or Password");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong E-mail or Password ! ",
        });
      });
  };

  const handleGoogle = () => {
    googleLogIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Navber></Navber>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-4xl font-bold text-[#FD1A5A]">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <h1 onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <BsEyeFill></BsEyeFill>
                    ) : (
                      <BsEyeSlashFill></BsEyeSlashFill>
                    )}
                  </h1>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <button className="btn bg-[#FD1A5A] text-white">Login</button>
              </div>
              <button
                onClick={handleGoogle}
                className="btn btn-outline text-[#FD1A5A] font-semibold"
              >
                <FcGoogle className="text-xl"></FcGoogle>
                Login with Google
              </button>
              <hr className=" bg-gray-500" />
              <h1 className="texxt-sm font-semibold">
                Do not have account ?{" "}
                <Link to="/Register" className="underline text-[#FD1A5A]">
                  Register
                </Link>{" "}
              </h1>
              {loginSuccess && (
                <p className="text-1xl font-semibold text-green-600">
                  {loginSuccess}
                </p>
              )}
              {loginError && (
                <p className="text-1xl font-semibold text-red-600">
                  {loginError}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
