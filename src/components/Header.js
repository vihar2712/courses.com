import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addSearchText, setShowSearchBtn } from "../utils/courseSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const showSearchBtn = useSelector((store) => store.course.showSearchBtn);
  const myCourses = useSelector((store) => store.course.myCourses);
  const handleSearchBtn = () => {
    dispatch(setShowSearchBtn());
    dispatch(addSearchText(""));
  };
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-gray-300 border-2 border-b-gray-400">
      <Link to="/">
        <img src={LOGO_URL} alt="logo" className="w-28 p-4 rounded-full" />
      </Link>
      <ul className="flex items-center text-sm sm:text-lg px-4 ">
        <Link to="/">
          <li className="m-2 hover:bg-gray-400 sm:px-2 sm:py-1 rounded-md">
            Home
          </li>
        </Link>
        <button
          className={
            "m-2 hover:bg-gray-400 sm:px-2 sm:py-1 rounded-md " +
            (showSearchBtn ? "bg-gray-400" : " ")
          }
          onClick={handleSearchBtn}
        >
          {showSearchBtn ? "Search ❌" : "Search"}
        </button>
        <Link to="/user-dashboard">
          <li className="m-2 hover:bg-gray-400 sm:px-2 sm:py-1 rounded-md">
            My Courses ({myCourses.length})
          </li>
        </Link>
        <Link to="/about-us">
          <li className="m-2 hover:bg-gray-400 sm:px-2 sm:py-1 rounded-md">
            About Me
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
