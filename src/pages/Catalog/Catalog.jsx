import Container from "../../components/Container";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import CarList from "../../components/CarList";

import { Wrapper } from "./Catalog.styled";

const Catalog = () => {
  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <Filters />
          <CarList />
        </Wrapper>
      </Container>
    </>
  );
};

export default Catalog;
