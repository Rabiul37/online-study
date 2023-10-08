import { useEffect, useState } from "react";
import EventsCard from "./EventsCard";

const Services = () => {
  const [AllEvents, setAllEvents] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllEvents(data));
  }, []);

  return (
    <div className="mt-12 mb-12 p-5">
      <div
        className="mb-12 text-center"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h1 className="text-5xl mb-2 font-extrabold  text-amber-500">
          Our Services
        </h1>
        <p className="text-xl font-semibold text-gray-500">
          Empower your educational events with our comprehensive service. From
          planning to execution . <br /> we ensure a seamless and impactful
          learning experience.
        </p>
        <div className="w-56 h-1 mt-5 m-auto bg-[#FD1A5A] "></div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AllEvents.map((Events) => (
          <EventsCard key={Events.id} Events={Events}></EventsCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
