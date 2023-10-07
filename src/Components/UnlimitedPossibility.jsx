import { FaRegLightbulb } from "react-icons/Fa";
import { RiComputerLine } from "react-icons/Ri";
import { PiCertificate } from "react-icons/Pi";
const UnlimitedPossibility = () => {
  return (
    <div className="mb-12">
      <div className="mt-12 mb-5 p-5">
        <div className="text-center">
          <p className="text-sm font-semibold text-center text-gray-500">
            What We Do
          </p>
          <h1 className="text-5xl mb-2 font-extrabold  text-[#19C8D0]">
            Unlimited Possibilities
          </h1>
          <div className="w-56 h-1 m-auto bg-amber-400 "></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center text-center gap-12 w-10/12 m-auto">
        <div>
          <RiComputerLine className="text-5xl ml-52   lg:ml-32 mb-3 text-[#19C8D0]"></RiComputerLine>
          <h1 className="text-2xl font-semibold text-gray-600 mb-3">
            Online Courses
          </h1>
          <p className="text-1xl font-semibold text-gray-400">
            Choose from hundreds of free training courses, or pay to get
            certified to complete a course or specialization.
          </p>
        </div>
        <div>
          <FaRegLightbulb className="text-5xl ml-52   lg:ml-32 mb-3 text-[#FD1A5A]"></FaRegLightbulb>
          <h1 className="text-2xl font-semibold text-gray-600 mb-3">
            Our Mission
          </h1>
          <p className="text-1xl font-semibold text-gray-400">
            Developing strong vision and mission statements can help
            stakeholders in your school reach such a common understanding.
          </p>
        </div>
        <div>
          <PiCertificate className="text-5xl ml-52   lg:ml-32 mb-3 text-[#F59E0B]"></PiCertificate>
          <h1 className="text-2xl font-semibold text-gray-600 mb-3">
            Professional Certificate
          </h1>
          <p className="text-1xl font-semibold text-gray-400">
            Join the millions of students around the world who are already
            learning! Find an experienced and suitable instructor only for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnlimitedPossibility;
