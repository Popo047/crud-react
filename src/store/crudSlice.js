import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  users: [],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {},
});

export default crudSlice.reducer;
