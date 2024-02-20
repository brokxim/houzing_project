import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  width: 100%;
  max-width: 1440px;
  // margin: auto;
`;
const Logo = styled(logoImg)`
  width: 30px;
  & path {
    fill: #ffff;
  }
  margin-right: 12px;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  // cursor: ${({ logo }) => logo && "pointer"};

  .active {
    color: #b8ff06;
  }
`;
const Span = styled.div`
  text-decoration: none;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  color: #ffff;
  padding: 0 32px;
`;
export { Container, Main, Wrapper, Section, Logo, Span, Link };
