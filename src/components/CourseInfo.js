import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CourseCard from "./CourseCard";
import useCourse from "../hooks/useCourse";
import { useState } from "react";
import Syllabus from "./Syllabus";

const CourseInfo = () => {
  const [content, setContent] = useState(null);

  const { id } = useParams();
  useCourse();
  const courses = useSelector((store) => store.course?.coursesArr);
  const course = courses?.filter((course) => course.id == id);

  if (!course) {
    return <h1 className="text-center font-bold text-xl">Loading.....</h1>;
  }

  const {
    name,
    instructor,
    description,
    duration,
    enrollmentStatus,
    schedule,
    location,
    prerequisites,
    syllabus,
  } = course[0];

  return (
    <div>
      <div className="w-9/12 flex mx-auto mt-10 ">
        <CourseCard courseDetails={course[0]} />
        <div className="ml-4 flex flex-col justify-evenly w-6/12">
          <h1 className="text-3xl font-bold mt-3">{name}</h1>
          <h1 className="text-md">
            Created by <span className="font-bold">{instructor}</span>
          </h1>
          <p className="font-semibold text-gray-600">{description}</p>
          <h1 className="text-lg">
            Duration: <span className="font-bold">{duration}</span>
          </h1>
          <h1 className="text-lg">
            Enrollment Status:{" "}
            <span className="font-bold">{enrollmentStatus}</span>
          </h1>
          <h1 className="text-lg">
            Course Schedule: <span className="font-bold">{schedule}</span>
          </h1>
          <h1 className="text-lg">
            How to learn? <span className="font-bold">{location}</span>
          </h1>
          <h1 className="text-lg">
            Pre-requisites:{" "}
            <span className="font-bold">{prerequisites.join(", ")}</span>
          </h1>
        </div>
      </div>
      <div className="w-9/12 mx-auto mt-10">
        <h1 className="text-xl mb-4"> Syllabus:</h1>
        <div className="border-2 border-gray-500">
          {syllabus.map((study, index) => (
            <Syllabus
              key={study.week}
              data={study}
              setShowContent={() => setContent(index)}
              showContent={index === content ? true : false}
              collapseItem={() => setContent(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
