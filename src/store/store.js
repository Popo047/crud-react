import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./crudSlice";

const store = configureStore({
  reducer: {
    crud: crudReducer,
  },
});
