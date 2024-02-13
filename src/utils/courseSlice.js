import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    showSearchBtn: false,
    searchText: "",
    coursesArr: null,
  },
  reducers: {
    setShowSearchBtn: (state) => {
      state.showSearchBtn = !state.showSearchBtn;
    },
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    addCourses: (state, action) => {
      state.coursesArr = action.payload;
    },
  },
});

export const { setShowSearchBtn, addSearchText, addCourses } =
  courseSlice.actions;

export default courseSlice.reducer;
