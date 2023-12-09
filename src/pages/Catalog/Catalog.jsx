import Container from "../../components/Container";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import CarList from "../../components/CarList";

import { Wrapper } from "./Catalog.styled";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCarsList } from "../../redux/cars/cars-selectors";

const Catalog = () => {
  const cars = useSelector(selectCarsList);
  const [filterValue, setFilterValue] = useState(null);

  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <Filters setFilterValue={setFilterValue} />
          <CarList cars={cars} filterValue={filterValue} />
        </Wrapper>
      </Container>
    </>
  );
};

export default Catalog;
