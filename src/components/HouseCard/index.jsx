import React, { useRef } from "react";
import {
  Container,
  Content,
  Details,
  Divider,
  Footer,
  Icons,
  Img,
} from "./style";
import noimg from "../../assets/img/noimg.jpeg";
const HouseCard = (value) => {
  const {
    url,
    title,
    bad,
    bath,
    info,
    garage,
    ruler,
    address,
    city,
    country,
    description,
  } = value;
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <div className="subTitle">
          {city},{country},{description}
        </div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{bad || "Bad 1"}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{bath || "Bath 1"}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">{garage || "Garage 1"}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{ruler || "Ruler 1"}</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Footer>
        <Details.Item>
          <div className="info">$2.800/mo</div>
          <div className="subTitle">$7.500/mo</div>
        </Details.Item>
        <Details.Item $footer={true}>
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Footer>
    </Container>
  );
};
export default HouseCard;
