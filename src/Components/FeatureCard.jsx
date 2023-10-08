import PropTypes from "prop-types";
import { BsFillSunFill } from "react-icons/Bs";
const FeatureCard = ({ afeature }) => {
  const { feature, description } = afeature;
  return (
    <>
      <div className=" flex items-center gap-5 p-2">
        <div className="text-3xl text-[#FD1A5A]">
          <BsFillSunFill></BsFillSunFill>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{feature}</h1>
          <p className="text-xl font-semibold text-gray-500">{description}</p>
        </div>
      </div>
      <div className="bg-white h-2"></div>
    </>
  );
};

export default FeatureCard;
FeatureCard.propTypes = {
  afeature: PropTypes.object,
};
