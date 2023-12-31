import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllCars,
  fetchCarsByPage,
} from "../../redux/cars/cars-operations";
import { selectIsLoading } from "../../redux/cars/cars-selectors";
import { filterCars, renderCars } from "../../helpers";

import CarItem from "../CarItem";
import Button from "../Button";
import Loader from "../Loader";
import { List } from "./CarList.styled";

const CarList = ({ cars, filterValue }) => {
  const elementsOnPage = 12;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const [loadedCars, setLoadedCars] = useState(elementsOnPage);

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (cars.length > 0 && cars.length <= loadedCars) {
      dispatch(fetchCarsByPage({ page: 1, limit: elementsOnPage }));
    }
  }, [dispatch, cars, loadedCars, elementsOnPage]);

  const filteredCars = filterCars(cars, filterValue);

  const renderedCars = renderCars(filteredCars, 0, loadedCars);

  const handleLoadMore = () => {
    const newLoadedCars = loadedCars + elementsOnPage;
    setLoadedCars(newLoadedCars > cars ? cars : newLoadedCars);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <List>
            {renderedCars.map((car) => (
              <CarItem key={car.id} car={car} />
            ))}
          </List>
          {loadedCars < cars.length && (
            <Button
              width="80px"
              onClick={handleLoadMore}
              text="Load More"
              className="linked"
            />
          )}
        </>
      )}
    </>
  );
};

export default CarList;
