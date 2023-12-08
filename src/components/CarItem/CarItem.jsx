// import Image from "../../images/hero.jpg";
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

const CarItem = ({ data }) => {
  return (
    <CardThumb>
      <ImageWrapper>
        <Image src={data.img} alt={data.make} />
      </ImageWrapper>
      <CardBody>
        <CardTitle>
          <Title>
            {data.make} {data.year}
          </Title>
          <Price>{data.rentalPrice}</Price>
        </CardTitle>
        <CardList>
          <CardItem>{data.address.split(",")[1]}</CardItem>
          <CardItem>{data.address.split(",")[2]}</CardItem>
          <CardItem>{data.rentalCompany}</CardItem>
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
