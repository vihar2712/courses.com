import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    showSearchBtn: false,
    searchText: "",
    coursesArr: null,
    myCourses: [],
  },
  reducers: {
    setShowSearchBtn: (state) => {
      state.showSearchBtn = !state.showSearchBtn;
    },
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    addAllCourses: (state, action) => {
      state.coursesArr = action.payload;
    },
    addMyCourses: (state, action) => {
      state.myCourses = (action.payload);
    },
  },
});

export const { setShowSearchBtn, addSearchText, addAllCourses ,addMyCourses} =
  courseSlice.actions;

export default courseSlice.reducer;
