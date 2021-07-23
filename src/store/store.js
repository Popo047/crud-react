import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./crudSlice";

const store = configureStore(
  {
    reducer: {
      crud: crudReducer,
    },
  },
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
