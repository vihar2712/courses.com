import CourseCard from "./CourseCard";
import { useSelector } from "react-redux";
import SearchContainer from "./SearchContainer";
import useCourse from "../hooks/useCourse";

const Body = () => {
  let courses = useSelector((store) => store.course?.coursesArr);
  const showSearchBtn = useSelector((store) => store.course.showSearchBtn);
  const searchText = useSelector((store) => store.course?.searchText);

  useCourse();

  if (!courses) return <h1>Loading all courses....</h1>;

  // console.log(courses, searchText);

  courses = courses.filter((course) => {
    // console.log(course.name, searchText);

    return (
      course.name.toLowerCase().includes(searchText.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  // console.log(filteredCourses);

  return (
    <div>
      {showSearchBtn && <SearchContainer />}
      {courses.length > 0 ? (
        <div className="flex flex-wrap justify-center m-2 p-2">
          {courses.map((course) => (
            <CourseCard key={course.id} courseDetails={course} showProgress={false} />
          ))}
        </div>
      ) : (
        <h1 className="text-xl font-bold text-center">
          No such courses found....
        </h1>
      )}
    </div>
  );
};

export default Body;
