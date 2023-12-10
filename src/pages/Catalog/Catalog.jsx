import Container from "../../components/Container";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import CarList from "../../components/CarList";

import { Wrapper } from "./Catalog.styled";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTotalCars } from "../../redux/cars/cars-selectors";

const Catalog = () => {
  const totalCars = useSelector(selectTotalCars);
  const [filterValue, setFilterValue] = useState(null);

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Filters setFilterValue={setFilterValue} />
          <CarList filterValue={filterValue} cars={totalCars} />
        </Wrapper>
      </Container>
    </>
  );
};

export default Catalog;
