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
const HouseCard = (value = {}) => {
  const {
    salePrice,
    price,
    address,
    city,
    country,
    description,
    houseDetails,
    attachments,
  } = value;
  return (
    <Container>
      <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
      <Content>
        <div className="subTitle inline">
          {city},{country},{description}
        </div>
        <div className="info">{address || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{houseDetails?.beds || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{houseDetails?.bath || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">{houseDetails?.garage || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{houseDetails?.area || 0}kv</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Footer>
        <Details.Item>
          <div className="info">${salePrice & (salePrice + "/mo")}</div>
          <div className="subTitle">${price || 0}/mo</div>
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
