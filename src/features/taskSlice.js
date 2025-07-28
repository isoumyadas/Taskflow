import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskData: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;

// If you want to add something later.
