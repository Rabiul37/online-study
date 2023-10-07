import { Link } from "react-router-dom";
import Navber from "../Components/Navber";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/Bs";
import Swal from "sweetalert2";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [signUpSuccess, setSignUpSuccess] = useState("");
  const [signUpError, setSignUpError] = useState(" ");
  const [showPassword, setShowPassword] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    setSignUpSuccess(" ");
    setSignUpError(" ");
    // const userName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.checkbox.checked;

    if (password.length < 6) {
      return setSignUpError("Your password must be at least six character");
    } else if (!/[A-z]/.test(password)) {
      return setSignUpError("Please use a capital latter in your password");
    } else if (!/[@#$%^&+=!*()_]/.test(password)) {
      return setSignUpError("Please use a special character in your password");
    } else if (checked == false) {
      return setSignUpError("Please agree with our term and condition");
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSignUpSuccess(
          "Well Come! Our Familly . Your Registation is successfull."
        );
        Swal.fire("Well Come!", "Your Registation is successfull.", "success");
      })
      .catch((error) => {
        console.log(error.message);
        setSignUpError("This E-mail is already used . Try with another one.");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This E-mail is already used ! Please Try with another one.",
        });
      });
  };
  return (
    <div>
      <Navber></Navber>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-[#FDB92C]">Register now!</h1>
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleForm} className="card-body">
              {signUpSuccess && (
                <p className="text-lg text-green-600 font-semibold text-center">
                  {signUpSuccess}
                </p>
              )}
              {signUpError && (
                <p className="text-lg text-red-600 font-semibold text-center">
                  {signUpError}
                </p>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User E-mail</span>
                  </label>
                  <input
                    type="text"
                    name="imgURL"
                    placeholder="Your image Link"
                    className="input input-bordered"
                  />
                </div>
              </div>
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
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />

                  <button
                    className="text-xl"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <BsEyeFill></BsEyeFill>
                    ) : (
                      <BsEyeSlashFill></BsEyeSlashFill>
                    )}
                  </button>
                </div>
              </div>
              <label>
                <input type="checkbox" name="checkbox" id="" />
                <span className="text-sm font-semibold ml-2">
                  Agree with our term and condition
                </span>
              </label>
              <div className="form-control mt-6">
                <button className="btn bg-[#FDB92C]">Registration</button>
              </div>
              <h1 className="texxt-sm font-semibold">
                Do not have account ?{" "}
                <Link to="/Login" className="underline text-[#FDB92C]">
                  Login
                </Link>{" "}
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
