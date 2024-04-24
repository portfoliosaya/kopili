// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
