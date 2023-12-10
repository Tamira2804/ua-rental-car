import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65016131736d26322f5b994c.mockapi.io";

export const fetchAllCars = createAsyncThunk(
  "adverts/fetchAllCars",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCarsByPage = createAsyncThunk(
  "adverts/fetchCarsByPage",
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?`, {
        params: { page, limit },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
