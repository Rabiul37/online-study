import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const PopularCourses = () => {
  const [AllCourse, setAllCourse] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);
  return (
    <div>
      <div className="h-24 bg-white"></div>
      <div className="mt-12 p-5">
        <div
          className="mb-12 text-center"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h1 className="text-5xl mb-2 font-extrabold  text-amber-500">
            Our Popular Courses
          </h1>
          <p className="text-xl font-semibold text-gray-500">
            Experience the power of our popular educational service. Unlock new
            knowledge and skills with ease, <br /> making learning enjoyable and
            effective.
          </p>
          <div className="w-56 h-1 mt-5 m-auto bg-[#FD1A5A] "></div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AllCourse.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </div>
      </div>
      <div className="h-24 bg-white"></div>
    </div>
  );
};

export default PopularCourses;
