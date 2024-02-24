import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
const Container = styled.div`
  width: 100%;
  min-width: 230px;
  max-width: 280px;
  min-height: 350px;
  max-height: 380px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;
const Img = styled.img`
  width: 100%;
  border-radius: 3px;
  vertical-align: middle;
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 22px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;
Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ $footer }) => ($footer ? "row" : "column")};
  jutify-content: center;
  align-items: center;
`;
const Icons = styled.div``;

export { Container, Img, Content, Icons, Blur };
