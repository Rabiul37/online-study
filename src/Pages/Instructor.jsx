import { useLoaderData } from "react-router-dom";
import Navber from "../Components/Navber";
import InstructorCard from "../Components/instructorCard";

const Instructor = () => {
  const instructors = useLoaderData();

  return (
    <div>
      <Navber></Navber>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 p-5">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor.id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
