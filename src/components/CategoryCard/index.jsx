import React, { useRef } from "react";

import { Container, Content, Img, Blur } from "./style";
import noimg from "../../assets/img/noimg.jpeg";
import categoryImg from "../../assets/img/category.png";
const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={categoryImg || noimg} />
      <Blur />

      <Content>{name || "category name"} </Content>
    </Container>
  );
};
export default CategoryCard;
