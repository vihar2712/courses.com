import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { addCourses } from "../utils/courseSlice";

const useCourse = () => {
    const dispatch = useDispatch();
    const fetchData = async () => {
        const data = await fetch(
          "https://mocki.io/v1/cc71466f-b5b8-4306-b03f-a4d7f5d4596d"
        );
    
        const json = await data.json();
    
        dispatch(addCourses(json));
      };
    
      useEffect(() => {
        fetchData();
      }, []);
}

export default useCourse
