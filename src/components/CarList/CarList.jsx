import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllCars,
  fetchCarsByPage,
} from "../../redux/cars/cars-operations";
import { filterCars, renderCars } from "../../helpers";

import CarItem from "../CarItem";
import Button from "../Button";
import { List } from "./CarList.styled";
import {
  selectTotalCars,
  selectIsLoading,
} from "../../redux/cars/cars-selectors";

const CarList = ({ filterValue }) => {
  const elementsOnPage = 12;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const [loadedCars, setLoadedCars] = useState(elementsOnPage);
  const totalCars = useSelector(selectTotalCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (totalCars.length > 0 && totalCars.length <= loadedCars) {
      dispatch(fetchCarsByPage({ page: 1, limit: elementsOnPage }));
    }
  }, [dispatch, totalCars, loadedCars, elementsOnPage]);

  const filteredCars = filterCars(totalCars, filterValue);
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
              <CarItem key={car.id} car={car} />
            ))}
          </List>
          {loadedCars < totalCars.length && (
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

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchAllCars,
//   fetchCarsByPage,
// } from "../../redux/cars/cars-operations";
// import { filterCars, renderCars } from "../../helpers";

// import CarItem from "../CarItem";
// import Button from "../Button";
// import { List } from "./CarList.styled";
// import {
//   selectCarsState,
//   selectIsLoading,
//   selectTotalCars,
//   selectCurrentPage,
//   selectTotalPages,
// } from "../../redux/cars/cars-selectors";

// const CarList = ({ cars, filterValue }) => {
//   const elementsOnPage = 12;
//   const dispatch = useDispatch();

//   const [loadedCars, setLoadedCars] = useState();
//   const isLoading = useSelector(selectIsLoading);

//   const objectCars = useSelector(selectCarsState);
//   console.log("objectCars:", objectCars);

//   const totalCars = useSelector(selectTotalCars);
//   console.log("cars.length:", totalCars);

//   const currentPage = useSelector(selectCurrentPage);
//   console.log("currentPage:", currentPage);

//   const total = useSelector(selectTotalPages);
//   console.log("totalPages:", total);

//   useEffect(() => {
//     dispatch(fetchAllCars());
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(fetchCarsByPage({ page: 1, limit: elementsOnPage }));
//   }, [dispatch]);

//   const filteredCars = filterCars(cars, filterValue);
//   const renderedCars = renderCars(filteredCars, 0, loadedCars);

//   const handleLoadMore = () => {
//     // const newLoadedCars = loadedCars + elementsOnPage;
//     // setLoadedCars(newLoadedCars > totalCars ? totalCars : newLoadedCars);
//   };

//   return (
//     <>
//       {isLoading ? (
//         "Loading..."
//       ) : (
//         <>
//           <List>
//             {renderedCars.map((car) => (
//               <CarItem key={car.id} data={car} />
//             ))}
//           </List>
//           {loadedCars < totalCars && (
//             <Button
//               width="80px"
//               onClick={handleLoadMore}
//               text="Load More"
//               variant="linked"
//             ></Button>
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export default CarList;
