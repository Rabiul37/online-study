import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
// import logo1 from "../../public/logo1";
const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navber = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructor">Instructor</NavLink>
      </li>
      <li>
        <NavLink to="/feature">Features</NavLink>
      </li>
      <li>
        <NavLink to="/Login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navber}
            </ul>
          </div>
          <img
            className="w-32 ml-40 lg:ml-0"
            src="../../public/logo1.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navber}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
          <h1 className="text-sm font-semibold">{user?.displayName}</h1>
          <div>
            {user ? (
              <a onClick={handleLogOut} className="btn">
                Sign Out
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
