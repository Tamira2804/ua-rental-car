import { useState } from "react";
import Button from "../Button";

// import {makeOptions, priceOptions} from '../../helpers';
import {
  Wrapper,
  SelectBrand,
  SelectPrice,
  MileageWrapper,
  MileageInput,
} from "./Filters.styled";

const brandList = [
  { value: "Buick", label: "Buick" },
  { value: "HUMMER", label: "HUMMER" },
  { value: "Subaru", label: "Subaru" },
  { value: "Mitsubishi", label: "Mitsubishi" },
  { value: "Nissan", label: "Nissan" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "GMC", label: "GMC" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "MINI", label: "MINI" },
  { value: "Volvo", label: "Volvo" },
  { value: "Bentley", label: "Bentley" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "Pontiac", label: "Pontiac" },
  { value: "Lamborghini", label: "Lamborghini" },
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "Chevrolet", label: "Chevrolet" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Chrysler", label: "Chrysler" },
  { value: "Kia", label: "Kia" },
  { value: "Land", label: "Land" },
];

const priceList = [];
for (let i = 30; i <= 500; i += 10) {
  priceList.push({ value: i, label: `${i}` });
}

const Filters = ({ makes, prices }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [fromMileage, setFromMileage] = useState("");
  const [toMileage, setToMileage] = useState("");

  return (
    <Wrapper>
      <SelectBrand
        options={brandList}
        placeholder={"Enter the text"}
        isClearable
        value={selectedMake}
        onChange={setSelectedMake}
      />
      <SelectPrice
        options={priceList}
        placeholder={"To $"}
        isClearable
        value={selectedPrice}
        onChange={setSelectedPrice}
      />
      <MileageWrapper>
        <MileageInput
          type="number"
          id="mileagefrom"
          min="0"
          max="99999"
          value={fromMileage}
          onChange={(e) => setFromMileage(e.target.value)}
        />
        <MileageInput
          type="number"
          id="mileageto"
          min="0"
          max="99999"
          value={toMileage}
          onChange={(e) => setToMileage(e.target.value)}
        />
      </MileageWrapper>
      <Button width="136px" text="Search" />
    </Wrapper>
  );
};

export default Filters;
