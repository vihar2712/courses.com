import { COURSE_IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const CourseCard = ({ courseDetails, showProgress }) => {
  const {
    name,
    instructor,
    duration,
    id,
    enrollmentStatus,
    progress,
    thumbnail,
  } = courseDetails;
  return (
    <div className="border-2 border-black m-2 w-60 sm:w-96  bg-gray-200 hover:bg-gray-300 hover:cursor-pointer rounded-md">
      <Link to={"/courses/" + id}>
        <div className="relative">
          <img
            src={thumbnail || COURSE_IMAGE_URL}
            alt="course-logo"
            className="w-full h-52"
          />
          <div className="p-2">
            <h1 className="text-xl font-bold mt-3 ">
              💻: <span className="hover:underline">{name}</span>
            </h1>
            <h1 className="text-lg"> 👨‍🏫: {instructor}</h1>
            <h1 className="text-lg">🕜: {duration}</h1>
            <button className="bg-black text-white rounded-sm py-1 px-2 absolute top-0 left-0">
              {enrollmentStatus === "Closed"
                ? "Not Enrolled"
                : enrollmentStatus === "Open"
                ? "Enrolled"
                : "In Progress"}
            </button>
            {showProgress && progress && (
              <>
                <label htmlFor="file" className="font-bold">
                  Your Progress:{" "}
                </label>
                <progress id="file" value={progress} max="100"></progress>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
