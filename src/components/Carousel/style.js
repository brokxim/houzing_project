import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
`;
const Wrapper = styled.div``;
const Arrow = styled(arrow)`
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: ${({ left }) => (!left ? "rotate(90deg)" : "rotate(-90deg)")};
  right: ${({ left }) => left && "20px"};
  left: ${({ left }) => !left && "20px"};
  top: 50%;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;
const Img = styled.img`
  vertical-align: middle;
  width: 100%;
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
`;
Content.Title = styled.h1`
  font-family: "Monserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;
Content.Desc = styled.div`
  font-family: "Monserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
Content.Price = styled.div`
  font-family: "Monserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;
export { Container, Arrow, Img, Blur, Content, Wrapper };
