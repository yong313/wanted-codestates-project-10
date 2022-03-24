import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("search/getData", async (userValue) => {
  const response = await axios.get(
    `https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${userValue}`
  );
  return response.data;
});

const search = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default search.reducer;
