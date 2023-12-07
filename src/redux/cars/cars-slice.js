import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./cars-operations";

const carsInitialSate = {
  currentPage: 1,
  totalPages: 1,
  data: [],
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
  initialState: carsInitialSate,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.data = action.payload;
        state.currentPage = action.meta.arg.page;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const allCars = (state) => state.cars.data;
export const { setCurrentPage, setTotalPages } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
