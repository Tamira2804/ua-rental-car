import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://https://65016131736d26322f5b994c.mockapi.io";

export const fetchCars = createAsyncThunk(
  "adverts/fetchAll",
  async ({ page = 1, search = "" }, thunkAPI) => {
    try {
      const response = await axios.get("/news?", {
        params: {
          page,
          search,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
