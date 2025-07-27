import { createSlice } from "@reduxjs/toolkit";

const userDetails = createSlice({
  name: "useDetails",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  reducers: {},
});

export default userDetails.reducer;
