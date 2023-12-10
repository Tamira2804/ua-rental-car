import Container from "../../components/Container";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import CarList from "../../components/CarList";

import { Wrapper } from "./Catalog.styled";
import { useState } from "react";

const Catalog = () => {
  const [filterValue, setFilterValue] = useState(null);

  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <Filters setFilterValue={setFilterValue} />
          <CarList filterValue={filterValue} />
        </Wrapper>
      </Container>
    </>
  );
};

export default Catalog;
