import { Button, Title, Text, Wrapper } from "./Home.styled";

const Home = () => {
  return (
    <Wrapper>
      <Title>Discover the world on wheels with our car rental service</Title>
      <Text>
        "Ready to start your journeys without limits? Our car rental service
        offers you the keys to freedom on wheels! Choose from a wide range of
        cars, from elegant sedans to powerful SUVs, to make each of your trips
        even more vibrant. Convenient online booking, fair prices, and the best
        service—all await you with our car rental service. Embark on your own
        adventure with comfort and confidence!"{" "}
      </Text>
      <Button to={"/catalog"}>Go to catalog</Button>
    </Wrapper>
  );
};

export default Home;
