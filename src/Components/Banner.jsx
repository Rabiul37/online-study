import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="bg-[#00000099] h-[80vh] w-11/12 absolute">
          <div className="flex flex-col mt-40 gap-5 items-center">
            <h1
              className="text-xl lg:text-5xl font-bold text-amber-400"
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Education: The Key to Endless Possibilities.
            </h1>
            <h1
              className="text-1xl lg:text-4xl font-bold text-[#19C8D0]"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              We Build Future with Education
            </h1>
            <Link
              to="/Register"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <button className="bg-[#FD1A5A] px-6 py-2 text-xl font-semibold text-white">
                Register Now
              </button>
            </Link>
          </div>
        </div>
        <img
          className="h-[80vh] w-full"
          src="../../public/Banner1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
