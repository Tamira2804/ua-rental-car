// import Image from "../../images/hero.jpg";
import Button from "../Button";
import {
  CardThumb,
  CardImage,
  CardBody,
  CardTitle,
  CardList,
  CardItem,
} from "./CarItem.styled";

const CarItem = ({ data }) => {
  return (
    <CardThumb>
      <CardImage src={data.img} alt={data.make} />
      <CardBody>
        <CardTitle>{`id: ${data.id} => ${data.make} ${data.year}`}</CardTitle>
        <CardList>
          <CardItem>{data.address.split(",")[1]}</CardItem>
          <CardItem>{data.address.split(",")[2]}</CardItem>
          <CardItem>{data.rentalCompany}</CardItem>
          <CardItem>? premium</CardItem>
          <CardItem>{data.type}</CardItem>
          <CardItem>{data.model}</CardItem>
          <CardItem>{data.mileage}</CardItem>
          <CardItem>{data.accessories[0]}</CardItem>
        </CardList>
      </CardBody>
      <Button text="Learn More" />
    </CardThumb>
  );
};

export default CarItem;
