import { useState } from "react";

import Modal from "../Modal";
import ModalContent from "../ModalContent";
import Button from "../Button";
import {
  CardThumb,
  ImageWrapper,
  Image,
  CardBody,
  CardTitle,
  Title,
  Price,
  CardList,
  CardItem,
} from "./CarItem.styled";
import FavoritesIcon from "components/FavoritesIcon";

const CarItem = ({ car }) => {
  const {
    img,
    make,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    model,
    mileage,
    accessories,
  } = car;
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <CardThumb>
        <ImageWrapper>
          <Image src={img} alt={make} />
          <FavoritesIcon car={car} />
        </ImageWrapper>
        <CardBody>
          <CardTitle>
            <Title>
              {make} {year}
            </Title>
            <Price>{rentalPrice}</Price>
          </CardTitle>
          <CardList>
            <CardItem>{address.split(",")[1]}</CardItem>
            <CardItem>{address.split(",")[2]}</CardItem>
            <CardItem>{rentalCompany}</CardItem>
            <CardItem>{type}</CardItem>
            <CardItem>{model}</CardItem>
            <CardItem>{mileage}</CardItem>
            <CardItem>{accessories[0]}</CardItem>
          </CardList>
        </CardBody>
        <Button text="Learn More" onClick={() => setIsOpenModal(true)} />
      </CardThumb>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)} isOpenModal={isOpenModal}>
          <ModalContent car={car} />
        </Modal>
      )}
    </>
  );
};

export default CarItem;
