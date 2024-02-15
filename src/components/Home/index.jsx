import React from "react";
import { Input, Button } from "../Generics";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      Home
      <Input width={100} placeholder={"test"} />
      <Button width={220}>test</Button>
    </Container>
  );
};

export default Home;
