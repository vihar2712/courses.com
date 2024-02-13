import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "./CourseCard";
import useCourse from "../hooks/useCourse";

const Dashboard = () => {
  useCourse();
  const myCourses = useSelector((store) => store.course.myCourses);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-2 sm:mt-6 sm:mb-10">
        My Courses
      </h1>
      {myCourses.length !== 0 ? (
        <div className="flex overflow-x-scroll overflow-y-hidden sm:mx-10">
          <div className="flex">
            {myCourses.map((course) => (
              <CourseCard
                key={course.id}
                courseDetails={course}
                showProgress={true}
              />
            ))}
          </div>
        </div>
      ) : (
        <h1>No courses enrolled...</h1>
      )}
    </div>
  );
};

export default Dashboard;
