import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  users: [],
};

const getData = createAsyncThunk("crud/getData", async () => {
  const response = await fetch("https://gorest.co.in/public/v1/users");
  const returnedData = await response.json();

  return returnedData;
});

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
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.success]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    [getData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const crudActions = crudSlice.actions;

export default crudSlice.reducer;
