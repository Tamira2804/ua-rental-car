import Container from "../../components/Container";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import CarList from "../../components/CarList";

const Catalog = () => {
  return (
    <>
      <Header />

      <Container>
        <Filters />
        <CarList />
      </Container>
    </>
  );
};

export default Catalog;
