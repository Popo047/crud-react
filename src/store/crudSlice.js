import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("crud/getData", async () => {
  const response = await fetch("https://gorest.co.in/public/v1/users");
  const returnedData = await response.json();

  return returnedData;
});

const crudSlice = createSlice({
  name: "crud",
  initialState: { users: [], loading: true, posts: [] },
  reducers: {
    storeData(state, action) {
      state.users = action.payload;
      state.loading = false;
      // console.log(state.users);
    },
    loadingState(state) {
      state.loading = !state.loading;
    },
    storePosts(state, action) {
      state.posts = action.payload;
      state.showPosts = true;
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
  },
});

export const crudActions = crudSlice.actions;

export default crudSlice.reducer;
