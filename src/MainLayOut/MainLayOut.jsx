import { Outlet } from "react-router-dom";
const MainLayOut = () => {
  return (
    <div className="w-11/12 m-auto bg-gray-100">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
