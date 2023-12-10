import Container from "../../components/Container";
import Header from "../../components/Header/Header";
import Filters from "../../components/Filters";
import CarList from "../../components/CarList";

import { Wrapper } from "./Favorite.styled";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/favorites-selectors";

const Favorite = () => {
  const favoritesCars = useSelector(selectFavorites);
  const [filterValue, setFilterValue] = useState(null);

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Filters setFilterValue={setFilterValue} />
          <CarList filterValue={filterValue} cars={favoritesCars} />
        </Wrapper>
      </Container>
    </>
  );
};

export default Favorite;
