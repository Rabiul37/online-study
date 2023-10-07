import PropTypes from "prop-types";
import Swal from "sweetalert2";
const CourseCard = ({ course }) => {
  const { name, image, price, long_description } = course;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-56" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-gray-600 font-bold">
            {name}
          </h2>
          <p className="text-sm text-gray-500 font-semibold text-justify">
            {long_description}
          </p>
          <div className="card-actions justify-end flex  items-center">
            <p className="text-xl font-bold text-[#FD1A5A]"> Price : {price}</p>
            <button
              onClick={() => {
                Swal.fire(
                  "Congratulations!",
                  "Your successfully buy this course",
                  "success"
                );
              }}
              className="btn bg-[#FD1A5A] font-semibold text-white"
            >
              BUY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
CourseCard.propTypes = {
  course: PropTypes.object,
};
