import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_API_KEY;

// 리덕스 정크
export const getData = createAsyncThunk("search/getData", async (userValue) => {
  const response = await axios.get(`${url}=${userValue}`);
  return response.data;
});

// 이니셜스테이트랑, 리듀를 합친 것
const search = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    change: (state, action) => {
      console.log("디스패치 리듀서 시작");
      state.loading = action.payload;
    },
  },

  // 비동기 통신용 리듀서
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.loading = true;
      state.data = action.payload;
    },
  },
});

export const { change } = search.actions;

export default search.reducer;
