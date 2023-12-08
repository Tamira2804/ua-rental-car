import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./cars-operations";

const carsInitialState = {
  cars: [],
  isLoading: false,
  carsError: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.carsError = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.carsError = payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
