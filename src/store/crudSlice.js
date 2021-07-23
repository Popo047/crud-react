import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("crud/getData", async () => {
  const response = await fetch("https://gorest.co.in/public/v1/users");
  const returnedData = await response.json();
  return returnedData;
});

export const getPostData = createAsyncThunk("crud/getPostData", async () => {
  const response = await fetch("https://gorest.co.in/public/v1/posts");
  const returnedData = await response.json();
  return returnedData;
});

const crudSlice = createSlice({
  name: "crud",
  initialState: { users: [], loading: true, posts: [] },
  reducers: {
    loadingState(state) {
      state.loading = !state.loading;
    },
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    [getData.rejected]: (state) => {
      state.loading = true;
    },
    [getPostData.pending]: (state) => {
      state.loading = true;
    },
    [getPostData.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
  },
});

export const crudActions = crudSlice.actions;

export default crudSlice.reducer;
