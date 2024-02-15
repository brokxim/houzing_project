import React from "react";
import { Container } from "./style";
export const Button = ({ children, type, width, height, onClick }) => {
  return (
    <Container width={width} height={height} type={type} onClick={onClick}>
      {children || "Generic Button"}
    </Container>
  );
};
export default Button;
