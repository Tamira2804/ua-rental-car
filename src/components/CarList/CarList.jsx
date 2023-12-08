import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/cars-operations";

import CarItem from "../CarItem";
import Button from "../Button";
import { List } from "./CarList.styled";

const CarList = () => {
  const dispatch = useDispatch();

  const [loadedCars, setLoadedCars] = useState(12);
  const [renderedCars, setRenderedCars] = useState([]);
  const cars = useSelector((state) => state.cars.cars);
  const isLoading = useSelector((state) => state.cars.isLoading);
  const totalCars = useSelector((state) => state.cars.cars.length);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    setRenderedCars(cars.slice(0, loadedCars));
  }, [cars, loadedCars]);

  const handleLoadMore = () => {
    const newLoadedCars = loadedCars + 12;
    setLoadedCars(newLoadedCars > totalCars ? totalCars : newLoadedCars);
  };

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <List>
            {renderedCars.map((car) => (
              <CarItem key={car.id} data={car} />
            ))}
          </List>
          {loadedCars < totalCars && (
            <Button
              width="80px"
              onClick={handleLoadMore}
              text="Load More"
              variant="linked"
            ></Button>
          )}
        </>
      )}
    </>
  );
};

export default CarList;
