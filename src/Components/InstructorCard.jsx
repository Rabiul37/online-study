import PropTypes from "prop-types";

const InstructorCard = ({ instructor }) => {
  const { img, name, qualification, description } = instructor;
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div>
          <figure>
            <img className="w-56" src={img} alt="Movie" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold text-[#19C8D0]">
            {name}
          </h2>
          <p className="text-xl font-bold text-gray-600">{qualification}</p>
          <p className="font-semibold text-gray-400">{description}</p>
          <div className="card-actions w-full">
            <button className="w-full btn bg-[#FD1A5A] text-white font-semibold">
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
InstructorCard.propTypes = {
  instructor: PropTypes.object,
};
