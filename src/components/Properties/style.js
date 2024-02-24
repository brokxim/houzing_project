import styled from "styled-components";
const Container = styled.div`
  padding: var(--padding);
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between !important;
  max-width: 1440px !important;
  width: 100%;
  margin: auto;
  @media (min-width: 1090px) {
    justify-content: space-around; !important;
  }
`;
const Wrap = styled.div`
  &:last-child {
    margin-right: ${({ $around }) => $around && "370px"};
    @media (max-width: 768px) {
      margin-right: 0 !important;
    }
  }
`;
export { Container, Wrapper, Wrap };
