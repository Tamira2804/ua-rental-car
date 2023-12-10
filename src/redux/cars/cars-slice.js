import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCarsByPage } from "./cars-operations";

const carsInitialState = {
  currentPage: 1,
  totalCars: [],
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
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalCars(state, action) {
      state.totalCars = action.payload;
    },
    setCars(state, action) {
      state.cars = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.totalCars = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCarsByPage.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.currentPage = action.meta.arg.page;
        state.isLoading = false;
      })
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.rejected, handleRejected)
      .addCase(fetchCarsByPage.pending, handlePending)
      .addCase(fetchCarsByPage.rejected, handleRejected);
  },
});

export const { setCurrentPage, setTotalCars, setCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
