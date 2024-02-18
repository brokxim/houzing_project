import React, { useRef } from "react";
import { Carousel } from "antd";
import { Arrow, Blur, Container, Content, Img, Wrapper } from "./style";
import house1 from "../../assets/img/house1.png";
import house2 from "../../assets/img/house2.png";

const GenCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const slider = useRef();
  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.next();
  };

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={house1} />
        <Img src={house2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc className="subChild">
          112 Glenwood Ave hyde Park
        </Content.Desc>
        <Content.Price>5.250 / monthly</Content.Price>
      </Content>
      <Arrow data-name="left" onClick={onMove} left={"left"} />
      <Arrow onClick={onMove} name="right" />
    </Container>
  );
};

export default GenCarousel;
