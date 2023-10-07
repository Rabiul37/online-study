import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const EventsCard = ({ Events }) => {
  const { id, name, image, price, title } = Events;
  return (
    <>
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
              {title}
            </p>
            <div className="card-actions justify-end flex  items-center">
              <p className="text-xl font-bold text-[#FD1A5A]">
                {" "}
                Price : {price}
              </p>
              <Link to={`/details/${id}`}>
                <button className="btn bg-[#FD1A5A] font-semibold text-white">
                  Show Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsCard;
EventsCard.propTypes = {
  Events: PropTypes.object,
};
