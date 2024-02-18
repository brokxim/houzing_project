import React from "react";
import GenCarousel from "../Carousel";
import HouseCard from "../HouseCard";
import { Input, Button } from "../Generics";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <HouseCard />
    </Container>
  );
};

export default Home;
