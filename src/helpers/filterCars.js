export const filterCars = (cars, filterValue) => {
  if (!filterValue) return cars;

  const { make, price, fromMileage, toMileage } = filterValue;
  const filteredCars = cars.filter((car) => {
    const matchMake =
      !make || car.make.toLowerCase() === make.value.toLowerCase();
    const matchPrice =
      !price || parseInt(car.rentalPrice.slice(1)) === parseInt(price.value);
    const matchMileage =
      !fromMileage ||
      !toMileage ||
      (car.mileage >= parseInt(fromMileage) &&
        car.mileage <= parseInt(toMileage));

    return matchMake && matchPrice && matchMileage;
  });
  return filteredCars;
};
