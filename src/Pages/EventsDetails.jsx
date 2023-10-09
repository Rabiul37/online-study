import { useLoaderData, useParams } from "react-router-dom";
import Navber from "../Components/Navber";
import Swal from "sweetalert2";
const EventsDetails = () => {
  const { id } = useParams();
  const allevents = useLoaderData();
  const eventsSigleData = allevents.find((events) => events.id == id);

  const { image, name, description, price } = eventsSigleData;
  return (
    <div className="mt-8">
      <Navber></Navber>
      <div className="mt-5 grid grid-cols-2 gap-5">
        <div className="">
          <img className="w-full h-[80vh]" src={image} alt="" />
        </div>
        <div className="">
          <h1 className="text-3xl font-semibold text-gray-700 mb-4">{name}</h1>
          <p className="text-1xl font-semibold text-gray-500">{description}</p>
          <button
            onClick={() => {
              Swal.fire(
                "Congratulations!",
                "Your successfully buy this course",
                "success"
              );
            }}
            className="bg-[#FD1A5A] text-xl font-semibold text-white w-full mt-8 py-1 rounded-2xl"
          >
            Buy Now . only {price} $
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;
