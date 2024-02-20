import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
const Container = styled.div`
  width: 350px;
  height: 350px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;
const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 220px;
  background: white;
`;
const Content = styled.div`
  padding-top: 24px;
  padding: 0 20px;
  background: white;
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
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)`
  font-size: 15px;
`;
Icons.Love = styled(love)`
  margin-left: 8px;
  width: 22px;
  cursor: pointer;
  height: 22px;
  border-radius: 50%;
  background: #f6f9f8f9;
  padding: 6px;
  &:active {
    transform: scale(0.9);
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: black;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: white;
`;
export { Container, Img, Content, Details, Icons, Divider, Footer };
