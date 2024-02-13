import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addSearchText, setShowSearchBtn } from "../utils/courseSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showSearchBtn = useSelector((store) => store.course.showSearchBtn);
  const handleSearchBtn = () => {
    dispatch(setShowSearchBtn());
    dispatch(addSearchText(""));
  };
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-gray-300 border-2 border-b-gray-400">
      <img
        src="https://images-platform.99static.com//KlBLMX8dQrcq6hZGnxf5HSnG29I=/8x543:525x1060/fit-in/500x500/99designs-contests-attachments/123/123360/attachment_123360235"
        alt="logo"
        className="w-28 p-4 rounded-full"
      />
      <ul className="flex items-center text-sm sm:text-lg px-4 ">
        <Link to="/">
          <li className="m-2 hover:bg-gray-400 sm:px-2 sm:py-1 rounded-md">
            Home
          </li>
        </Link>
        <button
          className={"m-2 hover:bg-gray-400 sm:px-2 sm:py-1 rounded-md " + (showSearchBtn? "bg-gray-400":" ")}
          onClick={handleSearchBtn}
        >
          {showSearchBtn ?"Search ❌":"Search"}
        </button>
        <Link to="/">
          <li className="m-2 hover:bg-gray-400 sm:px-2 sm:py-1 rounded-md">
            My Courses
          </li>
        </Link>
        <Link to="/about-us">
          <li className="m-2 hover:bg-gray-400 sm:px-2 sm:py-1 rounded-md">
            About Us
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
