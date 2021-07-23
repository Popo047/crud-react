import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  users: [],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    loaded(state) {
      state.loading = !state.loading;
    },
    storeData(state, action) {
      state.users = action.payload;
      state.loading = false;
    },
  },
  extraReducers: {},
});

export const crudActions = crudSlice.actions;

export default crudSlice.reducer;
