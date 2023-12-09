export const renderCars = (filteredCars, startIndex, endIndex) => {
  const renderedCars = filteredCars?.slice(startIndex, endIndex);

  return renderedCars;
};
