import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/cars-operations";

import CarItem from "../CarItem";
import Button from "../Button";
import { List } from "./CarList.styled";

const CarList = () => {
  const dispatch = useDispatch();

  const [loadedCars, setLoadedCars] = useState(12);
  const cars = useSelector((state) => state.cars.cars.slice(0, loadedCars));
  const totalCarsNumber = useSelector((state) => state.cars.cars.length - 1);

  const isLoading = useSelector((state) => state.cars.isLoading);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    const newLoadedCars = loadedCars + 12;
    setLoadedCars(
      newLoadedCars > totalCarsNumber ? totalCarsNumber : newLoadedCars
    );
  };

  console.log("cars in carList:", cars);
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <List>
            {cars.map((car) => (
              <CarItem key={car.id} data={car} />
            ))}
          </List>
          {loadedCars < totalCarsNumber && (
            <Button onClick={handleLoadMore} text="Load More"></Button>
          )}
        </>
      )}
    </>
  );
};

export default CarList;
