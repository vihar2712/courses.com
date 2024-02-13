import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addAllCourses, addMyCourses } from "../utils/courseSlice";
import { API_URL } from "../utils/constants";

const useCourse = () => {
  const allCourses = useSelector((store) => store.course.coursesArr);
  const myCourses = useSelector((store) => store.course.myCourses);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await fetch(API_URL);

    const json = await data.json();

    dispatch(addAllCourses(json));

    const enrolledCourses = json.filter(
      (course) => course.enrollmentStatus !== "Closed"
    );

    dispatch(addMyCourses(enrolledCourses));
  };

  useEffect(() => {
    (!allCourses || !myCourses) && fetchData();
  }, []);
};

export default useCourse;
