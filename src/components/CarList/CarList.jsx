import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/cars-operations";
import { filterCars, renderCars } from "../../helpers";

import CarItem from "../CarItem";
import Button from "../Button";
import { List } from "./CarList.styled";
import {
  selectIsLoading,
  selectTotalCars,
} from "../../redux/cars/cars-selectors";

const CarList = ({ cars, filterValue }) => {
  const elementsOnPage = 12;
  const dispatch = useDispatch();

  const [loadedCars, setLoadedCars] = useState(elementsOnPage);
  // const [renderedCars, setRenderedCars] = useState([]);
  const isLoading = useSelector(selectIsLoading);
  const totalCars = useSelector(selectTotalCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  // useEffect(() => {
  //   setRenderedCars(cars.slice(0, loadedCars));
  // }, [cars, loadedCars]);

  const filteredCars = filterCars(cars, filterValue);
  console.log(filterValue);
  const renderedCars = renderCars(filteredCars, 0, loadedCars);

  const handleLoadMore = () => {
    const newLoadedCars = loadedCars + elementsOnPage;
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
