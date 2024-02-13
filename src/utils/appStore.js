import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./courseSlice";

const appStore = configureStore({
  reducer: {
    course: courseSlice,
  },
});

export default appStore;
