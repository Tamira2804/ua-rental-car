import Image from "../../images/hero.jpg";
import Button from "../Button";
import {
  CardThumb,
  CardImage,
  CardBody,
  CardTitle,
  CardList,
  CardItem,
} from "./CarItem.styled";

const CarItem = () => {
  return (
    <CardThumb>
      <CardImage src={Image} alt="" />
      <CardBody>
        <CardTitle>Make + Year $price</CardTitle>
        <CardList>
          <CardItem>adress City</CardItem>
          <CardItem>adress Country</CardItem>
          <CardItem>rentalCompany</CardItem>
          <CardItem>? premium</CardItem>
          <CardItem>type</CardItem>
          <CardItem>module</CardItem>
          <CardItem>mileage</CardItem>
          <CardItem>accessories[0]</CardItem>
        </CardList>
      </CardBody>
      <Button text="Learn More" />
    </CardThumb>
  );
};

export default CarItem;
