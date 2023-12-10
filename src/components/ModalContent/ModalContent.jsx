import React from "react";
import Button from "../Button";
import {
  ImageWrapper,
  Image,
  CardBody,
  Block,
  CardTitle,
  Title,
  CardList,
  CardItem,
  Description,
  Subtitle,
  ConditionsList,
  ConditionsItem,
} from "./ModalContent.styled";
import noImages from "../../images/defaultImage.jpg";

const ModalContent = ({ car }) => {
  const {
    id,
    img,
    description,
    make,
    model,
    year,
    address,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = car;

  return (
    <>
      <ImageWrapper>
        <Image src={img === "" ? noImages : img} alt={make} />
      </ImageWrapper>
      <CardBody>
        <Block>
          <CardTitle>
            <Title>
              {make} <span>{model}</span>, {year}
            </Title>
          </CardTitle>
          <CardList>
            <CardItem>{address.split(",")[1]}</CardItem>
            <CardItem>{address.split(",")[2]}</CardItem>
            <CardItem>Id: {id}</CardItem>
            <CardItem>Year: {year}</CardItem>
            <CardItem>Type: {type}</CardItem>
          </CardList>
          <CardList>
            <CardItem>Fuel Consumption: {fuelConsumption}</CardItem>
            <CardItem>Engine Size: {engineSize}</CardItem>
          </CardList>

          <Description>{description}</Description>
        </Block>

        <Block>
          <Subtitle>Accessories and functionalities:</Subtitle>
          <CardList>
            {accessories?.map((acc, index) => (
              <CardItem key={index}>{acc}</CardItem>
            ))}
          </CardList>
          <CardList>
            {functionalities?.map((acc, index) => (
              <CardItem key={index}>{acc}</CardItem>
            ))}
          </CardList>
        </Block>

        <Block>
          <Subtitle>Rental Conditions:</Subtitle>
          <ConditionsList>
            <ConditionsItem>
              Minimum age:
              <span>{rentalConditions.split("\n")[0].split(" ")[2]}</span>
            </ConditionsItem>
            <ConditionsItem>{rentalConditions.split("\n")[1]}</ConditionsItem>
          </ConditionsList>

          <ConditionsList>
            <ConditionsItem>{rentalConditions.split("\n")[2]}</ConditionsItem>
            <ConditionsItem>
              Mileage:
              <span>
                {mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </ConditionsItem>
            <ConditionsItem>
              Price: <span>{rentalPrice.replace(/\$(\d+)/, "$1$")}</span>
            </ConditionsItem>
          </ConditionsList>
        </Block>
      </CardBody>

      <Button
        width="168px"
        text="RentalCar"
        onClick={() => (window.location.href = "tel:+380730000000")}
      />
    </>
  );
};

export default ModalContent;
