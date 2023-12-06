import { useState } from 'react';
// import {makeOptions, priceOptions} from '../../helpers';
import { Wrapper, SelectBrand, SelectPrice } from './Filters.styled';

const optionsBrand = [
  { value: 'Buick', label: 'Buick' },
  { value: 'HUMMER', label: 'HUMMER' },
  { value: 'Subaru', label: 'Subaru' },
  { value: 'Mitsubishi', label: 'Mitsubishi' },
  { value: 'Nissan', label: 'Nissan' },
  { value: 'Lincoln', label: 'Lincoln' },
  { value: 'GMC', label: 'GMC' },
  { value: 'Hyundai', label: 'Hyundai' },
  { value: 'MINI', label: 'MINI' },
  { value: 'Volvo', label: 'Volvo' },
  { value: 'Bentley', label: 'Bentley' },
  { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'Aston Martin', label: 'Aston Martin' },
  { value: 'Pontiac', label: 'Pontiac' },
  { value: 'Lamborghini', label: 'Lamborghini' },
  { value: 'Audi', label: 'Audi' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Chevrolet', label: 'Chevrolet' },
  { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'Chrysler', label: 'Chrysler' },
  { value: 'Kia', label: 'Kia' },
  { value: 'Land', label: 'Land' },
];

const optionsPrice = [];
for (let i = 30; i <= 500; i += 10) {
  optionsPrice.push({ value: i, label: `${i}` });
}

const Filters = ({ makes, prices }) => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  return (
    <Wrapper>
      <SelectBrand
        options={optionsBrand}
        placeholder={'Enter the text'}
        isClearable
        value={selectedMake}
        onChange={setSelectedMake}
      />
      <SelectPrice
        options={optionsPrice}
        placeholder={'To $'}
        isClearable
        value={selectedPrice}
        onChange={setSelectedPrice}
      />
    </Wrapper>
  );
};

export default Filters;
