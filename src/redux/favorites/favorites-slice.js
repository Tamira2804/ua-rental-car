import { createSlice } from "@reduxjs/toolkit";

const favoritesInitialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "cars",
  initialState: favoritesInitialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const updatedFavorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
      state.favorites = updatedFavorites;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
