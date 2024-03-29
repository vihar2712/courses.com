import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addSearchText } from "../utils/courseSlice";

const SearchContainer = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(addSearchText(searchText.current.value));
  };
  return (
    <div>
      <form className="flex mx-2 sm:w-6/12 sm:mx-auto mt-4 p-2 sm:p-4 rounded-md">
        <input
          ref={searchText}
          type="text"
          placeholder="Search for courses, instructors.."
          className="border-2 border-black px-2 py-1 w-10/12"
          onChange={handleSearch}
        />
        <button
          className="bg-gray-200 px-2 py-1 mx-2 w-2/12 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchContainer;
