export const selectCarsList = (state) => state.cars.cars;

export const selectIsLoading = (state) => state.cars.isLoading;

export const selectError = (state) => state.cars.carsError;

export const selectTotalCars = (state) => state.cars.cars.length;
